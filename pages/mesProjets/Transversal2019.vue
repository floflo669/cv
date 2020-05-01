<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <h1 class="text-center">
          Projet Transversal
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <h2 class="text-left" v-text="titles.description" />
        <p class="text-justify">
          L'objectif du projet de transversal avait pour but de nous apprendre à maitriser la
          stratégie Scrum. Pour ce projet en groupe de 6 étudiants nous avons déterminé une feuille
          de route à chacun. J'ai été désigné chef d'équipe, avec pour mission, d'apporter un regard
          technique sur l'ensemble du projet et sur les technologies utilisées.
        </p>
        <p class="text-justify">
          Le projet consistait à la conception d'un outil de création de QCM que l'on pouvait
          partager via un QR code et dont les réponses étaient comptabilisées en temps réel.
        </p>
        <p class="text-justify">
          La réalisation de chaque "sprint" était conclue par une réunion et faisait l'objet d'un
          rapoort. Nous devions respecter les attentes spécifiées dans le cahier des charges
          et réaliser une démonstration devant nos deux tuteurs.
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
      <v-col
        cols="12"
        sm="auto"
        class="ml-auto"
      >
        <v-btn
          class="ma-2"
          tile
          color="orange"
          :href="project.repo"
          target="_blank"
          block
        >
          <v-icon left>
            mdi-gitlab
          </v-icon>
          <span v-text="buttons.seeProject" />
        </v-btn>
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
    return 'Transversal2019'
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
