<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <h1 class="text-center">
          Projet d'orientation master 2
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <h2 class="text-left">
          1- Description du projet
        </h2>
        <p class="text-justify">
          L'objectif du projet d'orientation de master 2 ( POM ) était de réaliser une IA
          dans un monde défini avec des règles établies.
        </p>
        <p class="text-justify">
          Sur ce projet plusieurs entités autonomes appartenant à deux camps différents tentent
          de trouver une stratégie menant à la victoire.
          Pour se faire, ces entités communiquent entre elles et agissent pour atteindre leur but.
        </p>
        <p class="text-justify">
          A l'image d'un jeu de dames, il a été défini plusieurs pions et mouvements qui permettent
          de mettre en avant les différentes stratégies implémentées.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <h2 class="text-left">
          2- Langage(s) utilisé(s)
        </h2>
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
        <h2 class="text-left">
          3- Technolgies(s) utilisé(s)
        </h2>
        <v-row>
          <v-chip
            v-for="(item, i) in technology"
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
    <v-row v-if="pictures.length > 0">
      <v-col
        cols="12"
      >
        <h2 class="text-left">
          4- Image(s) du projet
        </h2>
        <v-carousel class="ma-2 ma-md-0" height="auto">
          <v-carousel-item
            v-for="(picture, i) in pictures"
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
        <v-btn class="ma-2" tile to="/mesProjets" block>
          Retour
        </v-btn>
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
          Voir projet
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'StatificationModule',
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ],
      languages: [
        {
          text: 'Java',
          color: 'indigo',
          icon: 'mdi-language-java'
        }
      ],
      technology: [
        {
          text: 'JavaFX',
          color: 'indigo'
        },
        {
          text: 'Système multi-agent',
          color: 'indigo'
        },
        {
          text: 'Multi thread',
          color: 'indigo'
        }
      ],
      pictures: [
        {
          src: 'pictures/checkers.jpg',
          lazy: 'pictures/checkers-lazy.jpg'
        }
      ]
    }
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
