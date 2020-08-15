<template>
  <div>
    <ul>
      <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem" class="shodow">
        <i class="fas fa-check checkBtn " 
          v-on:click="togleComplete(todoItem,index)"
          v-bind:class="{checkBtnCompleted:todoItem.completed}"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}" >{{todoItem.item}}</span>
        
          <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
            <i class="fas fa-trash-alt "  ></i>
          </span>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['propsdata'],

  methods:{
    removeTodo:function(todoItem,index){
      this.$emit('removeItem',todoItem,index)
    },
    togleComplete:function(todoItem,index){
      this.$emit('toggleItem',todoItem,index)
       
    }
  },
 
}
</script>

<style>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn{
  margin-left: auto;
  color: #DE4343;
}
.checkBtn{
  line-height: 45px;
  color: #62ECDE;
  margin-right: 5px;
}

.checkBtnCompleted{
  color: #B3ADAD;
}

.textCompleted{
  text-decoration: line-through;
  color: #B3ADAD;
}

</style>