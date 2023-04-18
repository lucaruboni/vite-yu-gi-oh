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
      <select v-model="state.archetype" class="form-control" name="Select Archetype" id="" @click="$emit('makeSelect')">
        <option>{{ state.archetype }}</option>
        
      </select>
    </div>
</template>

<style lang="sass" scoped>

</style>