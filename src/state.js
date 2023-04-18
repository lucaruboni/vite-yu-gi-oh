import {reactive} from 'vue';
import axios from 'axios';
export const state = reactive({
    loading: true,
    cards: null,
    info: null,
    archetypesClicked: '',
    archetypes: null,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0',
    API_URL_ARCHETYPE:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    //https://db.ygoprodeck.com/api/v7/cardinfo.php?num=350&offset=0&
    fetchCards(url) {
        axios.get(url)
        .then(response => {
            console.log(response);
            this.cards = response.data.data
            
            
            this.loading = false
            console.log(this.cards)
            
        })
        .catch(err => {
            console.log(err);
            console.error(err.message)
        })
    },
    fetchArchetype(url) {
        axios.get(url)
        .then(response => {
            console.log(response);
            this.archetypes = response.data
            console.log(this.archetypes)
            

            
            
          
            
        })
        .catch(err => {
            console.log(err);
            console.error(err.message)
        })
    }

})
