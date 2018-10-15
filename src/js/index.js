// Global app controller
import string from './models/Search';
import * as searchView from './views/searchView';
import Search from './models/Search';

// Global State of the App
/*
* - Search Object 
* - Current Recipe
* - Shopping List Object
* - Linked Recipes
*/

const state = {};

const search = new Search('pizza');
console.log(search);
search.getResults();
