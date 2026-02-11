import { computed, readonly, ref } from 'vue';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

const theme = ref<Theme>('dark');
const isInitialised = ref(false);

const canUseDOM = () => typeof window !== 'undefined' && typeof document !== 'undefined';

const applyThemeToDom = (value: Theme) => {
  if (!canUseDOM()) return;
  document.documentElement.setAttribute('data-theme', value);
};

const getPreferredTheme = (): Theme => {
  if (!canUseDOM()) return 'dark';

  const saved = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved === 'dark' || saved === 'light') return saved;

  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
};

const persistTheme = (value: Theme) => {
  if (!canUseDOM()) return;
  window.localStorage.setItem(STORAGE_KEY, value);
};

const setTheme = (value: Theme) => {
  theme.value = value;
  applyThemeToDom(value);
  persistTheme(value);
};

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'light' : 'dark');
};

const initTheme = () => {
  if (isInitialised.value) return;
  isInitialised.value = true;

  const initial = getPreferredTheme();
  setTheme(initial);
};

export function useTheme() {
  initTheme();

  const isDark = computed(() => theme.value === 'dark');
  const isLight = computed(() => theme.value === 'light');

  return {
    theme: readonly(theme),
    isDark,
    isLight,
    setTheme,
    toggleTheme,
  };
}
