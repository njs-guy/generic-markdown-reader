<template>
    <header class="header">
        <h1 class="header-item">Generic Markdown Reader</h1>
        <div class="toolbar">
            <StdButton text='Open' />
        </div>
    </header>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import StdButton from "./Button.vue";

export default defineComponent({
    name: 'ReaderHeader',
    components: {
        StdButton,
    },
})
</script>

<style scoped>
    .header {
        background-color: #202020;
        color: #CECECE;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }

    .header-item {
        margin: 0 auto;
        vertical-align: middle;
    }

    .toolbar {
        vertical-align: middle;
        float: right;
    }
</style>