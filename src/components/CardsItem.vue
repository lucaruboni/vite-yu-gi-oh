<script>
export default{
    name: 'CardsItem',
    props:{
        card : Object,
        index: String,
        image: String
    }
}

</script>

<template>
        
        <div class="card d-flex text-center gap-2">
            <img :src="card.card_images[0].image_url" alt="" class="py-2  align-self-center img-fluid" >
            <div class="text py-2">
                <h3>{{ card.name }}</h3>
                <div class="archetype">{{ card.archetype}}</div>
        
            </div>
        </div>
    
</template>

<style lang="scss" scoped>

    .card{
        border: none;
        margin-bottom: 0.3rem;
        background-color: #000000c9;
        color: white;
        margin-left: 0.1rem;
        margin-right: 0.1rem;

        
    }

    .text{
        font-size: 0.8rem;
        h3{
            font-size: 1rem;
        }
    }

    img{
        width: 300px;
    }
</style>