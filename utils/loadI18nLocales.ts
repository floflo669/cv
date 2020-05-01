/**
 * Util dédié au chargement dynamique des locales du module nuxt-i18n.
 * Il est utilisé dans le nuxt.config.js pour définir la clé i18n.locales.
 *
 * Pour prendre en compte une nouvelle locale, ajoutez le fichier .json
 * généré par le script python dans le dossier lang/ et relancez l'application.
 * La nouvelle locale devrait être sélectionnable dans le menu de changemen
 * de langue sur l'application après un refresh.
 * Dans le cas contraire, vérifiez le nom du fichier, ex : fr-FR.json
 *
 * Pour exclure une locale du chargement automatique, ajoutez le caractère "_"
 * au début du nom du fichier, rebuildez et redéployez l'application.
 * Pour l'inclure à nouveau, retirez le "_" du nom du fichier, rebuildez et
 * redéployez l'application.
 */
import fs from 'fs'
import path from 'path'

interface Locale {
  iso : string,
  code : string,
  file : string
}

// Chemin relatif au dossier où se trouve ce script
const localesPath = '../lang'
// Tableau de configuration des locales
const i18nLocales : Locale[] = []
// Chemin absolu vers le dossier des locales
const directoryPath = path.join(__dirname, localesPath)
// Liste des fichiers présents dans le dossier des locales
const files = fs.readdirSync(directoryPath)

files
  .filter((file : string) => file.match(/^[a-z]{2}-[A-Z]{2}\.json$/) !== null)
  .forEach((file: string) => {
    const iso = file.substr(0, 5)
    const code = file.substr(0, 2)
    i18nLocales.push({ iso, code, file })
  })

export default i18nLocales
