<template>
  <div>
     <transition-group name="list" tag="ul">
      <li v-for="(todoItem,index) in this.todoItems" v-bind:key="todoItem" class="shodow">
        <i class="fas fa-check checkBtn " 
          v-on:click="togleComplete(todoItem,index)"
          v-bind:class="{checkBtnCompleted:todoItem.completed}"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}" >{{todoItem.item}}</span>
        
          <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
            <i class="fas fa-trash-alt "  ></i>
          </span>
        
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {

  methods:{
    removeTodo(todoItem,index){
      this.$store.commit ('removeOneItem',{todoItem,index})
      //this.$emit('removeItem',todoItem,index)
    },
    togleComplete(todoItem,index){
      
      this.$store.commit('togleOneItem',{todoItem,index})
      //this.$emit('toggleItem',todoItem,index)
    }
  },
  computed:{
    todoItems(){
      return this.$store.getters.storedTodoItems
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
/* 리스트 아이템 트랜지션 효과 */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>