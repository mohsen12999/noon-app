
// // interfaces
// export interface IProductGroup {
//   id: number;
//   title: string;
//   persianTitle: string;
//   persianSubtitle: string;
//   img: string;
//   enable: boolean;
//   // "products": IProductSpecific[];
// }

import { ICustomer, IGroup, IMarket, IOpenTime, IProducts } from "./interfaces";

// export interface IProductSpecific {
//   id: number;
//   title: string;
//   price: number;
//   inventory: number;
//   img: string;
//   enable: boolean;
//   productGroupId: number;
// }

// export interface IDeliverTime {
//   id: number;
//   title: string;
//   start: number;
//   end: number;
// }

// // values - must read from server in production
// export const PRODUCT_GROUPS: IProductGroup[] = [
//   {
//     id: 1,
//     title: "Breads",
//     persianTitle: "نان تازه",
//     persianSubtitle: "خرید نان تازه و گرم",
//     img: "images/group/bread.png",
//     enable: true
//   },
//   {
//     id: 2,
//     title: "Market",
//     persianTitle: "سوپر مارکت",
//     persianSubtitle: "انتخاب و خرید مواد غذایی",
//     img: "images/group/shopping-cart.png",
//     enable: false
//   },
//   {
//     id: 3,
//     title: "FastFoods",
//     persianTitle: "فست فود",
//     persianSubtitle: "سفارش غذا از فست فود و کافه",
//     img: "images/group/fast-food.png",
//     enable: false
//   },
//   {
//     id: 4,
//     title: "Restaurants",
//     persianTitle: "رستوران",
//     persianSubtitle: "سفارش غذاهای ایرانی و محلی",
//     img: "images/group/resturant.png",
//     enable: false
//   },
//   {
//     id: 5,
//     title: "Souvenir",
//     persianTitle: "سوغات",
//     persianSubtitle: "صنایع دستی محلی و بومی",
//     img: "images/group/souvenir.png",
//     enable: false
//   },
//   {
//     id: 6,
//     title: "Discount",
//     persianTitle: "تخفیفان رامسر",
//     persianSubtitle: "تخفیف های باورنکردنی از همه چیز",
//     img: "images/group/discount.png",
//     enable: false
//   }
// ];

// export const PRODUCT_LIST: IProductSpecific[] = [
//   // - Breads
//   {
//     id: 1,
//     title: "بربری آزاد ساده",
//     price: 1500,
//     inventory: 30,
//     img: "../images/noon/barbari-192.png",
//     enable: true,
//     productGroupId: 1
//   },
//   {
//     id: 2,
//     title: "بربری آزاد کنجدی",
//     price: 2000,
//     inventory: 30,
//     img: "../images/noon/barbari-konjedi-192.png",
//     enable: false,
//     productGroupId: 1
//   },
//   {
//     id: 3,
//     title: "سنگک آزاد ساده",
//     price: 1500,
//     inventory: 30,
//     img: "../images/noon/sangak-192.png",
//     enable: false,
//     productGroupId: 1
//   },
//   {
//     id: 4,
//     title: "سنگک آزاد کنجدی",
//     price: 2000,
//     inventory: 30,
//     img: "../images/noon/sangak-konjedi-192.png",
//     enable: false,
//     productGroupId: 1
//   },
//   {
//     id: 5,
//     title: "لواش",
//     price: 250,
//     inventory: 100,
//     img: "../images/noon/lavash-192.png",
//     enable: false,
//     productGroupId: 1
//   }
// ];

// export const TIME_LIST: IDeliverTime[] = [
//   { id: 1, title: "6:00 تا 7:00 صبح", start: 6, end: 7 },
//   { id: 2, title: "7:00 تا 8:00 صبح", start: 7, end: 8 },
//   { id: 3, title: "8:00 تا 10:00 صبح", start: 8, end: 10 },
//   { id: 4, title: "17:00 تا 19:00 عصر", start: 17, end: 19 },
//   { id: 5, title: "19:00 تا 22:00 شب", start: 19, end: 22 }
// ];


export const CUSTOMERS: ICustomer[] = [
  {
    name: 'محسن شعبانیان',
    mobile: '09113923310',
    district: 'Abrisham',
    address: 'رامسر - نارنج بن - جنب بانک صادرات - موسسه نسیم',
  }
];

export const GROUPS: IGroup[] = [
  { id: 1,  title: 'Breads', persianTitle: 'نان تازه', persianSubtitle: 'خرید نان تازه و گرم', img: '/images/group/noon.png', enabled: true },
  { id: 2,  title: 'Market', persianTitle: 'سوپر مارکت', persianSubtitle: 'انتخاب و خرید مواد غذایی', img: '/images/group/shopping-cart.png', enabled: false },
  { id: 3,  title: 'FastFoods', persianTitle: 'فست فود', persianSubtitle: 'سفارش غذا از فست فود و کافه', img: '/images/group/fast-food.png', enabled: false },
  { id: 4,  title: 'Restaurants', persianTitle: 'رستوران', persianSubtitle: 'سفارش غذاهای ایرانی و محلی', img: '/images/group/resturant.png', enabled: false },
  { id: 5,  title: 'Souvenir', persianTitle: 'سوغات', persianSubtitle: 'صنایع دستی محلی و بومی', img: '/images/group/souvenir.png', enabled: false },
  { id: 6,  title: 'Discount', persianTitle: 'تخفیفان رامسر', persianSubtitle: 'تخفیف های باورنکردنی از همه چیز', img: '/images/group/discount.png', enabled: false }
]


export const MARKETS: IMarket[] = [
  { title: 'Ebrahimian', persianTitle: 'نانوایی ابراهیمی', persianSubtitle: null, img: '/images/market/bakery-logo.png', discount: null, freeDeliver: false, enabled: true, groups_id: 1, address: 'رامسر - ابریشم محله' },
  { title: 'hayat._.hayat', persianTitle: 'نگارخانه حیاط حیات', persianSubtitle: null, img: '/images/market/florist-bakery-cafe.png', discount: null, freeDeliver: true, enabled: true, groups_id: 2, address: 'رامسر - ابریشم محله' }
]

export const OPEN_TIMES: IOpenTime[] = [
  //
  { dayName: 'شنبه', dayNumber: 6, startTime: 6, endTime: 10, markets_id: 1 },
  { dayName: 'شنبه', dayNumber: 6, startTime: 17, endTime: 20.30, markets_id: 1 },

  { dayName: 'یکشنبه', dayNumber: 0, startTime: 6, endTime: 10, markets_id: 1 },
  { dayName: 'یکشنبه', dayNumber: 0, startTime: 17, endTime: 20.30, markets_id: 1 },

  { dayName: 'دوشنبه', dayNumber: 1, startTime: 6, endTime: 10, markets_id: 1 },
  { dayName: 'دوشنبه', dayNumber: 1, startTime: 17, endTime: 20.30, markets_id: 1 },

  { dayName: 'سه شنبه', dayNumber: 2, startTime: 6, endTime: 10, markets_id: 1 },
  { dayName: 'سه شنبه', dayNumber: 2, startTime: 17, endTime: 20.30, markets_id: 1 },

  { dayName: 'چهارشنبه', dayNumber: 3, startTime: 6, endTime: 10, markets_id: 1 },
  { dayName: 'چهارشنبه', dayNumber: 3, startTime: 17, endTime: 20.30, markets_id: 1 },

  { dayName: 'پنجشنبه', dayNumber: 4, startTime: 6, endTime: 10, markets_id: 1 },
  { dayName: 'پنجشنبه', dayNumber: 4, startTime: 17, endTime: 20.30, markets_id: 1 },

  { dayName: 'جمعه', dayNumber: 5, startTime: 6, endTime: 10, markets_id: 1 },
  { dayName: 'جمعه', dayNumber: 5, startTime: 17, endTime: 20.30, markets_id: 1 },

  //
  { dayName: 'شنبه', dayNumber: 6, startTime: 11, endTime: 13.30, markets_id: 2 },
  { dayName: 'شنبه', dayNumber: 6, startTime: 16, endTime: 22.30, markets_id: 2 },

  { dayName: 'یکشنبه', dayNumber: 0, startTime: 11, endTime: 13.30, markets_id: 2 },
  { dayName: 'یکشنبه', dayNumber: 0, startTime: 16, endTime: 22.30, markets_id: 2 },

  { dayName: 'دوشنبه', dayNumber: 1, startTime: 11, endTime: 13.30, markets_id: 2 },
  { dayName: 'دوشنبه', dayNumber: 1, startTime: 16, endTime: 22.30, markets_id: 2 },

  { dayName: 'سه شنبه', dayNumber: 2, startTime: 11, endTime: 13.30, markets_id: 2 },
  { dayName: 'سه شنبه', dayNumber: 2, startTime: 16, endTime: 22.30, markets_id: 2 },

  { dayName: 'چهارشنبه', dayNumber: 3, startTime: 11, endTime: 13.30, markets_id: 2 },
  { dayName: 'چهارشنبه', dayNumber: 3, startTime: 16, endTime: 22.30, markets_id: 2 },

  { dayName: 'پنجشنبه', dayNumber: 4, startTime: 11, endTime: 13.30, markets_id: 2 },
  { dayName: 'پنجشنبه', dayNumber: 4, startTime: 16, endTime: 22.30, markets_id: 2 },

  { dayName: 'جمعه', dayNumber: 5, startTime: 11, endTime: 13.30, markets_id: 2 },
  { dayName: 'جمعه', dayNumber: 5, startTime: 16, endTime: 22.30, markets_id: 2 },
]

export const PRODUCTS: IProducts[] = [
  { title: 'Barbari', persianTitle: 'بربری ساده', price: 1500, img: '/images/noon/barbari-192.png', enabled: true, max: 30, description: '', markets_id: 1 },
  { title: 'Barbari', persianTitle: 'بربری کنجدی', price: 2000, img: '/images/noon/barbari-konjedi-192.png', enabled: true, max: 30, description: '', markets_id: 1 },

  //
  { title: 'water-kiwi', persianTitle: 'دیتاکس کیوی', price: 15000, img: '/images/noon/water-kiwi.png', enabled: true, max: 5, description: '', markets_id: 2 },
  { title: 'StrawberryCucumber', persianTitle: 'دیتاکس خیار', price: 20000, img: '/images/noon/StrawberryCucumber.png', enabled: true, max: 5, description: '', markets_id: 2 },
  { title: 'lamon', persianTitle: 'دیتاکس لیمو', price: 17000, img: '/images/noon/lamon.png', enabled: true, max: 5, description: '', markets_id: 2 },
  { title: 'detox-water-', persianTitle: 'دیتاکس مخصوص', price: 25000, img: '/images/noon/detox-water-.png', enabled: true, max: 5, description: '', markets_id: 2 },
]