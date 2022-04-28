<template>
  <Header />
  <div class="main-panel container-fluid">
      <div class="row align-items-middle gx-2">
      <div class="col ">
        <!-- This will be replaced with text input later -->
        <MDReader :docText=this.dT />
      </div>
      <div class="col">
        <MDReader :docText=this.dT />
      </div>
    </div>
  </div>
  
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
          console.log(this.dT);
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
  background-color: #eeeeee;
}

.main-panel {
  color: black;
  /* max-height: 100%; */
}

.card {
  /* max-width: 50%; */
  /* margin: 5px; */
  border: 1px solid lightgray;
  /* min-height: 100%; */
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
