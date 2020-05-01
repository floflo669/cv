<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            sm="8"
            md="6"
            lg="4"
          >
            <v-row>
              <v-col cols="12">
                <v-avatar>
                  <v-icon>mdi-email</v-icon>
                </v-avatar>
                <span style="font-size: larger;" v-text="contact.mail" />
              </v-col>
              <v-col cols="12">
                <v-avatar>
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                <span style="font-size: larger;" v-text="contact.old" />
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            lg="2"
            offset-md="1"
            class="d-flex justify-center"
          >
            <v-img
              contain
              height="80%"
              :src="this.$envPlugin().baseUrl + 'pictures/Florent.jpg'"
            />
          </v-col>
          <v-col
            cols="12"
            sm="12"
            offset-md="1"
            md="12"
            lg="4"
          >
            <div>
              <v-card
                class="mx-auto"
                color="#26c6da"
                dark
                max-width="400"
              >
                <v-card-text class="headline font-weight-bold">
                  {{ contact.card }}
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        :src="this.$envPlugin().baseUrl + 'pictures/Florent.jpg'"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>CLEMENT Florent</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-md-space-around justify-lg-space-around justify-xl-space-around">
          <v-col cols="12" md="4" lg="3">
            <v-btn
              class="ma-2 black--text"
              tile
              color="orange"
              target="_blank"
              block
              :href="buttonProjects.gitlab.link"
            >
              <v-icon left>
                mdi-gitlab
              </v-icon>
              {{ buttonProjects.gitlab.text }}
              <span />
            </v-btn>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-btn
              class="ma-2 black--text"
              tile
              color="white"
              target="_blank"
              block
              :href="buttonProjects.github.link"
            >
              <v-icon left>
                mdi-github
              </v-icon>
              {{ buttonProjects.github.text }}
              <span />
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <mon-parcours />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
          >
            <h1 class="text-center">
              Compétences
            </h1>
          </v-col>
          <v-col
            cols="12"
            md="4"
            offset-md="1"
            offset-sm="3"
            sm="6"
          >
            <bar-chart :chart-data="dataBarChart" :chart-options="optionsBarChart" />
          </v-col>
          <v-col
            cols="12"
            md="6"
            offset-md="1"
            sm="12"
          >
            <v-row class="justify-md-space-between">
              <v-col
                v-for="(item,i) in ratings"
                :key="i"
                class="d-flex align-center"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row class="justify-center">
                  <v-col cols="auto">
                    <div class="mt-1 font-weight-bold" v-text="item.text" />
                  </v-col>
                  <v-col cols="auto">
                    <div class="text-center">
                      <v-rating v-model="item.rating" readonly dense half-increments />
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-sheet
              class="mx-4 hidden-sm-and-down"
            >
              <list-projects-slider />
            </v-sheet>
            <mes-projets class="hidden-md-and-up" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ChartData, ChartOptions } from 'chart.js'
import CardProject from '~/components/project/cardProject.vue'
import RadarChart from '~/components/chart/radarChart'
import ListProjectsSlider from '~/components/project/listProjectsSlider.vue'
import MonParcours from '~/pages/monParcours.vue'
import MesProjets from '~/components/project/mesProjets.vue'

interface Contact {
  mail: string,
  old: string,
  card: string,
}

interface ChoiceButtonProject {
  text: string,
  link: string
}

interface ButtonProject {
  gitlab: ChoiceButtonProject
  github: ChoiceButtonProject
}

interface RatingLanguage {
  text: string,
  rating: number
}

@Component({
  components: { MesProjets, MonParcours, ListProjectsSlider, BarChart: RadarChart, CardProject }
})
export default class extends Vue {
  @Prop(Boolean) readonly dark!: boolean;

  private calculateAge (birthday: Date) : number {
    const ageDate: Date = new Date(Date.now() - birthday.getTime())
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  get buttonProjects () : ButtonProject {
    return {
      gitlab: {
        text: this.$i18n.t('buttonProjects.gitlab'),
        link: 'https://gitlab.com/users/florent.clement/projects'
      },
      github: {
        text: this.$i18n.t('buttonProjects.github'),
        link: 'https://github.com/floflo669'
      }
    } as ButtonProject
  };

  get contact (): Contact {
    return {
      mail: this.$i18n.t('contact.mail'),
      old: this.$i18n.t('contact.old', { age: this.calculateAge(new Date(1998, 4, 25)) }),
      card: this.$i18n.t('contact.card')
    } as Contact
  }

  get ratings () : RatingLanguage[] {
    return [
      {
        text: 'J2E',
        rating: 4
      },
      {
        text: 'Spring',
        rating: 4.5
      },
      {
        text: 'Laravel',
        rating: 4
      },
      {
        text: 'AngularJS',
        rating: 3
      },
      {
        text: 'Jquery',
        rating: 4
      },
      {
        text: 'VueJS',
        rating: 4.5
      }
    ] as RatingLanguage[]
  }

  get dataBarChart () : ChartData {
    return {
      labels: ['c++', 'python', 'java', 'SQL', 'Javascript', 'PHP'],
      datasets: [{
        data: [90, 65, 85, 70, 95, 80],
        backgroundColor: 'lightblue'
      }
      ]
    } as ChartData
  }

  get optionsBarChart () : ChartOptions {
    return {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: ''
      },
      scale: {
        pointLabels: {
          fontSize: 16
        },
        angleLines: {
          display: false
        },
        ticks: {
          display: false,
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    } as ChartOptions
  }
}
</script>
