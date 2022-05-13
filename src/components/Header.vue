<template>
    <header class="navbar navbar-dark bg-dark container-fluid">
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <a href="https://github.com/njshockey/generic-markdown-reader" target="_blank" class="navbar-brand">Generic Markdown Reader</a>
            <div class="toolbar d-flex justify-content-end">
                <OpenButton @loadedText="$emit('loadedText', $event)"/>
                <DownloadButton @download-clicked="$emit('download-clicked', $event)" />
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import StdButton from "./Button.vue";
import OpenButton from "./ButtonOpen.vue"
import DownloadButton from "./ButtonDownload.vue"

export default defineComponent({
    name: 'ReaderHeader',
    components: {
        // StdButton,
        OpenButton,
        DownloadButton,
    },
})
</script>