<template>
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <v-app-bar
        app
        :dark="dark"
        :inverted-scroll="isHome"
      >
        <v-btn class="hidden-md-and-up" icon @click="drawer = !drawer">
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>

        <v-toolbar-title style="cursor: pointer;" @click="go(localePath('/'))">
          {{ name }}
        </v-toolbar-title>

        <v-spacer />

        <v-btn v-if="dark" icon @click="lightMode">
          <v-icon>
            mdi-lightbulb
          </v-icon>
        </v-btn>
        <v-btn v-if="!dark" icon @click="darkMode">
          <v-icon>
            mdi-moon-waning-crescent
          </v-icon>
        </v-btn>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="(item, i) in paths"
            :key="i"
            class="float-right pl-4"
            style="width: auto;"
            router
            exact
            text
            @click="go(localePath(item.to))"
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-img
        v-if="isHome"
        src="pictures/background.jpg"
        lazy-src="pictures/background-lazy.jpg"
        aspect-ratio="1"
        style="height: 100vh;"
        class="grey lighten-2"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div style="padding: 15px;">
            <div class="text-center" style="font-size: xxx-large;">
              CLEMENT Florent
            </div>
            <v-divider />
            <!--            <p class="text-center" style="font-size: xx-large;" v-text="text[getLanguage]['subTitle']" />-->
          </div>
        </v-row>
      </v-img>
      <v-sheet
        id="scrolling-techniques-4"
        style="min-height: 100vh; padding-top: 50px;"
        :dark="dark"
      >
        <nuxt />
      </v-sheet>
      <v-navigation-drawer v-model="drawer" fixed temporary :dark="dark">
        <v-list nav dense>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img :src="this.$envPlugin().baseUrl + 'pictures/Florent.jpg'" alt="">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>CLEMENT</v-list-item-title>
              <v-list-item-subtitle>Florent</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item-group active-class="text--accent-4">
            <v-list-item
              v-for="(item, i) in paths"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title :to="item.to">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

interface Path {
  icon: string,
  title: string,
  to: string,
}

@Component
export default class extends Vue {
  @Provide()
  private name: string = 'CV CLEMENT Florent';

  @Provide()
  public drawer : boolean = false;

  @Provide()
  private title : string = 'Développeur';

  @Provide()
  private dark : boolean = false;

  @Provide()
  private paths : Path[] = [
    {
      icon: 'mdi-school',
      title: this.$i18n.t('paths.parcours') as string,
      to: '/monParcours'
    },
    {
      icon: 'mdi-github',
      title: this.$i18n.t('paths.projets') as string,
      to: '/mesProjets'
    }
  ]

  public lightMode (): void {
    this.dark = false
  }

  public darkMode () : void {
    this.dark = true
  }

  public go (path: string): void {
    if (this.$router.currentRoute.path !== path) {
      this.$router.push(path)
    }
  }

  get isHome () : boolean {
    return `/${this.$i18n.locale}/` === this.$route.path ||
      `/${this.$i18n.locale}` === this.$route.path ||
      this.$route.path === '/'
  }
}
</script>
