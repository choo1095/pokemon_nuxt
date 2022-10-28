<template>
    <div class="min-h-screen bg-offWhite">
      <header class="z-50 w-full fixed top-0">
        <NavBar/>  
      </header>
      <body>
        <Nuxt class="pt-16" />  
      </body>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
}
</script>

<style>
/* body {
  font-family: 'Poppins', sans-serif;
} */
</style>
