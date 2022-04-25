<template>
    <header class="header">
        <h1 class="header-item">Generic Markdown Reader</h1>
    </header>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';

export default defineComponent({
    name: 'ReaderHeader',
})
</script>

<style scoped>
    .header {
        background-color: #202020;
        color: #CECECE;
        display: flex;
        flex-direction: row;
    }

    .header-item {
        margin: 0 auto;
        vertical-align: middle;
    }
</style>