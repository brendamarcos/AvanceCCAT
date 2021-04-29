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

      <v-btn depressed :to="{name: 'QuienesSomos'}">¿Quiénes somos?</v-btn>

    </v-app-bar>

</template>

<script>
    export default {
        name: 'AppBar'
    }
</script>