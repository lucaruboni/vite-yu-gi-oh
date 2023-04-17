import {reactive} from 'vue';
import axios from 'axios';
export const state = reactive({
    loading: true,
    cards: null,
    info: null,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0'
})
