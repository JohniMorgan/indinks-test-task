<template>
    <transition name="modal-fade">
    <div class="modal-wrapper">
        <div class="modal">
            <header class="modal-header">
                <label class="dialog-title">{{ item.title.value }}</label>
                <icon-button @click="$emit('close')">
                    <cross-icon/>
                </icon-button>
            </header>
            <section class="modal-content">
                <img :src="item.image">
                <div class="description">
                    <item-field-record v-for="key in item.keys" :field="item[key]" :key="key"/>
                </div>
                <div class="control">
                    <label>{{ item.price.value }} руб.</label>
                    <text-button label="Купить" @click="addToCartAndExit"/>
                </div>
            </section>
        </div>
    </div>
    </transition>
</template>
<script lang="ts">
import ShopItem from '~/models/shopItem'
import IconButton from '../buttons/IconButton.vue'
import TextButton from '../buttons/TextButton.vue'
import CrossIcon from '../icons/CrossIcon.vue'
import {PropType} from 'vue'
import ItemFieldRecord from './ItemFieldRecord.vue'
export default {
  components: { IconButton, TextButton, CrossIcon, ItemFieldRecord },
  props: {
    item: {
        type: Object as PropType<ShopItem>,
        required: true
    }
  },
  methods: {
    addToCartAndExit() {
        /**TODO Сделать корзину */
        this.$emit('close');
    }
  }
}
</script>
<style>
    .modal-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
    }
    .modal {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-width: 960px;
        width: 100%;
        max-height: 660px;
    }
    .modal-header {
        padding: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-background-alt);
        color: var(--color-text-alt);
    }
    .dialog-title {
        font-size:32px;
        font-weight: bold;
        text-overflow:ellipsis;
        max-height: 44px;
    }
    .modal-content {
        display: grid;
        grid-template-columns: 52% auto;
        grid-template-rows: repeat(2, 50%);
        background-color: var(--color-background);
        max-height: 80%;
        padding: 40px;
    }
    .modal-content img {
        width: 100%;
        aspect-ratio: 1 / 1;
        grid-row-start: 1;
        grid-row-end: -1;
    }
    .description {
        grid-row-start: 1;
        grid-row-end: 2;
        padding-left:40px;
    }
    .control {
        display: flex;
        flex-direction: column;
        grid-row-start: 2;
        grid-row-end: 3;
        padding-left: 40px;
        font-size: 36px;
        font-weight: bold;
        align-self: end;
    }
    .control label {
        margin-bottom: 24px;
    }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease
  }
</style>