<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" v-text="title" />
      </v-col>
    </v-row>
    <v-row>
      <v-slide-group
        mobile-breakpoint="1"
        :prev-icon="'mdi-minus'"
        :next-icon="'mdi-plus'"
      >
        <v-list-item
          v-for="(project,e) in projects"
          :key="e"
          class="mx-sm-2"
        >
          <v-list-item-content
            style="height: 100%; max-width: 400px;"
            class="pa-2"
          >
            <card-project
              :project="project"
            />
          </v-list-item-content>
        </v-list-item>
      </v-slide-group>
    </v-row>
  </div>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator'
import ListProjects from '~/components/project/ListProjects'
import CardProject from '~/components/project/cardProject.vue'
@Component({
  components: { CardProject }
})
export default class ListProjectsSlider extends ListProjects {
  get title () : string {
    return this.$i18n.t('paths.projets') as string
  }
}
</script>
