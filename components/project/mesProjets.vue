<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" v-text="title" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center justify-sm-space-around justify-lg-start">
      <v-col
        v-for="(project,i) in projects"
        :key="i"
        cols="10"
        sm="8"
        md="6"
        lg="4"
        xl="3"
      >
        <card-project
          :project="project"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator'
import ListProjects from '../../components/project/ListProjects'
import CardProject from '~/components/project/cardProject.vue'
@Component({
  components: { CardProject }
})
export default class mesProjets extends ListProjects {
  get title () : string {
    return this.$i18n.t('paths.projets') as string
  }
}
</script>
