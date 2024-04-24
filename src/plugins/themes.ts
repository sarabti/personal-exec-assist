import type { ThemeDefinition } from 'vuetify'

export const staticPrimaryColor = '#8C57FF'
export const staticPrimaryDarkenColor = '#7E4EE6'

export const themes: Record<string, ThemeDefinition> = {
  light: {
    dark: false,
    colors: {
      primary: staticPrimaryColor,
      card: 'd8bfd8',
    }
  },
  dark: {
    dark: true,
    colors: {
      primary: staticPrimaryDarkenColor,
      card: '572649',
    },
  },
}

export default themes
