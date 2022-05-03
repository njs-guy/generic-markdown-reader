<template>
  <Header />
  <div class="main-panel container-fluid">
      <div class="row align-items-middle gx-2">
      <div class="col ">
        <MDEditor />
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
import MDEditor from '@/components/MDEditor.vue';
import Header from '@/components/Header.vue';


@Options({
  name: 'App',
    components: {
      Header,
      MDReader,
      MDEditor,
    },
    methods: {
        async loadFile() {
          const md = await readMD();
          this.dT = md;
        },
        displayDT() {
          console.log("displayDT");
        }
    },
    mounted: function() { // On load
        this.loadFile();
        // this.displayDT();
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

/* Markdown stylings */
pre, p > code {
    border-radius: 3px;
    padding: 5px;
    background-color: #e0e0e0;
}

.header {
  background-color: #202020;
  color: #CECECE;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.header-item {
  margin: 0 auto;
  vertical-align: middle;
}

.toolbar {
  vertical-align: middle;
  float: right;
}

.navbar {
  color: #eee;
  margin-bottom: 5px;
}

.md-reader {
  color: black;
}

.main-panel {
  color: black;
}

.card {
  border: 1px solid lightgray;
}

.form-control {
  border: 1px solid lightgray;
}
.form-control:focus {
  border: 1px solid lightgray;
  box-shadow: none;
  outline: 0 none;
}

#app {
  font-family: 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
