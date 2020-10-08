import { PermissionsAndroid, Alert } from 'react-native'

export async function requestCameraPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Tauros Camera Permission',
                message:
                    'Tauros needs access to your camera ' +
                    'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera')
        } else {
            console.log('Camera permission denied')
            Alert('Camera permission denied')
        }
    } catch (err) {
        console.warn(err)
    }
}
