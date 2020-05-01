<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <h1 class="text-center">
          Vetacademie
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <h2 class="text-left" v-text="titles.description" />
        <p class="text-justify">
          Pour conclure mon année de licence, j'ai réalisé un stage de 4 mois dans la startup Vetools
          à l'1kubator de Villeurbanne. Seul développeur au sein d'une équipe composée de quatre autres
          membres, j'étais en complète autonomie. Je me devais d'organiser mon planning en fonction
          des échéances qui m'étaient fixées.
        </p>
        <p class="text-justify">
          Le projet de Vetacademie consistait à recenser les formations continues pour les véterinaires.
          Ce métier exigeant la participation à des formations pour valider des crédits.
          Jusqu'alors, il n'existait pas d'annuaire comportant l'intégralité des formations
          proposées par les différents organismes.
        </p>
        <p class="text-justify">
          Dans un premier temps, j'ai contribué à la reflexion commune des maquettes du site.
          Après avoir réalisé la modélisation de la future application, j'ai commencé
          le développement des modules d'affichage des formations. Dans un second temps, j'ai mis
          en place un outil pour importer les formations de chaque organisme sur notre base de données.
          Enfin, via l'outil Algolia j'ai implémenté un système de filtre de recherche pour que
          l'utilisateur trouve la formation qu'il désire.
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
export default class mesProjetsOrientationMaster2 extends ViewProject {
  get id () : string {
    return 'Vetacademie'
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
