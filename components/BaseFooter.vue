<template>
    <footer class="footer">
        <h1>{{ title }}</h1>
        <nav class="navigation">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/cart">Магазин</nuxt-link>
        </nav>
        <text-button label="Напиши нам"/>
    </footer>
</template>
<script>
import TextButton from './buttons/TextButton.vue'
export default {
  components: { TextButton },
  props: {
    title: {
        type: String,
        required: false,
        default: () => "Штуки"
    }
  }
}
</script>
<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px var(--color-border) solid;
        background-color: var(--color-background-alt);
        color: var(--color-text-alt);
        padding: 12px 24px;
        margin-bottom: 12px;
        height: 124px;
    }
    .navigation {
        display: grid;
        grid-auto-rows: auto;
        grid-template-columns: auto auto;
        gap: 32px;
    }
    .navigation a {
        color: var(--color-text-alt);
    }
    .footer button {
        border-color: var(--color-background);
        background-color: var(--color-background-alt);
        color: var(--color-text-alt);
    }
    @media(hover: hover) {
        .footer button:hover {
            background-color: var(--color-background);
            color: var(--color-text);
        }
    }
</style>