<template>
    <textarea :value="editText" @input="$emit('update:editText', $event.target.value)" class="md-editor form-control" placeholder="Mark is down" autofocus=true />
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';

export default defineComponent({
    name: 'MDEditor',
    props: ['editText'],
    emits: ['update:editText'],
})
</script>