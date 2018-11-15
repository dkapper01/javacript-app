import Search from "./models/Search";
import { elements, renderLoader } from "./views/base";
import * as SearchView from "./views/SearchViews";

const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = SearchView.getInput();

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    SearchView.clearInput();
    SearchView.clearResults();
    renderLoader(elements.searchRes);

    // 4) Search for recipes
    await state.search.getResults();

    // 5) Render results on UI
    SearchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
