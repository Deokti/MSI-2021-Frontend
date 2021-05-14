export function changeTheme(appRef: React.RefObject<HTMLDivElement>, darkTheme: boolean) {
  const { current: app } = appRef;

  return darkTheme === true
    ? app?.setAttribute('data-theme', 'dark')
    : app?.setAttribute('data-theme', 'light');
}