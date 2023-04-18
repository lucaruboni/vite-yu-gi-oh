<script>
import { state } from '../state';
export default{
    name: 'CardCounter',
    props:{
        length: Number,
        data(){
            return{
                state
            }
        }
    }
}
</script>

<template>
    <div class="my-3 col">
    <h1>TOTAL CARD:  {{ length }}</h1>
        
    </div>
</template>

<style lang="scss" scoped>
    div{
        border: 1px solid black;
        border-radius: 20px;
        width: 400px;
        padding: 0.3rem;
        padding-left: 0.8rem;
    }
</style>