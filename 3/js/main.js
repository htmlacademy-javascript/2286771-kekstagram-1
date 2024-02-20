/*
let firstObject = {
  id: 25,
  url: photos/25.jpg,
  description: должен быть массив из 25 описаний или нет?,
  likes: '25',
  comments: [
  {id: 135,
    avatar: 'img/avatar-6.svg',
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Артём'
  },
]
}
*/

const DESCRIPTION = [
  'Волга',
  'Нева',
  'Лена',
  'Енисей',
  'Селенга',
  'Иртыш',
  'Амур',
  'Обь',
];

const NAMES = [
  'Артем',
  'Василий',
  'Петр',
  'Захар',
  'Александр',
  'Андрей',
  'Тимофей',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
getRandomIntInclusive();

function getRandomIdfromRangeGenerator(min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomIntInclusive(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomIntInclusive(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createIdGenerator() {
  {
    let lastGeneratedId = 0;
    return function () {
      lastGeneratedId += 1;
      return lastGeneratedId;
    };
  }
}

const generatePhotoId = getRandomIdfromRangeGenerator(1, 25);
const generateUrlId = getRandomIdfromRangeGenerator(1, 25);
const generateLikesId = getRandomIdfromRangeGenerator(15, 200);
const generateCommentsId = createIdGenerator();

const createComments = function () {
  const randomNamesIndex = getRandomIntInclusive(0, NAMES.length - 1);
  const randomMessagesIndex = getRandomIntInclusive(0, MESSAGES.length - 1);

  return {
    id: generateCommentsId(),
    name: NAMES[randomNamesIndex],
    messages: MESSAGES[randomMessagesIndex],
    avatar: 'img/avatar-' + getRandomIntInclusive(1,6) + '.svg',
  };
};


const createPhotoDescription = function () {
  const randomDescriptionIndex = getRandomIntInclusive(0, DESCRIPTION.length - 1);
  const newArray = Array.from({length: 6}, createComments);

  return {
    id: generatePhotoId(),
    url: 'photos/' + generateUrlId() + '.jpg',
    description: DESCRIPTION[randomDescriptionIndex],
    likes: generateLikesId(),
    comments: newArray,
  };
};


for (let i = 0; i <= 24; i++) {
  console.log(createPhotoDescription());
}


