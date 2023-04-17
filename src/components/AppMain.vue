<script>
import CardsItem from './CardsItem.vue';
import {state} from '../state.js'
export default {
    name : 'AppMain',
    components: {CardsItem},
    data(){
        return{
            state
        }
    }
}

</script>

<template>

<main>
    <CardsList :cards="cards"></CardsList>
</main>

</template>

<style lang="scss" scoped>

</style>