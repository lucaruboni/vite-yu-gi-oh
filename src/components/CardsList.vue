<script>
import CardsItem from './CardsItem.vue';
import CardCounter from './CardCounter.vue';
import SelectBox from './SelectBox.vue';
import {state} from '../state';

export default{
    name: 'CardsList',
    components: {
        CardsItem,
        CardCounter,
        SelectBox
    },
    data(){
        return{
            state
        }
    },
    methods: {
        performSearch(){
            console.log('ciao', this.state.archetypes);

            const url = this.state.API_URL + `?archetype=${this.state.archetypes}`;
            console.log(url)
            this.state.fetchArchetype(url)
        }
    }
}
</script>

<template>
<div class="container">
    
   <SelectBox @makeSelect="performSearch()"></SelectBox>
    <CardCounter :length="state.cards.length" v-if="state.cards"></CardCounter>
    
    <div class="row row-cols-1 row-cols-md3 row-cols-lg-4" v-if="!state.loading">
        <CardsItem class="col" :card="card" v-for="(card, index) in state.cards"  :key="index"></CardsItem>

        
    </div>
    <div class="row" v-else>
        <div class="loader col-12">
            ....LOADING YOUR CARDS
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>