<template>
  <div id="app">
    <div class="container">
      <h1 v-text="text"></h1>
      <input type="text"  v-on:keyup.enter="addNew"/>
      <button v-on:click="addNew">Add</button>
      <ul>
        <li>aaa
        </li>
        <li>aaa</li>
      </ul>
      <div class="delAll">
        Delete All
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data() {
    return {
        text: 'Todo List'
    }
  },
  methods: {
    addNew() {
      console.log("add");
    }
  },
  components: {

  }
}
</script>

<style>
  .container {
    text-align: center;
  }
  input {
    box-shadow: 0 0 8px rgb(150, 104, 219);
    border: none;
  }
  li {
    margin-top: 9px;
  }
  button {
    border-radius: 14px;
    color: black;
    box-shadow: 0 0 2px rgb(70, 120, 231);
    background: none;
  }
  span.func {
    cursor: pointer;
    margin-left: 7px;
    text-decoration: underline;
  }
  span.func.first {
    margin-left: 13px;
  }
  ul {
    text-align: left;
    margin-left: 50px;
  }
  .finished {
    text-decoration: line-through;
  }
  div.delAll {
    text-decoration: underline;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
}
</style>
