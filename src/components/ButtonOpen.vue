<template>
    <input type="file" ref="openButton" class="btn btn-light btn-sm" id="openButton" accept=".txt, .md" style="display: none" >
    <!-- <button @click="$refs.openButton.click()" class="btn btn-light btn-sm">
        Open
    </button> -->
    <StdButton text="Open" 
    @click="$refs.openButton.click()" 
    @btn-open-click="$emit('btn-open-click')"/>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import StdButton from "./Button.vue";

export default defineComponent({
    name: 'OpenButton',
    props: {
        icon: String
    },
    components: {
        StdButton,
    },
    methods: {
        onClick() {
            this.$emit('btn-open-click');
        }
    },
})
</script>