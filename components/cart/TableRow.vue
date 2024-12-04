<template>
    <tr>
        <td> {{ item.title }}</td>
        <td> {{ item.price }}</td>
        <td> {{ item.count }}</td>
        <td> {{ total }}</td>
        <td>
            <icon-button @click="$emit('delete')">
                <delete-icon/>
            </icon-button>
        </td>
    </tr>
</template>
<script lang="ts">
import IconButton from '../buttons/IconButton.vue';
import DeleteIcon from '../icons/DeleteIcon.vue';
import { defineComponent, PropType } from 'vue'
interface TableRowModel {
    title: string,
    price: number,
    count: number,
}

export default defineComponent({
    components: { IconButton, DeleteIcon},
    props: {
        item: {
            type: Object as PropType<TableRowModel>,
            required: true
        }
    },
    computed: {
        total() : number {
            return this.item.price * this.item.count
        }
    },
})
</script>
<style>
    
</style>