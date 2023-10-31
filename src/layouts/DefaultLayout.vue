<template>
    <div>
        <Navbar />
        <Home />
        <!-- <main>
            <router-view />
        </main> -->
        <Middle />
        <Destination />
        <!-- <Portifolio />
        <Reviews />
        <Questions />
        <Subscribe />
        <Footer /> -->
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
import Middle from '../components/Middle.vue'
import Destination from '../components/Destination.vue'
import Portifolio from '../components/Portifolio.vue'
import Reviews from '../components/Reviews.vue'
import Questions from '../components/Questions.vue'
import Subscribe from '../components/Subscribe.vue'
import Footer from '../components/Footer.vue'

</script>
