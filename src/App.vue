<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem" @keyup.enter="addItem">
    <ul>
      <li v-for="item in items" :class="{'isFinished':item.isFinished}" @click="toggleFinished(item)">
        <span title="click it change stage">{{item.label}}</span>
        <span @click="deleteItem(item)" class="hander" title="delete item">&times;</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Store from './store'

export default {
  data () {
      return {
        title: "this is a new todo list a <span>demo</span>",
        items: Store.fetch(),
        newItem: ""
      }
  },
  watch: {
    items: {
      handler: function(val, oldVal){
        console.log(val, oldVal);
        Store.store(val);
      },
      deep:true
    }
  },
  methods: {
    toggleFinished: function(item){
      console.log(213);
      item.isFinished = !item.isFinished;
    },
    addItem: function(){
      if(!this.newItem){
        return;
      }
      this.items.push({label:this.newItem,isFinished:false});
      this.newItem = "";
    },
    deleteItem: function(item){
        this.items.splice(item,1);
        console.log(this.items);
    }
  }
}
</script>

<style>

.isFinished{
  text-decoration: underline;
}
.hander{
    cursor: pointer;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
