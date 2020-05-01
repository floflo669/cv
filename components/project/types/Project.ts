import Language from '~/components/project/types/Language'
import Pictures from '~/components/project/types/Pictures'
import ProjectInterface from '~/components/project/types/ProjectInterface'
import Technology from '~/components/project/types/Technology'

export default class Project implements ProjectInterface {
  private _id !: string
  private _src !: string;
  private _lazy !: string;
  private _title !: string;
  private _description !: string;
  private _to !: string;
  private _enable !: boolean;
  private _repo !: string;
  private _languages !: Language[];
  private _pictures !: Pictures[];
  private _technologies !: Technology[];

  constructor (data : ProjectInterface) { Object.assign(this, data) }

  set id (id : string) { this._id = id }
  get id (): string { return this._id }

  set src (src : string) { this._src = src }
  get src (): string { return this._src }

  set lazy (lazy : string) { this._lazy = lazy }
  get lazy (): string { return this._lazy }

  set title (title : string) { this._title = title }
  get title (): string { return this._title }

  set description (description : string) { this._description = description }
  get description (): string { return this._description }

  set to (to : string) { this._to = to }
  get to (): string { return this._to }

  set enable (enable : boolean) { this._enable = enable }
  get enable (): boolean { return this._enable }

  set repo (repo : string) { this._repo = repo }
  get repo (): string { return this._repo }

  set languages (languages : Language[]) { this._languages = languages }
  get languages (): Language[] { return this._languages || [] }

  set pictures (pictures : Pictures[]) { this._pictures = pictures }
  get pictures (): Pictures[] { return this._pictures || [] }

  set technologies (technologies : Technology[]) { this._technologies = technologies }
  get technologies (): Technology[] { return this._technologies || [] }

  public hasPictures () : boolean {
    return this.pictures.length > 0
  }
}
