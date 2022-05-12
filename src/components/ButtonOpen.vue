<template>
    <input type="file" ref="btnOpen" id="btnOpen" accept=".txt, .md" style="display: none" 
    @change="openText()" >
    <StdButton text="Open" 
    @click="$refs.btnOpen.click()" />
    <!-- @btn-open-click="$emit('btn-open-click')" -->
</template>

<script>
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
        // With FileReader, take the opened file and read the text as a string. 
        // After it's been loaded, emit "loadedText" along with the text string.
        openText() {
            const file = this.$refs.btnOpen.files[0]; // Despite this being an error in TS, this line works perfectly. (shrug)
            const reader = new FileReader();
            reader.onload = (e) => {
                let text = String(e.target?.result);
                this.$emit("loadedText", text);
            };
            reader.readAsText(file);
        }
    },
})
</script>