<script>
import { state } from '../state';
export default{
    name: 'SelectBox',
    data(){
        return{
            state
        }
    }
}
</script>

<template>
    <div class="form-group">
      
      
      <label for="">ARCHETYPES</label>
      <div class="select_container d-flex">
        <button  class="btn btn-outline-secondary" type="button" id="button-addon1" @click="$emit('makeSelect')" >Button</button>
      <select v-model="state.archetypesClicked" class="form-control" name="Select Archetype" id="" >
        <option  v-for="archetype in state.archetypes">{{ archetype.archetype_name }}</option>
        
      </select>
      </div>
     
    </div>
</template>

<style lang="scss" scoped>
    .form_group{
        padding: 1rem;
        background-color: black;
        color: white;
    }
</style>