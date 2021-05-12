export function setThemeLocalStorage(darkTheme: boolean): void {
  localStorage.setItem('dark-theme', JSON.stringify(darkTheme));
}

export function getThemeLocalStorage(): boolean {
  return JSON.parse(localStorage.getItem('dark-theme') || 'false');
}
