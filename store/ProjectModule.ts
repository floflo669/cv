import { VuexModule, Mutation, Module } from 'vuex-module-decorators'
import Project from '~/components/project/types/Project'
import ProjectInterface from '~/components/project/types/ProjectInterface'

@Module({ name: 'projectModule' })
export default class ProjectModule extends VuexModule {
  private _projects: ProjectInterface[] = [
    {
      id: 'ProjectOrientationMaster2',
      src: `${process.env.BASE_URL}pictures/checkers.jpg`,
      lazy: `${process.env.BASE_URL}pictures/checkers-lazy.jpg`,
      title: 'Projet d\'Orientation Master 2',
      description: 'Développement d\'une IA à l\'aide d\'un système multi-agent',
      to: '/mesProjets/ProjetOrientationMaster2/',
      enable: true,
      repo: 'https://gitlab.com/florent.clement/pom-2019',
      languages: [
        {
          text: 'Java',
          color: 'indigo',
          icon: 'mdi-language-java'
        }
      ],
      pictures: [
        {
          src: `${process.env.BASE_URL}pictures/checkers.jpg`,
          lazy: `${process.env.BASE_URL}pictures/checkers-lazy.jpg`
        }
      ],
      technologies: [
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
      ]
    },
    {
      id: 'Transversal2019',
      src: `${process.env.BASE_URL}pictures/transversal2019.jpg`,
      lazy: `${process.env.BASE_URL}pictures/transversal2019-lazy.jpg`,
      title: 'Projet de transversal',
      description: 'Projet scrum',
      to: '/mesProjets/Transversal2019/',
      repo: 'https://gitlab.com/florent.clement/m1if10-projet-transversal-2019',
      enable: true,
      languages: [
        {
          text: 'Javascript',
          color: 'indigo',
          icon: 'mdi-language-javascript'
        },
        {
          text: 'CSS3',
          color: 'indigo',
          icon: 'mdi-language-css3'
        },
        {
          text: 'Java',
          color: 'indigo',
          icon: 'mdi-language-java'
        },
        {
          text: 'SQL',
          color: 'indigo'
        }
      ],
      pictures: [
        {
          src: `${process.env.BASE_URL}pictures/transversal-home.jpg`,
          lazy: `${process.env.BASE_URL}pictures/transversal-home-lazy.jpg`
        },
        {
          src: `${process.env.BASE_URL}pictures/transversal-qcm.jpg`,
          lazy: `${process.env.BASE_URL}pictures/transversal-qcm-lazy.jpg`
        },
        {
          src: `${process.env.BASE_URL}pictures/transversal-account.jpg`,
          lazy: `${process.env.BASE_URL}pictures/transversal-account-lazy.jpg`
        }
      ],
      technologies: [
        {
          text: 'Spring',
          color: 'indigo'
        },
        {
          text: 'SonarQube',
          color: 'indigo'
        },
        {
          text: 'Bootstrap',
          color: 'indigo'
        },
        {
          text: 'JQuery',
          color: 'indigo'
        }
      ]
    },
    {
      id: 'Vetacademie',
      src: `${process.env.BASE_URL}pictures/vetacademie.jpg`,
      lazy: `${process.env.BASE_URL}pictures/vetacademie-lazy.jpg`,
      title: 'Site web Vetacademie',
      description: 'Annuaire de formations en ligne',
      to: '/mesProjets/Vetacademie/',
      enable: true,
      languages: [
        {
          text: 'Javascript',
          color: 'indigo',
          icon: 'mdi-language-javascript'
        },
        {
          text: 'CSS3',
          color: 'indigo',
          icon: 'mdi-language-css3'
        },
        {
          text: 'PHP',
          color: 'indigo',
          icon: 'mdi-language-php'
        },
        {
          text: 'SQL',
          color: 'indigo'
        }],
      technologies: [
        {
          text: 'Heroku',
          color: 'indigo'
        },
        {
          text: 'JQuery',
          color: 'indigo'
        },
        {
          text: 'Laravel',
          color: 'indigo'
        },
        {
          text: 'Bootstrap',
          color: 'indigo'
        },
        {
          text: 'Heroku',
          color: 'indigo'
        },
        {
          text: 'Algolia',
          color: 'indigo'
        }
      ]
    },
    {
      id: 'Manexi',
      src: `${process.env.BASE_URL}pictures/manexi.jpg`,
      lazy: `${process.env.BASE_URL}pictures/manexi-lazy.jpg`,
      title: 'Site web Manexi Conso',
      description: 'Stage de DUT',
      enable: true,
      to: '/mesProjets/Manexi/',
      languages: [
        {
          text: 'Java',
          color: 'indigo',
          icon: 'mdi-language-java'
        },
        {
          text: 'Javascript',
          color: 'indigo',
          icon: 'mdi-language-javascript'
        },
        {
          text: 'SQL',
          color: 'indigo'
        },
        {
          text: 'CSS3',
          color: 'indigo',
          icon: 'mdi-language-css3'
        }],
      technologies: [
        {
          text: 'J2E',
          color: 'indigo'
        },
        {
          text: 'JQuery',
          color: 'indigo'
        },
        {
          text: 'Bootstrap',
          color: 'indigo'
        },
        {
          text: 'AngularJS',
          color: 'indigo'
        }]
    },
    {
      id: 'Antlr4',
      src: `${process.env.BASE_URL}pictures/antlr4.jpg`,
      lazy: `${process.env.BASE_URL}pictures/antlr4-lazy.jpg`,
      title: 'Statification Module For Datalog Programs',
      description: 'Ellie Goulding',
      to: '/mesProjets/statification-module-for-datalog-programs',
      enable: false,
      repo: 'https://gitlab.com/florent.clement/datalog-programs',
      languages: [],
      technologies: []
    }
  ]

  get projects () {
    return this._projects.filter((p : ProjectInterface) => p.enable).map((p: ProjectInterface) => new Project(p))
  }

  @Mutation
  setUsers (projects: Project[]) {
    this._projects = projects
  }
}
