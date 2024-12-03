<template>
    <button @click="$emit('click')" class="text-button" :class="classes">
        {{ label }}
    </button>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: () => 'Нажать'
        },
        altColor: {
            type: Boolean,
            default: () => false
        }   
    },
    computed: {
        classes() {
            var modClasses = ''; //Если мы расширяем число классов, заведем переменную
            modClasses += this.altColor ? ' alt-color' : ''
            return modClasses;
        } 
    }
}
</script>
<style>
    .text-button.alt-color {
        background-color: var(--color-background-alt);
        color: var(--color-text-alt);
    }
    @media(hover: hover) {
        .text-button.alt-color:hover {
            background-color: var(--color-background);
            color: var(--colot-text);
        }
    }
</style>