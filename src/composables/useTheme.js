import { ref, provide, inject, onMounted } from 'vue'

const THEME_KEY = Symbol('theme')

export function provideTheme() {
  const isDarkMode = ref(false)

  const setTheme = (dark) => {
    isDarkMode.value = dark
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    setTheme(!isDarkMode.value)
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark)
    }
  })

  provide(THEME_KEY, {
    isDarkMode,
    toggleTheme,
    setTheme,
  })

  return {
    isDarkMode,
    toggleTheme,
    setTheme,
  }
}

export function useTheme() {
  const theme = inject(THEME_KEY)
  if (!theme) {
    throw new Error('Theme was not provided')
  }
  return theme
}
