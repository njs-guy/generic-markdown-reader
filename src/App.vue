<template>
  <MDReader />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MDReader from '@/components/MDReader.vue';

@Options({
  name: 'App',
    components: {
      MDReader,
    },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
