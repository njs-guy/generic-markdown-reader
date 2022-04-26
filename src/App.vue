<template>
  <Header />
  <MDReader :docText=dT[0] />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MDReader from '@/components/MDReader.vue';
import Header from '@/components/Header.vue';
import { readMD } from './assets/ts/readFile'

@Options({
  name: 'App',
    components: {
      MDReader,
      Header,
    },
    methods: {
        async loadFile() {
          const md = await readMD();
          this.dT = md;
        },
    },
    mounted: function() {
        this.loadFile();
    },
    data() {
      return {
        dT: [],
      }
    }
})
export default class App extends Vue {}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
