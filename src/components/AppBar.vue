<template>

    <v-app-bar
      app
      class="indigo lighten-1 white--text text-center"
      dark
    >

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          v-bind:src="require('@/assets/CCAT-LogoBlanco.png')"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-toolbar-title>Centro Cultural Avanzada Tecnológica</v-toolbar-title>
      
      <v-spacer></v-spacer>
    
      <router-link :to="{name: 'home'}">
        <button class="indigo lighten-1 white--text text-center">Home | </button>
      </router-link>
      <router-link :to="{name: 'nosotros'}">
        <button class="indigo lighten-1 white--text text-center">| Nosotros |</button>
      </router-link>
      <router-link :to="{name: 'miembros'}">
        <button class="indigo lighten-1 white--text text-center">| Miembros </button>
      </router-link>

    </v-app-bar>

</template>

<script>
    export default {
        name: 'AppBar',
        
    }
</script>