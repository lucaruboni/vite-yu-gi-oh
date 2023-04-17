<script>
export default{
    name: 'CardsItem',
    props:{
        card : Object,
        
       
    }
}

</script>

<template>
    <div class="col">
        <div class="card text-center">
            <img :src="card.image_url" alt="" class="rounded-circle img-fluid" >
            <div class="text">
                <h3>{{ card.name }}</h3>
                <div class="archetype">{{ card.archetype}}</div>
        
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>