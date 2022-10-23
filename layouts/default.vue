<template>
    <div class="w-full min-h-screen bg-offWhite">
      <NavBar />  
      <Nuxt />
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
