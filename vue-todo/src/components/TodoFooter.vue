<template>
  <div>
      <div class="clearAllContainer"
      v-on:click="clearTodo">
        <span class="clearAllBtn">
          clear all
        </span>
      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
methods:{
  ...mapMutations({
    clearTodo:'clearAllItems'
  })
  /* clearTodo(){
    this.$store.commit('clearAllItems')
    //this.$emit('clearAll');
  } */
}
}
</script>

<style scoped>
.clearAllContainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color: #E20303;
  display: block;
}


</style>