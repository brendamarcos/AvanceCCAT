<template>
    <div>
      <v-container>
        <h2>GERENCIAS</h2>
        <p></p>

        <v-row>
            <v-col cols="12">
                <v-card
                    class="mx-auto"
                    elevation="8"
                >
                    <v-card-title>TI</v-card-title>
                    <v-slide-group
                      class="pa-4"
                      show-arrows
                    >
                    <v-slide-item
                        v-for="(item,i) in items2"
                        :key="i"
                    >
                        <v-card
                        class="ma-4"
                        height="210"
                        width="120"
                        >
                            <v-img :src="item.src"></v-img>
                            <v-card-text align="center">
                                <p>{{item.nombre}}</p>
                                <p>{{item.correo}}</p>
                            </v-card-text>
                        </v-card>
                    </v-slide-item>
                    </v-slide-group>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-card
                    class="mx-auto"
                    elevation="8"
                >
                    <v-card-title>GTH</v-card-title>
                    <v-slide-group
                      class="pa-4"
                      show-arrows
                    >
                    <v-slide-item
                        v-for="(item,i) in items2"
                        :key="i"
                    >
                        <v-card
                        class="ma-4"
                        height="210"
                        width="120"
                        >
                            <v-img :src="item.src"></v-img>
                            <v-card-text align="center">
                                <p>{{item.nombre}}</p>
                                <p>{{item.correo}}</p>
                            </v-card-text>
                        </v-card>
                    </v-slide-item>
                    </v-slide-group>
                </v-card>
            </v-col>
        </v-row>

        <br>
        <br>
        <br>

        <h2>DIRECCIONES</h2>
        <p></p>

        <v-row>
            <v-col cols="12">
                <v-card
                    class="mx-auto"
                    elevation="8"
                >
                    <v-card-title>IDI</v-card-title>
                    <v-slide-group
                      class="pa-4"
                      show-arrows
                    >
                    <v-slide-item
                        v-for="(item,i) in items2"
                        :key="i"
                    >
                        <v-card
                        class="ma-4"
                        height="210"
                        width="120"
                        >
                            <v-img :src="item.src"></v-img>
                            <v-card-text align="center">
                                <p>{{item.nombre}}</p>
                                <p>{{item.correo}}</p>
                            </v-card-text>
                        </v-card>
                    </v-slide-item>
                    </v-slide-group>
                </v-card>
            </v-col>
        </v-row>

      </v-container>
    </div>
</template>

<script>
    export default {
        name: 'miembros',
        data () {
        return {
            items2: [
                {
                    src: 'https://www.creartuavatar.com/images/f10.svg',
                    nombre: 'Flor',
                    correo: 'flor@uni.pe',
                },
                {
                    src: 'https://www.creartuavatar.com/images/m7.svg',
                    nombre: 'Pepito',
                    correo: 'pepe@uni.pe',
                },
                {
                    src: 'https://www.creartuavatar.com/images/f10.svg',
                    nombre: 'Flor',
                    correo: 'flor@uni.pe',
                },
                {
                    src: 'https://www.creartuavatar.com/images/m7.svg',
                    nombre: 'Pepito',
                    correo: 'pepe@uni.pe',
                },
                {
                    src: 'https://www.creartuavatar.com/images/f10.svg',
                    nombre: 'Flor',
                    correo: 'flor@uni.pe',
                },
                {
                    src: 'https://www.creartuavatar.com/images/m7.svg',
                    nombre: 'Pepito',
                    correo: 'pepe@uni.pe',
                },
                {
                    src: 'https://www.creartuavatar.com/images/f10.svg',
                    nombre: 'Flor',
                    correo: 'flor@uni.pe',
                },
                {
                    src: 'https://www.creartuavatar.com/images/m7.svg',
                    nombre: 'Pepito',
                    correo: 'pepe@uni.pe',
                },

            ],
        }
    },
  }
</script>