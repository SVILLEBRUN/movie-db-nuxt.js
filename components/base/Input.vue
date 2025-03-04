<template>
    <div class="relative">
        <input 
            :class="classes"
            :type="type" 
            :placeholder="placeholder"
            :value="modelValue"
            @input="(event) => $emit('update:modelValue', event.target.value)"
            :required="required"
            :autofocus="autofocus"
        />

        <span v-if="icon || slots.icon" class="absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
            <Icon v-if="icon" :name="icon" :size="iconSize" />
            <slot v-else name="icon" />
        </span>
    </div>

</template>


<script setup>
// Composent de recherche typescript: placeholder, icon, model-value etc ...
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    iconSize: {
        type: Number,
        default: 20
    },
    type: {
        type: String,
        default: 'text'
    },
    inputClass: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    },
    autofocus: {
        type: Boolean,
        default: false
    }
})

const slots = useSlots()

const classes = computed(() => {
    return props.inputClass + (props.icon || slots.icon ? ' pe-9' : '')
})

</script>

<style scoped>
input::placeholder {
    opacity: 0.6;
}
</style>