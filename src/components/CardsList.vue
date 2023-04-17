<script>
import CardsItem from './CardsItem.vue';
import {state} from '../state';
export default{
    name: 'CardsItem',
    components: {CardsItem},
    data(){
        return{
            state
        }
    }
}
</script>

<template>
<div class="container">
    <div class="row row-cols-1 row-cols-md3 row-cols-lg-4">
        <characterItem :card="card" v-for="card in state.cards" v-if="!state.loading"></characterItem>

        <div class="col-12" v-else>
            <div class="loader">
                ....LOADING YOUR CARDS
            </div>
        </div>

    </div>
</div>
</template>

<style lang="scss" scoped>

</style>