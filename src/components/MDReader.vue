<template>
<div class="card text-start position-relative">
    <div class="md-reader card-body" v-html=docText>
    
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