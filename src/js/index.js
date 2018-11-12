import Search from './models/Search'; 

const search = new Search('pizza'); 
console.log(search); 
search.getResuls('pizza'); 

const state = {

}

const controlSearch = async () => {
  const query = 'pizza'; 

  if(query) {
    state.search = new Search(query); 

    await state.search.getResuls(); 

    console.log(state.search.result); 
  } 
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault(); 
  controlSearch(); 

})

