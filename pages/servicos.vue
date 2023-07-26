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
                <h1 class="text-lg font-bold" >Serviços</h1>

                    <nuxt-link to="/servicos/desenvolvimento-de-sites">Desenvolvimento de Sites</nuxt-link>

                    <nuxt-link to="/servicos/rh">Recursos Humanos</nuxt-link>
                    
                    <br><br>

                    <nuxt-child />
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