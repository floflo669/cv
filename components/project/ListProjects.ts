import { Component, Vue } from 'vue-property-decorator'
import Project from '~/components/project/types/Project'

@Component
export default class ListProjects extends Vue {
  get projects () : Project[] {
    return this.$store.getters['ProjectModule/projects'] as Project[]
  }
}
