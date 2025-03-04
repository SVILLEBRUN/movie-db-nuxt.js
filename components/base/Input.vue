<template>
    <div class="relative">
        <input 
            :class="classes"
            :type="type" 
            :placeholder="placeholder"
            :value="modelValue"
            @input="(event) => $emit('update:modelValue', event.target.value)"
        />

        <span v-if="icon || $slots.icon" class="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <Icon v-if="icon" :name="icon" size="20" />
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
    type: {
        type: String,
        default: 'text'
    },
    inputClass: {
        type: String,
        default: ''
    }
})


const classes = computed(() => {
    return props.inputClass += props.icon ? ' pe-9' : ''
})

</script>

<style scoped>
input::placeholder {
    opacity: 0.6;
}
</style>