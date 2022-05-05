<template>
    <input type="text" :value="editText" @input="$emit('update:editText', $event.target.value)" class="form-control" placeholder="Mark is down" />
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';

export default defineComponent({
    name: 'MDEditor',
    props: ['editText'],
    emits: ['update:editText'],
})
</script>