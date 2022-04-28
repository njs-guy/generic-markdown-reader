<template>
    <header class="navbar navbar-dark bg-dark container-fluid">
        <a href="https://github.com/njshockey/generic-markdown-reader" target="_blank" class="navbar-brand">Generic Markdown Reader</a>
        <div class="toolbar">
            <StdButton class="nav-item" text='Open' />
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

    .navbar {
        color: #eee;
        margin-bottom: 5px;
        /* height: 20px; */
    }
</style>