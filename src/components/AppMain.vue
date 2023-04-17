<script>
import CardsList from './CardsList.vue';
import {state} from '../state.js'
export default {
    name : 'AppMain',
    components: {CardsList},
    data(){
        return{
            state
        }
    }
}

</script>

<template>

<main>
    <CardsList :cards="state.cards"></CardsList>
</main>

</template>

<style lang="scss" scoped>

</style>