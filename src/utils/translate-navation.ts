import { ROUTER_PATH } from "../config/ROUTER_PATH";

export function translateNavigation(navigation: string) {

  // Преобразуем попадающую строку в путь, добавляя /, например votes или breeds
  // преобразовывая в нечто похожее на путь из роутера, например /votes или /breeds
  const custonNavigation = `/${navigation}`;

  if (custonNavigation === ROUTER_PATH.votes) return 'Голосование'.toUpperCase();
  if (custonNavigation === ROUTER_PATH.breeds) return 'Породы'.toUpperCase();
  if (custonNavigation === ROUTER_PATH.gallery) return 'Галерея'.toUpperCase();

  return navigation;
}
