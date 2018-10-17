import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;

    }

    async getResults() {

        let proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = '7304f4f19946896a98d89e79b0fe071c';

        try {
            const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            // console.log(res);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (err) {
            alert(err);
        }
    }
}






