import Data from './data.js';

class ApiData{ 

  constructor() { 
    this.listApiData();
  }

  async listApiData() {
   let ApiData = await Data.getApiData();
   console.log(ApiData);
  }



  }
  export default ApiData;