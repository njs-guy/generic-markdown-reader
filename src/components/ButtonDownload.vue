<template>
    <div class="dropdown">
        <button class="btn btn-light btn-sm dropdown-toggle" id="download-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Download
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="download-dropdown">
            <li><button class="dropdown-item" type="button" @click="onDownloadClick('md')">As Markdown</button></li>
            <li><button class="dropdown-item" type="button" @click="onDownloadClick('txt')">As Text</button></li>
            <li><button class="dropdown-item" type="button" @click="onDownloadClick('html')">As HTML</button></li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';

export default defineComponent({
    name: 'DownloadButton',
    methods: {
        onDownloadClick(filetype: string) {
            this.$emit("download-clicked", filetype);
        }
    }
});
</script>Button