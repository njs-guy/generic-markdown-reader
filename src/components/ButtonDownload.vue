<template>
    <div class="dropdown">
        <button class="btn btn-light btn-sm dropdown-toggle" id="download-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Download
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="download-dropdown">
            <li><button class="dropdown-item" type="button">As Markdown</button></li>
            <li><button class="dropdown-item" type="button">As Text</button></li>
            <!-- <li><button class="dropdown-item" type="button">As HTML</button></li> -->
        </ul>
    </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
    name: 'DownloadButton',
});
</script>Button