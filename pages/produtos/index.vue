<template>
    <div>
        <div class="bg-gray-100">
            <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
                <nuxt-link to="/a-empresa">A empresa</nuxt-link>
                <nuxt-link to="/servicos">Serviços</nuxt-link>
                <nuxt-link to="/produtos">Produtos</nuxt-link>
            </div>
        </div>
        

        <div>
            <div class="container mx-auto">
                <h1 class="text-lg font-bold" >Produtos</h1>
                <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
                <nuxt-link to="/produtos/produto-b">Produto B</nuxt-link>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>