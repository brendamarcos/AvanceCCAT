<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>

import AppBar from './components/AppBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
