export const state = () => ({
    /* 
    Stores beers indexing them by pages.
    Used to quickly access pages and know if we have
    to fetch them.
    */
    indexedPages: {},
    /* 
    Stores beers indexing them by id.
    Used to quickly access a beer and change a property.
    */
    indexedBeers: {},
    /* 
    Stores the currently shown beers. 
    Used to show the beers after fetching them.
    Vue reacts easier to arrays when it comes to reactive
    elements.
    */
    currentlyShownBeers: [],
    /* 
    Stores the currently shown beer. 
    Used to show the beer details.
    */
    currentlyShownBeer: null
});

export const mutations = {
    //  Stores beers in the store. 
	addPage(state, {pageNumber, beers}) {
		state.indexedPages[pageNumber] = beers;
        beers.forEach((beer) => {
            beer.tasted = beer.tasted ?? false;
            state.indexedBeers[beer.id] = beer;
        });
        state.currentlyShownBeers = beers;
    },
    // Changes the tasted property of a beer
	changeTasted(state, beerId) {
        state.indexedBeers[beerId].tasted = !state.indexedBeers[beerId].tasted;
    },
    // Changes the currently shown beer
    changeBeer(state, beer) {
        state.currentlyShownBeer = beer;
    }
};

export const getters = {
    // Returns the currently shown beers
    getBeers: (state) => {
        return state.currentlyShownBeers;
    },
    // Returns the currently shown beer
    getBeer: (state) => {
        return state.currentlyShownBeer;
    }
}

export const actions = {
    // If the page exists it adds it, if not it fetches it from the api
    async fetchBeers({ commit, state }, pageNumber) {
        const beers = state.indexedPages[pageNumber] ?? await this.$api.getBeers(pageNumber).then(res =>
            res.json()
        )
        commit('addPage', { pageNumber, beers });
    },
    // Helps to change the currently shown beer
    async fetchBeer({ commit, state }, id) {
        const beer = state.indexedBeers[id];
        commit('changeBeer', beer);
    }
}