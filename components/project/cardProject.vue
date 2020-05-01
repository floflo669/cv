<template>
  <v-hover
    v-slot:default="{ hover }"
  >
    <v-card
      class="mx-auto headline"
      height="100%"
      :elevation="hover ? 16 : 2"
      :to="localePath(project.to)"
    >
      <v-img
        height="250"
        :src="project.src"
        :lazy-src="project.lazy"
        contain
      />

      <v-card-title>{{ project.title }}</v-card-title>

      <v-card-text>{{ project.description }}</v-card-text>

      <v-divider class="mx-4" />

      <v-card-text>
        <v-chip-group
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip
            v-for="(item, j) in project.languages"
            :key="j"
            class="ma-2"
            :color="item.color"
            text-color="white"
          >
            <v-avatar v-if="item.icon" left>
              <v-icon>{{ item.icon }}</v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import Project from '~/components/project/types/Project'

@Component
export default class CardProject extends Vue {
  @Prop(Object) readonly project !: Project;
}
</script>
