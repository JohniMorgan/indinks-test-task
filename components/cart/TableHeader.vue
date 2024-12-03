<template>
    <thead >
        <tr>
            <th v-for="(label, id) in labels"
                :key="id"
                class="t-header"
                :class="id == 0 ? 'long' : ''"
            >{{ label }}</th>
        </tr>
    </thead>
</template>
<script lang="ts">
export default {
    props: {
        labels: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style>
    .t-header {
        text-align:start;
        border-bottom: 2px var(--color-border) solid;
    }
    .long {
        width: 40%;
    }
</style>