function translate(temperament: string) {

  switch (temperament) {
    case 'Affectionate': { return 'Нежный' }
    case 'Energetic': { return 'Энергичный'; }
    case 'Alert': { return 'Бдительный' }
    case 'Curious': { return 'Любопытный' }
    case 'Playful': { return 'Игривый' }
    case 'Intelligent': { return 'Умный' }
    case 'Friendly': { return 'Дружелюбный'; }
    case 'Assertive': { return 'Напористый'; }
    case 'Loyal': { return 'Лояльный'; }
    case 'Gentle': { return 'Ласковый'; }
    case 'Confident': { return 'Уверенный'; }
    case 'Dominant': { return 'Главный'; }
    case 'Brave': { return 'Смелый'; }
    case 'Independent': { return 'Самостоятельный'; }
    case 'Loving': { return 'Любящий'; }
    case 'Protective': { return 'Защитник'; }
    case 'Trainable': { return 'Обучаемый'; }
    case 'Dutiful': { return 'Послушный'; }
    case 'Responsible': { return 'Отвественный'; }
    case 'Aloof': { return 'Равнодушный'; }
    case 'Clownish': { return 'Клоунский'; }
    case 'Dignified': { return 'Гордый'; }
    case 'Devoted': { return 'Преданный'; }
    case 'Stubborn': { return 'Упрямый'; }
    case 'Adventurous': { return 'Авантюрный'; }
    case 'Active': { return 'Активный'; }
    case 'Fun-loving': { return 'Весёлый'; }
    case 'Happy': { return 'Счастливый'; }
    case 'Wild': { return 'Дикий'; }
    case 'Hardworking': { return 'Трудолюбивый'; }
    case 'Outgoing': { return 'Общительный'; }
    case 'Courageous': { return 'Отважный'; }
    case 'Docile': { return 'Послужный'; }
    case 'Responsive': { return 'Отзывчивый'; }
    case 'Composed': { return 'Невозмутимый'; }
    case 'Receptive': { return 'Восприимчивый'; }
    case 'Faithful': { return 'Верный'; }

    default: { return temperament }
  }
}

export function translateTemparement(temperaments: string) {
  let result: string = '';
  const temperamentsArray = temperaments.replaceAll(',', '').split(' ');

  for (let i = 0; i < temperamentsArray.length; i++) {
    result += translate(temperamentsArray[i]) + ', ';
  }

  return result.slice(0, -2);
}


// async function translate(temperament: string) {
//   let translates = '';

//   fetch(`https://api.mymemory.translated.net/get?q=${temperament}&langpair=en|ru`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//     })

//   // const json = await response.json();
//   // translates = json.responseData.translatedText;
//   // return translates;
// }
