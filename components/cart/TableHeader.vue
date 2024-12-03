<template>
    <thead class="t-header">
        <tr>
            <th v-for="(item, id) in mapping"
                :key="id"
                class="t-header"
                :class="id == 0 ? 'long' : ''"
            >{{ item.label }}</th>
        </tr>
    </thead>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Mapping } from '~/models/base';

type TableProp = Array<Mapping>
export default {
    props: {
        mapping: {
            type: [] as PropType<TableProp>,
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