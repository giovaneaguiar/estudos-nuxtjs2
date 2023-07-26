<template>
    <div> 
        <h1 class="text-lg font-bold" >Produtos</h1>
        <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
        <nuxt-link to="/produtos/produto-b">Produto B</nuxt-link>
        <p></p>
        <br>
        <br>

        <div v-for="product in products" :key="product.id" class="border-b border-grey-400 py-3">
         {{ product.title }}
        </div>
        
    </div>
</template>

<script>
    export default {
        
        name: '',

        data() {
            return {
            };
        },

         async asyncData({ $axios }) {
        

            const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
            return {
                products,
            }
        },


        methods: {},
        
    };

</script>

<style lang="scss" scoped>

</style>