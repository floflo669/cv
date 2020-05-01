import Language from '~/components/project/types/Language'
import Pictures from '~/components/project/types/Pictures'
import Technology from '~/components/project/types/Technology'

export default interface ProjectInterface {
  id : string
  src : string;
  lazy : string;
  title : string;
  description : string;
  to : string;
  enable : boolean;
  repo ?: string;
  languages : Language[];
  pictures ?: Pictures[];
  technologies : Technology[]
}
