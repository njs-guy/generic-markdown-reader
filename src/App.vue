<template>
  <!-- Toolbar / Header and button events -->
  <Header
  @btn-open-click="onOpen()"
  />
  <div class="main-panel container-fluid">
      <div class="row align-items-middle gx-3">
        <div class="col flex-column">
          <MDEditor @update:editText="onInputUpdate" />
        </div>
        <div class="col flex-column">
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
        onInputUpdate(t:string) {
          this.updatePreview(t, this.addClasses);
        },
        updatePreview(text:string, callback:CallableFunction) {
          this.dT = convertOutput(text);
          // callback(); //addClasses
        },
        async loadFile() {
          const md = await openMDFile();
          this.dT = md;
        },
        addClasses() {
          let tableList = document.getElementsByTagName("table");
          let blockquoteList = document.getElementsByTagName("blockquote");
          let linkList = document.getElementsByTagName("a");

          // console.log("Tables: " + String(tableList.length));
          // console.log("Block quotes: " + String(blockquoteList.length));
          // console.log("Links: " + String(linkList.length));

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

          if(linkList.length > 0) {
            for(let link of linkList) {
              link.classList.add("link-primary");
            }
          }
        },
        onOpen() {
          console.log("Open file...");
        },
    },
    mounted: function() { // On load

    },
    watch: {
      dT() {
        // await this.addClasses();
        setTimeout(this.addClasses, 500);
        // this.addClasses();
      }
    }
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

.link-primary {
  text-decoration: none;
}

.link-primary:hover {
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
  height: clamp(60vh, 80vh, 90vh);
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
