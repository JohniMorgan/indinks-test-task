
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
import { defineComponent, PropType } from 'vue'
import { Mapping } from '~/models/base';
import { SummaryInfo } from '~/models/base';
import { getKeyValue } from '~/models/base';
type Keys = Array<Mapping>;

export default defineComponent({
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
            return (key: keyof SummaryInfo) => {
                const field = getKeyValue<SummaryInfo, keyof SummaryInfo>(key)(this.fill);
                return field != undefined ? field : ''
            }
        }
    }

})
</script>
<style>
    .table-footer {
        text-align: start;
    }
</style>