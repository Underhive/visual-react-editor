import { LightTheme, DarkTheme } from "../components/styles.store"

export const schemeRule = (shadow: ShadowRoot, style: CSSStyleSheet, light?: CSSStyleSheet, dark?: CSSStyleSheet) => {
  const lightScheme = light
      ? [style, LightTheme, light]
      : [style, LightTheme]

  const darkScheme = dark
      ? [style, DarkTheme, dark]
      : [style, DarkTheme]

  return (attr: string) => {
    if (attr === "light")
      shadow.adoptedStyleSheets = lightScheme
    else if (attr === "dark")
      shadow.adoptedStyleSheets = darkScheme
    else
      shadow.adoptedStyleSheets = [style]
  }
}
