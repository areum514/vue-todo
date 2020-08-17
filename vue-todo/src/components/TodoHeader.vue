<template>
 <!--  <h1> {{propsdata}} </h1> -->
  <h1>{{this.$store.state.headerText}}</h1>
</template>
<script>
export default{
  props:['propsdata'],
}
</script>
<style scoped>
h1{
  color:#2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}

</style>