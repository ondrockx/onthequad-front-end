'use strict';

var _ = require('lodash');

var config = {
	backendURL: 'https://otq.liamd.com',
	loginURL: '/login',
	browseURL: '/browse',
    postingURL: '/posting',
    accountURL: '/account',
    submitCategories: {
        textbooks: "Textbooks",
        tickets: "UConn Tickets",
        lostandfound: "Lost and Found",
        furniture: "Furniture",
        electronics: "Electronics",
        clothing: "Clothing",
        vehicles: "Vehicles",
        supplies: "School Supplies",
        media: "Movies and Games",
        other: "Other"
    },
	primaryCategory: 'all',
    categoryToNum: function (category) {
        switch (category) {
            case 'all':
                return -1;
            case 'textbooks':
                return 1;
            case 'tickets':
                return 2;
            case 'lostandfound':
                return 3;
            case 'furniture':
                return 4;
            case 'electronics':
                return 5;
            case 'clothing':
                return 10;
            case 'vehicles':
                return 6;
            case 'supplies':
                return 7;
            case 'media':
                return 8;
            case 'other':
                return 9;
        }
    }
};

export const defaultImage = '/images/thumbnaildiv.png';
export const cat_textbooks = '/images/category1.png';
export const cat_uconntickets = '/images/category2.png';
export const cat_lostandfound = '/images/category3.png';
export const cat_furniture = '/images/category4.png';
export const cat_electronics = '/images/category5.png';
export const cat_clothing = '/images/category6.png';
export const cat_vehicles = '/images/category7.png';
export const cat_schoolsupplies = '/images/category8.png';
export const cat_moviesandgames = '/images/category9.png';
export const cat_other = '/images/category10.png';
export const accountURL = '/account';
export const browseURL = '/browse';
export const searchURL = '/search';
export const postingURL = '/posting';
export const landingURL = '/';
export const getAppURL = (app) => {
    switch (app) {
        case 'BROWSE':
            return browseURL;
        case 'ACCOUNT':
            return accountURL;
        case 'SEARCH':
            return searchURL;
        case 'POSTING':
            return postingURL;
        default:
            return '/';
    }
};
export const categoryImage = (title) => {
    switch (title) {
            case "Textbooks": return cat_textbooks;
            case "UConn Tickets": return cat_uconntickets;
            case "Lost and Found": return cat_lostandfound;
            case "Furniture": return cat_furniture;
            case "Electronics": return cat_electronics;
            case "Clothing": return cat_clothing;
            case "Vehicles": return cat_vehicles;
            case "School Supplies": return cat_schoolsupplies;
            case "Movies and Games": return cat_moviesandgames;
            case "Other": return cat_other;
            default: return defaultImage;
    }
};
export const imgUrl = (item = {}) => {
    if (item.image && item.image[0]) {
        const imageName = item.image[0].split('.')[0];
        return item.image[0] ?
            config.backendURL + '/api/images/' + imageName + '_thumb.png':
            false;
    }
    return false
};
export const imgUrls = (item = {}) => {
    if (item.image && item.image[0]) {
        const urls = [];
        for (var i in item.image) {
            const imageName = item.image[i].split('.')[0];
            urls.push(config.backendURL + '/api/images/' + imageName + '_thumb.png');
        }
        return urls;
    }
    return [];
};
export const imgRawUrls = (item = {}) => {
    if (item.image && item.image[0]) {
        const urls = [];
        for (var i in item.image) {
            urls.push(config.backendURL + '/api/images/' + item.image[i]);
        }
        return urls;
    }
    return [];
};
export const decodeText = (html) => {
    if (html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    return "";
};
export const numToCategory = (num) => {
    switch (num) {
        case -1:
            return 'all';
        case 1:
            return 'textbooks';
        case 2:
            return 'tickets';
        case 3:
            return 'lostandfound';
        case 4:
            return 'furniture';
        case 5:
            return 'electronics';
        case 10:
            return 'clothing';
        case 6:
            return 'vehicles';
        case 7:
            return 'supplies';
        case 8:
            return 'media';
        case 9:
            return 'other';
    }
};

export const allFalse = (obj) => {
  for(var o in obj)
    if(obj[o]) return false;
  return true;
};

export const allTrue = (obj) => {
  for(var o in obj)
    if(!obj[o]) return false;
  return true;
};

export default _.extend(config, {
    categories: _.extend({all: "All Posts"}, config.submitCategories),
});
