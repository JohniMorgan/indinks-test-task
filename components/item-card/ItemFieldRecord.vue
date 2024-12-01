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
        padding-bottom: 8px;
        font-size: 24px;
        font-weight: bold;
    }
    .record label {
        color: var(--color-sign);
        font-size: 20px;
    }
</style>