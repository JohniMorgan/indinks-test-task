<template>
    <button class="icon-btn">
        <slot><!--Place your icon here!--></slot>
        <div class="indicate" v-if="isCounted">
            {{ count }}
        </div>
    </button>
</template>
<script lang="ts">
export default {
    props: {
        count: {
            type: Number,
            required: false,
        }
    },
    computed: {
        isCounted() : boolean {
            return this.$props.count && (this.$props.count != 0);
        }
    }
}
</script>
<style>
    .icon-btn {
        border: none;
        padding: 4px 7px;
        font-size: 12px;
    }
    .icon-btn:hover {
        background-color: var(--color-background);
        color: var(--color-text);
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