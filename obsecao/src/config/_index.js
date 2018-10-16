/**
 * @providesModule AppConfig
 */

const {version, apiUrl, apiVersion} = Expo.Constants.manifest.extra

export default {
    version,
    apiUrl,
    apiVersion
}