export const API_URL = {
  // Получение изображения при запрашивашии исходя из image_id
  IMAGES_SEARCH_ID: 'https://api.thedogapi.com/v1/images',

  // Получение изображений при голосовании и для изображений в гелереи
  IMAGES_SEARCH_URL: 'https://api.thedogapi.com/v1/images/search',

  // Отправляется POST запрос при голосовании, и при этом отсюда вытаскивается история голосования
  VOTES_URL_POST: 'https://api.thedogapi.com/v1/votes',

  // Получение изображений с породами
  BREEDS_URL: 'https://api.TheDogAPI.com/v1/breeds',

  // Для добавления в изображений-фаворитов и их получение
  FAVORITES: 'https://api.thedogapi.com/v1/favourites'
}
