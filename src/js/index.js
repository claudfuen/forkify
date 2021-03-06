// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements} from './views/base';

// Global State of the App
/*
* - Search Object 
* - Current Recipe
* - Shopping List Object
* - Linked Recipes
*/

const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); // ToDo
    console.log(query)

    if (query){
        // new search object and add to state
        state.search = new Search(query);

        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipes
        await state.search.getResults();

        // 5) render results on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})


