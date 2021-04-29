<template>
    <v-container>
        <v-row>
            <p></p>
        </v-row>
        <v-row>
            <v-carousel hide-delimiters>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </v-row>

        <v-row justify="center">
            <v-col
                cols="12"
                sm="2"
            >
            <p></p>
            <h1>CONVENIOS</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6">
                <v-card
                    class="mx-auto"
                    elevation="8"
                    max-width="800"
                >
                    <v-card-title>AUSPICIADORES</v-card-title>
                    <v-slide-group
                    v-model="model"
                    class="pa-4"
                    show-arrows
                    >
                    <v-slide-item
                        v-for="n in 15"
                        :key="n"
                    >
                        <v-card
                        color="grey lighten-1"
                        class="ma-4"
                        height="200"
                        width="100"
                        >
                        </v-card>
                    </v-slide-item>
                    </v-slide-group>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card
                    class="mx-auto"
                    elevation="8"
                    max-width="800"
                >
                    <v-card-title>ALIADOS</v-card-title>
                    <v-slide-group
                    v-model="model"
                    class="pa-4"
                    show-arrows
                    >
                    <v-slide-item
                        v-for="n in 15"
                        :key="n"
                    >
                        <v-card
                        color="grey lighten-1"
                        class="ma-4"
                        height="200"
                        width="100"
                        >
                        </v-card>
                    </v-slide-item>
                    </v-slide-group>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: 'QuienesSomos',
        data () {
            return {
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                    ],
            }
        },
  }
</script>