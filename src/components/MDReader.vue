<template>
<div class="card text-start position-relative">
    <div class="md-reader card-body">
    {{docText}}
    </div>
</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';

export default defineComponent({
    name: 'MDReader',
    props: {
        docText: String,
    },
})
</script>

<style>
    .md-reader {
        color: black;
        /* margin: 10px; */
        /* border-radius: 10px;
        outline: 1px solid black; */
    }
</style>