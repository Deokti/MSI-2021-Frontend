import { ROUTER_PATH } from "../config/ROUTER_PATH";

export function translateNavigation(navigation: string) {

  // Преобразуем попадающую строку в путь, добавляя /, например votes или breeds
  // преобразовывая в нечто похожее на путь из роутера, например /votes или /breeds
  const custonNavigation = `/${navigation}`;

  switch (custonNavigation) {
    case ROUTER_PATH.votes: return 'Голосование'.toUpperCase();
    case ROUTER_PATH.breeds: return 'Породы'.toUpperCase();
    case ROUTER_PATH.gallery: return 'Галерея'.toUpperCase();
    case ROUTER_PATH.likes: return 'Понравилось'.toUpperCase();
    case ROUTER_PATH.dislikes: return 'Не понравилось'.toUpperCase();
  }
  return navigation;
}
