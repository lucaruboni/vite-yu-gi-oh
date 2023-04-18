import {reactive} from 'vue';
import axios from 'axios';
export const state = reactive({
    loading: true,
    cards: null,
    info: null,
    archetype: null,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
    API_URL_ARCHETYPE:'https://db.ygoprodeck.com/api/v7/archetypes.php',
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
            this.archetype = response.data
            console.log(this.archetype)

            
            
          
            
        })
        .catch(err => {
            console.log(err);
            console.error(err.message)
        })
    }

})
