<template>
    <h1>{{docText}}</h1>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';

export default defineComponent({
    name: 'MDReader',
    props: {
        docText: String
    },
})
</script>

<style scoped>
    body {
        color: black;
    }
</style>