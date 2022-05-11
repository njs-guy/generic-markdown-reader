<template>
    <header class="navbar navbar-dark bg-dark container-fluid">
        <a href="https://github.com/njshockey/generic-markdown-reader" target="_blank" class="navbar-brand">Generic Markdown Reader</a>
        <div class="toolbar">
            <OpenButton @loadedText="$emit('loadedText', $event)"/>
        </div>
    </header>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import StdButton from "./Button.vue";
import OpenButton from "./ButtonOpen.vue"

export default defineComponent({
    name: 'ReaderHeader',
    components: {
        // StdButton,
        OpenButton,
    },
})
</script>