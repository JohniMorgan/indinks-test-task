<template>
    <button class="icon-btn" @click="$emit('click')">
        <slot><!--Place your icon here!--></slot>
        <div class="indicate" v-if="isCounted">
            {{ count }}
        </div>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        count: {
            type: Number,
            required: false,
        }
    },
    computed: {
        isCounted() : boolean {
            return (this.$props.count && this.$props.count != 0) as boolean;
        }
    }
})
</script>
<style>
    .icon-btn {
        border: none;
        padding: 4px 7px;
        font-size: 12px;
        background-color: inherit;
        color: inherit;
    }
    /*Предотвращаем изменение при наведении*/
    .icon-btn:hover {
        background-color: inherit;
        color: inherit;
    }
    .indicate {
        position: relative;
        bottom: 40px;
        width: 1rem;
        height: 1rem;
        left: 23px;
        border-radius: 100px;
        background-color: #C95103;
        color: var(--color-background);
    }
</style>