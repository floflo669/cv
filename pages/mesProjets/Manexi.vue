<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <h1 class="text-center">
          Manexi Conso
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <h2 class="text-left" v-text="titles.description" />
        <p class="text-justify">
          En fin de deuxième année de DUT, j'ai réalisé un stage de 3 mois dans la société Axopen.
          Directement en contact avec le client, j'avais pour mission d'apporter une mise à jour de
          son site en fonction de ses attentes définies dans le cahier des charges.
        </p>
        <p class="text-justify">
          L'actuel site était divisé en trois parties, l’une consistait à consulter les données de
          consommation
          d’un bâtiment, une autre à comparer le bâtiment de notre choix avec ceux du parc immobilier. Enfin,
          la dernière partie permettait de gérer le parc immobilier. Il était possible d’ajouter les nouvelles
          données de performances énergétiques de chaque immeuble par exemple.
        </p>
        <p class="text-justify">
          Ma mission sur ce projet était de me servir des données enregistrées pour effectuer un calcul
          énergique selon une formule usuelle des ingénieurs de la société Manexi.
          Enfin, via un système de rôle que j'avais implémenté, les clients pouvaient accéder au
          résultat de leur expertise énergétique Manexi.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <h2 class="text-left" v-text="titles.langue" />
        <v-row>
          <v-chip
            v-for="(item, i) in project.languages"
            :key="i"
            class="ma-2"
            :color="item.color"
            text-color="white"
          >
            <v-avatar v-if="item.icon" left>
              <v-icon v-text="item.icon" />
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </v-row>
      </v-col>
      <v-col
        cols="12"
      >
        <h2 class="text-left" v-text="titles.technologie" />
        <v-row>
          <v-chip
            v-for="(item, i) in project.technologies"
            :key="i"
            class="ma-2"
            :color="item.color"
            text-color="white"
          >
            <v-avatar v-if="item.icon" left>
              <v-icon v-text="item.icon" />
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="project.hasPictures()">
      <v-col
        cols="12"
      >
        <h2 class="text-left" v-text="titles.image" />
        <v-carousel class="ma-2 ma-md-0" height="auto">
          <v-carousel-item
            v-for="(picture, i) in project.pictures"
            :key="i"
          >
            <v-img
              :aspect-ratio="16/9"
              contain
              :src="picture.src"
              :lazy-src="picture.lazy"
              alt=""
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="auto"
      >
        <v-btn class="ma-2" tile to="/mesProjets" block v-text="buttons.back" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import ViewProject from '~/components/project/viewProject'

@Component
export default class mesProjetsManexi extends ViewProject {
  get id () : string {
    return 'Manexi'
  }
}

</script>

<style scoped lang="scss">

    @media (min-width: 576px) {
      #flex_carousel {
        height: 100%;
      }
    }
</style>
