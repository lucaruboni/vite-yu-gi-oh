import {reactive} from 'vue';
import axios from 'axios';
export const state = reactive({
    loading: true,
    cards: null,
    info: null,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
    fetchCards(url) {
        axios.get(url)
        .then(response => {
            console.log(response);
            this.cards = response.data.data
            
            
            this.loading = false
            console.log(this.cards)
            console.log(this.images)
        })
        .catch(err => {
            console.log(err);
            console.error(err.message)
        })
    }
})
