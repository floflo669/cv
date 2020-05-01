import { Vue } from 'vue-property-decorator'
import Titles from '~/components/project/types/Titles'
import Button from '~/components/project/types/Button'
import Project from '~/components/project/types/Project'

export default abstract class ViewProject extends Vue {
  get titles () : Titles {
    return {
      description: this.$i18n.t('titles.description') as string,
      langue: this.$i18n.t('titles.langue') as string,
      technologie: this.$i18n.t('titles.technologie') as string,
      image: this.$i18n.t('titles.image') as string,
    } as Titles
  }

  get buttons () : Button {
    return {
      back: 'Retour',
      seeProject: 'Voir projet'
    } as Button
  }

  get project () : Project {
    return this.$store.getters['ProjectModule/projects'].filter((p : Project) => p.id === this.id)[0]
  }

  protected abstract get id () : string
}
