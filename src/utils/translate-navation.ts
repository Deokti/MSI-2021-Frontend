import { ROUTER_PATH } from "../config/ROUTER_PATH";

export function translateNavigation(navigation: string) {
  if (navigation === ROUTER_PATH.votes) return 'Голосование'.toUpperCase();
  if (navigation === ROUTER_PATH.breeds) return 'Породы'.toUpperCase();

  return navigation;
}
