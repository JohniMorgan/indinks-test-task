<template>
    <div class="loading-area">
        <span class="loader"></span>
        <span v-if="isShowMessage">{{ message }}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
type TimeLimit = {
    current: number,
    limit: number,
}

export default defineComponent({
    props: {
        range: {
            type: Object as PropType<TimeLimit>,
            required: false,
        }
    },
    computed: {
        isShowMessage() : boolean {
            return this.range != undefined;
        },
        message() : string {
            return `Попытка ${this.range?.current} / ${this.range?.limit}`
        }
    }
})
</script>
<style>
.loading-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: linear-gradient(0deg, rgba(51, 183, 128, 0.2) 33%, var(--color-border) 100%);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-background);
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>