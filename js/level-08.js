const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML("beforeend",createListItems(images));

function createListItems(items) {
  return items.map ( ({ url, alt }) => `<li class="item"><img src="${url}" alt="${alt}" style="width: 350px; height: 200px;"></li>`)
}

// ------------вариант 2--------------
// for (const image of images) {
//   listEl.insertAdjacentHTML("beforeend",`<li class="item"><img src="${image.url}" alt="${image.alt}" style="width: 350px; height: 200px;"></li>`);
// }


// -------------вариант 3-------------
// const elements = images.map( ({ url, alt })  => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');

//   itemEl.insertAdjacentHTML("afterbegin",`<img src="${url}" alt="${alt}" style="width: 350px; height: 200px;">`);
//   return itemEl;
// });

// listEl.append(...elements);