<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <h3>NOSOTROS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident reprehenderit molestiae sit ut officiis perferendis, corrupti blanditiis animi. Beatae sunt hic, perferendis rem dignissimos vel. Ex accusantium odio asperiores.!</p>
            <p></p>
            <h3>MISIÓN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident reprehenderit molestiae sit ut officiis perferendis, corrupti blanditiis animi. Beatae sunt hic, perferendis rem dignissimos vel. Ex accusantium odio asperiores.!</p>
            <p></p>
            <h3>VISIÓN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident reprehenderit molestiae sit ut officiis perferendis, corrupti blanditiis animi. Beatae sunt hic, perferendis rem dignissimos vel. Ex accusantium odio asperiores.!</p>
            <p></p>
            <p></p>
          </v-col>
          <v-col cols="12" sm="4">
            <v-img
              v-bind:src="require('@/assets/CCAT-Logo.png')"
              max-width="320"
              max-height="320"
            />
          </v-col>
        </v-row>

        <br>
        <br>

        <v-row justify="center">

          <h3>LÍNEA DE TIEMPO</h3>
          <p></p>
          <p></p>
          <Timeline></Timeline>
          <p></p>
          <p></p>

        </v-row>

        <br>
        <br>

        <v-row> 
          
          <h3>JUNTA DIRECTIVA</h3>
          <p></p>
          <p></p>
        </v-row>

        <v-row justify="center">

          <v-col cols="12" sm="6">
            <v-card
              class="mx-auto"
              max-width="430"
            >
              <v-card-title class="overline mb-4">PRESIDENTE</v-card-title>
              <v-list-item>
                <v-list-item-avatar
                  tile
                  size="120"
                  color="grey"
                >
                  <v-img src="https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38130.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content >
                  <v-list-item-title class="headline mb-2">
                    Persona 1
                  </v-list-item-title>
                  <v-list-item-subtitle>Ingeniería Industrial</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card
              class="mx-auto"
              max-width="430"
            >
              <v-card-title class="overline mb-4">VICEPRESIDENTE</v-card-title>
              <v-list-item>
                <v-list-item-avatar
                  tile
                  size="120"
                  color="grey"
                >
                  <v-img src="https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content >
                  <v-list-item-title class="headline mb-1">
                    Persona 2
                  </v-list-item-title>
                  <v-list-item-subtitle>Ingeniería Industrial</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>

        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card
              class="mx-auto"
              max-width="1020"
            >
              <v-card-title class="overline mb-4">GERENTES</v-card-title>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://thumbs.dreamstime.com/b/icono-de-la-muestra-del-usuario-s%C3%ADmbolo-de-la-persona-avatar-humano-84527747.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 3
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b9qutatTGJWMI3iMASXm1y_Rnsek4OV1DvFG6zyIp0E7TkZtLpJ8HbZzab_srZrCv_k&usqp=CAU"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 4
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b9qutatTGJWMI3iMASXm1y_Rnsek4OV1DvFG6zyIp0E7TkZtLpJ8HbZzab_srZrCv_k&usqp=CAU"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 5
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://thumbs.dreamstime.com/b/icono-de-la-muestra-del-usuario-s%C3%ADmbolo-de-la-persona-avatar-humano-84527747.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 6
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card
              class="mx-auto"
              max-width="1020"
            >
              <v-card-title class="overline mb-4">DIRECTORES</v-card-title>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://thumbs.dreamstime.com/b/icono-de-la-muestra-del-usuario-s%C3%ADmbolo-de-la-persona-avatar-humano-84527747.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 7
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b9qutatTGJWMI3iMASXm1y_Rnsek4OV1DvFG6zyIp0E7TkZtLpJ8HbZzab_srZrCv_k&usqp=CAU"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 8
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b9qutatTGJWMI3iMASXm1y_Rnsek4OV1DvFG6zyIp0E7TkZtLpJ8HbZzab_srZrCv_k&usqp=CAU"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 9
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="120"
                      color="grey"
                    >
                      <v-img src="https://thumbs.dreamstime.com/b/icono-de-la-muestra-del-usuario-s%C3%ADmbolo-de-la-persona-avatar-humano-84527747.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content >
                      <v-list-item-title class="headline mb-1">
                        Persona 10
                      </v-list-item-title>
                      <v-list-item-subtitle>TI - Ingeniería de Sistemas</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <br>
      </v-container>
    </div>
</template>

<script>

  import Timeline from '@/components/Timeline.vue';
  export default {
      name: 'nosotros',
        components: {
        Timeline
      },
  }
</script>