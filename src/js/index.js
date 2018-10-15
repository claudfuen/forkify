// Global app controller
import string from './models/Search';
import * as searchView from './views/searchView';
import axios from 'axios';
console.log('JS Working');


const claudioKey = '7304f4f19946896a98d89e79b0fe071c';
const jonasKey = '462b1cc8d4f2730081462fbcc65136320';

let key = claudioKey;


async function getResults(query) {

    let proxy = 'https://cors-anywhere.herokuapp.com/'

    try {
        const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${query}`);
        let recipes = res.data.recipes
        console.log(recipes);
    } catch (err) {
        alert(err);
    }
}

getResults('pizza');


/*

Submitting a Query
All search requests should be made to the search API URL.

https://www.food2fork.com/api/search
All recipe requests should be made to the recipe details API URL.

https://www.food2fork.com/api/get 


Axios works better than fetch across a multitude of things.


*/
