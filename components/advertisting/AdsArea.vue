<template>
    <div class="content">
        <h2 class="slogan">Смотри внимательно сколько всего у нас есть</h2>
        <h2 class="concept">Магазин очень нужных штуковин</h2>
        <img class="image" src="@/assets/images/market-image.svg" alt="Изображение магазина">
    </div>
</template>
<script>
export default {
}
</script>
<style>
    .content {
        background-color: var(--color-text);
        color: var(--color-background);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin-bottom: 60px;
    }
    .image {
        grid-area: 1 / -1 / 3 / -2;
        justify-self: end;
        align-self: end;
        margin-right: 36px;
    }
    .slogan {
        font-size: 24px;
        margin-top: 1rem;
        margin-left: 40px;
        max-width: 324px;
        font-weight: normal;
        grid-area: 1 / 1 / 2 / 3;
    }
    .concept {
        grid-area: 2 / 1 / 3 / 3;
        max-width: 760px;
        font-size: 78px;
        margin-bottom: 40px;
        margin-left:40px;
        align-self: start;
    }
</style>