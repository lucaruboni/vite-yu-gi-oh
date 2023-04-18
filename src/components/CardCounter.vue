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
    <div>
    <h1>Total Card:</h1> {{ length }}
        
    </div>
</template>

<style lang="scss" scoped>

</style>