<template>
    <div class="relative">
        <input 
            class="bg-white rounded-full py-1 px-3 w-full"
            :class="icon ? 'pe-9' : ''"
            :type="type" 
            :placeholder="placeholder"
            :value="modelValue"
            @input="(event) => $emit('update:modelValue', event.target.value)"
        />

        <span v-if="icon" class="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <Icon :name="icon" size="20" />
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
    }
})

</script>

<style scoped>
input::placeholder {
    opacity: 0.6;
}
</style>