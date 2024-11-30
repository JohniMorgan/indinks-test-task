<template>
    <button @click="$emit('click')">
        {{ label }}
    </button>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: () => 'Нажать'
        }
    }
}
</script>
<style>
    
</style>