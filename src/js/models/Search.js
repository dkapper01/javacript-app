import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResuls() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const key = "70615e47240e15c4ce77ff3535f534b1";
    try {
      const res = await axios(
        `${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}

