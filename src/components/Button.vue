<template>
    <button @click="onClick()" class="btn btn-light btn-sm">
        {{text}}
    </button>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';

export default defineComponent({
    name: 'StdButton',
    props: {
        text: String,
        icon: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        }
    }
})
</script>

<style>
    btn {
        margin-right: 5px;
    }
</style>