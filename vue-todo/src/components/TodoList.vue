<template>
  <div>
    <ul>
      <li v-for="(todoItem,index) in todoItems" v-bind:key="todoItems" class="shodow">
        {{todoItem}}
        
          <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
            <i class="fas fa-trash-alt "  ></i>
          </span>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      todoItems:[]
    }
  },
  created:function(){
    if(localStorage.length>0){
      for(var i=0; i<localStorage.length;i++){
        if (localStorage.key(i)!=="loglevel:webpack-dev-server"){
          this.todoItems.push(localStorage.key(i))
        }
      }
    }
  },
  methods:{
    removeTodo:function(todoItem,index){
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index,1)
    }
  }

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