/**
 * Mocking client-server processing
 */
const products = [
  {
    id: 1,
    title: 'iPad 4 Mini',
    price: 500.01,
    inventory: 2,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `iPad 4 Mini. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 2,
    title: 'H&M T-Shirt White',
    price: 10.99,
    inventory: 10,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `H&M T-Shirt White. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 3,
    title: 'Charli XCX - Sucker CD',
    price: 19.99,
    inventory: 5,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `Charli XCX - Sucker CD. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 4,
    title: 'iPad 4 Mini',
    price: 500.01,
    inventory: 2,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `iPad 4 Mini. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 5,
    title: 'H&M T-Shirt White',
    price: 10.99,
    inventory: 10,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `H&M T-Shirt White. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 6,
    title: 'Charli XCX - Sucker CD',
    price: 19.99,
    inventory: 5,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `Charli XCX - Sucker CD. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 7,
    title: 'iPad 4 Mini',
    price: 500.01,
    inventory: 2,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `iPad 4 Mini. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 8,
    title: 'H&M T-Shirt White',
    price: 10.99,
    inventory: 10,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `H&M T-Shirt White. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 9,
    title: 'Charli XCX - Sucker CD',
    price: 19.99,
    inventory: 5,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `Charli XCX - Sucker CD. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 10,
    title: 'iPad 4 Mini',
    price: 500.01,
    inventory: 2,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `iPad 4 Mini. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 11,
    title: 'H&M T-Shirt White',
    price: 10.99,
    inventory: 10,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `H&M T-Shirt White. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
  {
    id: 12,
    title: 'Charli XCX - Sucker CD',
    price: 19.99,
    inventory: 5,
    image: 'https://picsum.photos/200/300/?random',
    likes: 0,
    description: `Charli XCX - Sucker CD. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, 
    voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.`,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 100);
  },

  buyProducts(items, cb, errorCb) {
    setTimeout(() => ((Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
      ? cb()
      : errorCb()), 100);
  },
};
