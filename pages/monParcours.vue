<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" v-text="title" />
      </v-col>
    </v-row>
    <v-row>
      <div class="timeline-container">
        <div
          v-for="(item,i) in formations"
          :key="i"
          :class="{ 'timeline-block-right': i%2 === 0, 'timeline-block-left': i%2 !== 0} "
          class="timeline-block timeline-block-right"
        >
          <div class="marker" />
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <div><b>{{ item.span }}</b></div>
            <p class="text-justify">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

interface Formation {
  title : string;
  span : string;
  description : string;
}

@Component
export default class monParcours extends Vue {
  get title () : string {
    return this.$i18n.t('paths.parcours') as string
  }

  get formations () : Formation[] {
    return [
      {
        title: 'Stage chez Vetools à Villeurbanne',
        span: '29 avril 2019 au 31 août 2019',
        description: 'Stage au sein de la startup Vetools dans l’1kubator. Développement d’un site ' +
              'avec le Framework PHP Laravel. Utilisation d’Heroku pour le déploiement et d’Algolia.'
      },
      {
        title: 'Master 1 Informatique',
        span: '2019 - 2020',
        description: "Actuellement en master informatique à la Doua et souhaite m'orienter" +
              ' en master 2 WEB en septembre 2021'
      },
      {
        title: 'Stage chez AXOPEN à Villeurbanne',
        span: '9 avril 2018 au 30 juin 2018',
        description: 'Amélioration d’une application web J2E et AngularJS en tant que développeur web. ' +
              'Réalisation de différents calculs de scénarios de consommation énergétique.'
      },
      {
        title: 'Diplôme licence Informatique',
        span: '2018 - 2019',
        description: 'Obtention de la licence informatique 3ème année ' +
              '   Informatique à la Doua.'
      },
      {
        title: 'Diplôme DUT Informatique',
        span: '2016 - 2018',
        description: 'Obtention du diplôme de DUT Informatique à Bourg-en-Bresse.'
      },
      {
        title: 'Baccalaureat S-SVT Mention AB',
        span: '2016',
        description: 'Obtention Baccalauréat option ISN (Informatique et Science du Numérique)' +
              ' à Villefranche-Sur-Saône'
      }
    ]
  }
}
</script>

<style lang="css">
.timeline-container {
  width: 80%;
  padding: 50px 0;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
}

.timeline-container::before { /* This is the line down the middle */
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1px;
  width: 2px;
  height: 100%;
  background: #ccd1d9;
  z-index: 1;
}

.timeline-block {
  width: -webkit-calc(50% + 8px);
  width: -moz-calc(50% + 8px);
  width: calc(50% + 8px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  justify-content: space-between;
  clear: both;
}

.timeline-block-right {
  float: right;
}

.timeline-block-left {
  float: left;
  direction: rtl;
}

.marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #f5f7fa;
  background: #4dd0e1;
  margin-top: 10px;
  z-index: 2;
}

.timeline-content {
  width: 95%;
  padding: 0 15px;
  color: #666;
}

.timeline-content h3 {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 500;
}

.timeline-content div {
  font-size: 20px;
  min-width: 100px;
  color: #a4a4a4;
}

.timeline-content p {
  font-size: 14px;
  line-height: 1.5em;
  word-spacing: 1px;
  color: #888;
}

@media screen and (max-width: 768px) {
  .timeline-container::before {
    left: 8px;
    width: 2px;
  }

  .timeline-block {
    width: 100%;
    margin-bottom: 30px;
  }

  .timeline-block-right {
    float: none;
  }

  .timeline-block-left {
    float: none;
    direction: ltr;
  }
}

@media (min-width: 768px) {
  .timeline-block-left .timeline-content div {
    direction: ltr !important;
    text-align: right;
  }
}
</style>
