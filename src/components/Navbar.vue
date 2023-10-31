<template>
  <header>
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <div>
      <router-link :to="{ name: 'beach' }"> Beach </router-link>
      <router-link :to="{ name: 'restaurant' }"> Restaurant </router-link>
      <router-link :to="{ name: 'wildlife' }"> Wild-Life </router-link>
    </div>
  </header>
</template>