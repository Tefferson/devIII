import {StyleSheet, Dimensions} from 'react-native'
import loginBackground from '../../assets/images/bg-main.png'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#543924',
  secondary: '#757575',
  tertiary: '#FF9800',
  accent: '#FF5722',
  light: '#D7CCC8',
  dark: '#2D1D11',
  divider: '#BDBDBD',
  black: '#212121',
  white: '#fff'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Roboto'
}

export const images = {
    loginBackgound: loginBackground
}

const baseStyles = {
    primaryColor: {
        color: colors.primary
    },
    secondaryColor: {
        color: colors.secondary
    },
    whiteColor: {
        color: colors.white
    },
    blackColor: {
        color: colors.black
    },
    accentColor: {
        color: colors.accent
    },
    container: {
      paddingHorizontal: padding.sm,
      paddingVertical: padding.lg,
      width: dimensions.fullWidth
    },
    header: {
      backgroundColor: colors.primary,
      fontSize: fonts.lg,
      fontFamily: fonts.primary,
      fontWeight: 'bold'
    },
    section: {
      paddingVertical: padding.lg,
      paddingHorizontal: padding.xl
    },
    text: {
        color: colors.black,
        fontSize: fonts.md,
        fontFamily: fonts.primary
    },
    whiteText: {
        color: colors.black,
        fontSize: fonts.md,
        fontFamily: fonts.primary
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
     }

  }
  
  export default function ThemeBase(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides})
  }