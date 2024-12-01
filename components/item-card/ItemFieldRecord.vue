<template>
    <div class="record">
        <label>{{ field.label}}</label>
        {{ field.value }}
    </div>
</template>
<script lang="ts">
import {PropType} from 'vue'
type Field = {
    value: string | number | boolean,
    label: string
}
export default {
    props: {
        field: {
            type: Object as PropType<Field>,
            required: true
        }
    }
}
</script>
<style>
    .record {
        display: flex;
        flex-direction: column;
        font-size: 24px;
        line-height: 28px;
        font-weight: bold;
        max-height: 140px;
        margin-bottom: 8px; 
        overflow: hidden;
        text-overflow: ellipsis;
        word-break:break-all;
    }
    .record label {
        color: var(--color-sign);
        font-size: 20px;
    }
</style>