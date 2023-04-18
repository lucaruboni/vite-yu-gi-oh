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
      <label for=""></label>
      <select v-model="state.archetypes" class="form-control" name="Select Archetype" id="" @click="$emit('makeSelect')">
        <option v-for="(archetype, index) in state.archetypes" >{{ archetype.archetype }}</option>
        
      </select>
    </div>
</template>

<style lang="sass" scoped>

</style>