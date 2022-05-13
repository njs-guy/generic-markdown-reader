<template>
  <!-- Toolbar / Header and button events -->
  <Header
  @btn-open-click="onOpen()"
  @loadedText="onLoadedText($event)"
  @download-clicked="downloadFile($event)"
  />
  <div class="main-panel container-fluid">
      <div class="row align-items-middle gx-3">
        <div class="col flex-column">
          <MDEditor :editText=this.eT @update:editText="onInputUpdate" />
        </div>
        <div class="col flex-column">
          <MDReader :docText=this.dT />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { openMDFile, convertOutput, saveFile } from './readFile';

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
        dT: '', // The text in the preview panel, formatted as HTML
        eT: '', // The text in the editor panel, formatted as text/markdown
      }
    },
    methods: {
        // Updates preview with classes when this.dT is changed
        onInputUpdate(t:string) {
          this.eT = t;
          this.updatePreview(t, this.addClasses);
        },
        // Simply converts the output again, and then adds classes for the CSS
        updatePreview(text:string, callback:CallableFunction) {
          this.dT = convertOutput(text);
          // callback(); //addClasses
        },
        // When a txt or md file is opened, set this.eT to the opened text.
        onLoadedText(ev:string) {
          this.eT = ev; // Change eT to text from event
        },
        // Downloads what is currently in the edit panel as the file type passed into it
        downloadFile(filetype: string) {
          if (filetype === "html") {
            saveFile(this.dT, "markdown", filetype);
          } else {
            saveFile(this.eT, "markdown", filetype);
          }
        },
        // Currently uncalled but I might still want this later. Loads a cheatsheet.md from the public dir
        async loadFile() {
          const md = await openMDFile();
          this.dT = md;
        },
        // Adds classes to certain markdown elements for CSS
        addClasses() {
          let tableList = document.getElementsByTagName("table");
          let blockquoteList = document.getElementsByTagName("blockquote");
          let linkList = document.getElementsByTagName("a");

          // console.log("Tables: " + String(tableList.length));
          // console.log("Block quotes: " + String(blockquoteList.length));
          // console.log("Links: " + String(linkList.length));

          // Tables
          if(tableList.length > 0) {
            for (let table of tableList) {
              table.classList.add("table");
              table.classList.add("table-bordered");
              table.classList.add("table-striped");
              table.classList.add("table-responsive");
            }
          }

          // Block quotes
          if(blockquoteList.length > 0) {
            for(let bq of blockquoteList) {
              bq.classList.add("blockquote");
            }
          }

          // Links
          if(linkList.length > 0) {
            for(let link of linkList) {
              link.classList.add("link-primary");
            }
          }
        }, // End addClasses()
    },
    mounted: function() { // On load

    },
    watch: {
      dT() {
        // await this.addClasses();
        setTimeout(this.addClasses, 500);
        // this.addClasses();
        
      },
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
.btn {
  margin-left: 8px;
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
