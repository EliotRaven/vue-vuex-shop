/**
 * Mocking client-server processing
 */
const products = [
  {
    id: 1,
    title: 'Samsung Galaxy S3 i9300 16GB',
    price: 500.01,
    inventory: 2,
    image: 'https://i.ebayimg.com/thumbs/images/g/6x0AAOSwUqBbMhUc/s-l225.webp',
    likes: 0,
    description: 'Samsung Galaxy S3 i9300 16GB - Factory Unlocked GSM Free 3G Phone - Blue. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 2,
    title: 'Sony Xperia Z3 D6603',
    price: 10.99,
    inventory: 10,
    image: 'https://i.ebayimg.com/thumbs/images/g/DDkAAOSwcL5XMDBj/s-l225.webp',
    likes: 0,
    description: 'New Unlocked Sony Xperia Z3 D6603 16GB 5.2" 20.7MP NFC Android Smartphone Black. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 3,
    title: '39B9 6inch Large Screen Android Mobile Phone',
    price: 19.99,
    inventory: 5,
    image: 'https://i.ebayimg.com/thumbs/images/m/mSVIVza_qJhhxd0y6MBfN0g/s-l225.webp',
    likes: 0,
    description: '39B9 6inch Large Screen Android Mobile Phone 4GB Quad Core 2SIM Smartphone Face.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 4,
    title: 'Apple iPhone 4S',
    price: 500.01,
    inventory: 2,
    image: 'https://i.ebayimg.com/thumbs/images/m/mt7fBdb_0DVmeoGcl0iJV7g/s-l225.webp',
    likes: 0,
    description: 'Apple iPhone 4S Mobile Phone 8GB 16GB 32GB Sim Free Factory Unlocked Smartphone.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 5,
    title: 'P20 Pro 6" 2 SIM',
    price: 10.99,
    inventory: 10,
    image: 'https://i.ebayimg.com/thumbs/images/m/m66hn4khV-DmKHfltY11JTA/s-l225.webp',
    likes: 0,
    description: 'P20 Pro 6" 2 SIM Quad Core 4GB Android 8.1Cheap Smartphone Cell Phone Unlocked. Lorem ipsum dolor sit amet,consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 6,
    title: 'New Nokia C Series C2-01 Black',
    price: 19.99,
    inventory: 5,
    image: 'https://i.ebayimg.com/thumbs/images/m/mRLywkebI3wAf6QXsBw84nQ/s-l225.webp',
    likes: 0,
    description: 'New Nokia C Series C2-01 Black Gold Unlocked English Hebrew Keyboard Bar Phone. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 7,
    title: 'Android 6.0 Mobile Phone Unlocked 5.7" ',
    price: 500.01,
    inventory: 2,
    image: 'https://i.ebayimg.com/thumbs/images/m/mnfdvR6v7g_y2gyXr7hloAA/s-l225.webp',
    likes: 0,
    description: 'Android 6.0 Mobile Phone Unlocked 5.7" Smartphone Dual Sim  WIFI GPS LTE 2G/3G.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 8,
    title: 'Huawei p smart',
    price: 10.99,
    inventory: 10,
    image: 'https://i.ebayimg.com/thumbs/images/g/ATAAAOSwxfFcyBmB/s-l225.webp',
    likes: 0,
    description: 'Huawei p smart 32gb+3gb ram 5.65/14,35cm gold new 2 years warranty. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 9,
    title: 'Samsung Galaxy Mega 5.8 GT-I9152',
    price: 19.99,
    inventory: 5,
    image: 'https://i.ebayimg.com/thumbs/images/m/mWOWKBzQPHYTnhrceU9Zrdw/s-l225.webp',
    likes: 0,
    description: 'Samsung Galaxy Mega 5.8 GT-I9152 8GB DUAL SIM Unlocked Smart Phone - wihte/black.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 10,
    title: 'DOOGEE Y8',
    price: 500.01,
    inventory: 2,
    image: 'https://i.ebayimg.com/thumbs/images/m/mlfKmkBy_5Jrn8J6Ssv4RGg/s-l225.webp',
    likes: 0,
    description: 'DOOGEE Y8 Smartphone Waterdrop Screen Android 9.0  Quad Core 3GB+16GB 4G Phone.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 11,
    title: '6.0" XGODY 3G',
    price: 10.99,
    inventory: 10,
    image: 'https://i.ebayimg.com/thumbs/images/m/mIlOwWViizgrVTXV5jMTBNg/s-l225.webp',
    likes: 0,
    description: '6.0" XGODY 3G Unlocked Android 5.1 Smartphone  8MP 1GB16GB 2SIM 4Core Cell Phone.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
  },
  {
    id: 12,
    title: 'Sony Ericsson Xperia Z3 D6603',
    price: 19.99,
    inventory: 5,
    image: 'https://i.ebayimg.com/thumbs/images/m/mkWu-QR9KtLNSdmTsb0BUdg/s-l225.webp',
    likes: 0,
    description: 'Sony Ericsson Xperia Z3 D6603 16GB 20.7MP 4G LTE GSM Unlocked Android Phone.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
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
