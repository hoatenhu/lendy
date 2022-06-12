import { Alert, Platform } from 'react-native'
import Geolocation, {
  GeoPosition,
  GeoError
} from 'react-native-geolocation-service'
import {
  PERMISSIONS,
  RESULTS,
  check,
  request,
  openSettings
} from 'react-native-permissions'


let watchId: any = null

type Position = {
  lat: number
  lng: number
}

type SettingType = 'location'

const AlertOpenSettingContent = {
  location: {
    title: 'titleLocationPermission',
    message: 'messageLocationPermission'
  }
}

export function openSettingsApp() {
  openSettings().catch(() => console.log('cannot open settings'))
}


export function openSettingsAppWithAlert(settingKey?: SettingType) {
  if (settingKey) {
    const { title, message } = AlertOpenSettingContent[settingKey]
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        {
          text: 'Settings',
          onPress: openSettingsApp
        }
      ],
      { cancelable: false }
    )
  } else {
    openSettingsApp()
  }
}

const permitPermission = (
  keyPermission: any,
  callback: any,
  settingKey?: any
) => {
  
  if (keyPermission) {
    check(keyPermission)
      .then((result) => {
        console.log(result)
        switch (result) {
          case RESULTS.BLOCKED:
            openSettingsAppWithAlert(settingKey)
            break
          case RESULTS.DENIED:
            request(keyPermission).then((response) => {
              if (response === RESULTS.GRANTED) {
                callback()
              }
            })
            break
          case RESULTS.GRANTED:
            callback()
            break
          case RESULTS.LIMITED:
            callback()
            break
          default:
            break
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getCurrentLocation = (callback: (position: Position) => void) => {
  
  checkLocationPermission(() => {
    Geolocation.getCurrentPosition(
      (positionResult: GeoPosition) => {
        const { longitude, latitude } = positionResult.coords
        callback({ lat: latitude, lng: longitude })
      },
      (error: GeoError) => {
        console.log(error)
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000
      }
    )
  })
}

export function checkLocationPermission(callback: () => void) {
  
  let keyPermission: any = null
  if (Platform.OS === 'ios') {
    keyPermission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  } else {
    keyPermission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  }
  permitPermission(keyPermission, callback, 'location')
}