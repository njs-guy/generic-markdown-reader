<template>
  <Header />
  <MDReader :docText=this.dT />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { readMD } from './assets/ts/readFile';

import MDReader from '@/components/MDReader.vue';
import Header from '@/components/Header.vue';


@Options({
  name: 'App',
    components: {
      MDReader,
      Header,
    },
    methods: {
        async loadFile() {
          const md = await readMD();
          this.dT = md.join();
        },
        displayDT() {
          this.output = String(this.dT.join());
        }
    },
    mounted: function() { // On load
        this.loadFile();
        this.displayDT();
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
