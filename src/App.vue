<script>
import {state} from './state';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default{
  components :{
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return{
      state
    }
  },
  mounted(){
    state.fetchCharacters(state.API_URL)
  }

}
</script>

<template>
 
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style scoped>

</style>
