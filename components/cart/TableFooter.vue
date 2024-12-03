
<template>
    <tfoot class="table-footer">
        <tr>
            <th v-for="(item, index) in mapping" :key="index">
                {{ cellValue(item.key) }}
            </th> 
        </tr>
    </tfoot>
</template>
<script lang="ts">
import { PropType } from 'vue'
import { Mapping } from '~/models/base';
type SummaryInfo = {
    title?: string,
    price?: number,
    count?: number,
    total?: number,
}

type Keys = Array<Mapping>;

export default {
    props: {
        mapping: {
            type: [] as PropType<Keys>,
            required: true,
        },
        fill: {
            type: Object as PropType<SummaryInfo>,
            required: false,
            default: () => ({title: 'Итого', count: 0, total: 0})
        }
    },
    computed: {
        cellValue() {
            return (key: string) => {
                return this.fill[key] != undefined ? this.fill[key] : ''
            }
        }
    }

}
</script>
<style>
    .table-footer {
        text-align: start;
    }
</style>