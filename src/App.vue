<template>
  <Header />
  <div class="main-panel container-fluid">
      <div class="row align-items-middle gx-2">
      <div class="col ">
        <MDEditor @update:editText="updatePreview" />
      </div>
      <div class="col">
        <MDReader :docText=this.dT />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { openMDFile, convertOutput } from './assets/ts/readFile';

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
    data() {
      return {
        dT: '',
      }
    },
    methods: {
        updatePreview(text:string) {
          //this.eT = text;
          this.dT = convertOutput(text);
        },
        async loadFile() {
          const md = await openMDFile();
          this.dT = md;
        },
        addClasses() {
          let tableList = document.getElementsByTagName("table");
          let blockquoteList = document.getElementsByTagName("blockquote");

          if(tableList.length > 0) {
            for (let table of tableList) {
              table.classList.add("table");
              table.classList.add("table-bordered");
              table.classList.add("table-striped");
              table.classList.add("table-responsive");
            }
          }

          if(blockquoteList.length > 0) {
            for(let bq of blockquoteList) {
              bq.classList.add("blockquote");
            }
          }
        },
    },
    mounted: async function() { // On load
        // await this.loadFile();
        // this.addClasses();
    },
})
export default class App extends Vue {}
</script>

<style>
/* Top level */
body {
  padding: 0;
  margin: 0;
  background-color: #eeeeee;
}

#app {
  font-family: 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

/* Markdown stylings */
pre, p > code {
    border-radius: 5px;
    padding: 5px;
    background-color: #e0e0e0;
}

.md-reader > p > a {
  text-decoration: none;
}

.md-reader > p > a:hover {
  text-decoration: underline;
}

.blockquote {
  padding-left: 10px;
  border-left: 2px solid #202020;
  background-color: #e0e0e0;
}

/* Other stylings */
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

.card, .md-editor {
  width: 47vw;
  height: 92vh;
}

.md-reader {
  overflow-y: scroll;
}

.md-editor {
  resize: none;
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
</style>
