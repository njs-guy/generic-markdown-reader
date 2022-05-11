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
        // Emit btn-(this.text)-click
        onClick() {
            this.$emit('btn-' + this.text + '-click'); // ex: 'btn-open-click'
        }
    }
})
</script>