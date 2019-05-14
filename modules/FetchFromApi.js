import Common from './Common.js';
import Data from './data.js';

class FetchFromApi{ 

  constructor() { 
	this.listApiData();
    this.FetchApiElement = document.querySelector(".ShowData");
    //this.iLoveLasagne();
  }
  
  async listApiData() {
   	let ApiData = await Data.getApiData();
  	const data = [ApiData];

	
	  
	let element = document.querySelector(".ShowData");
    this.FetchApiElement.addEventListener("click", () => {
    element.innerHTML = "";
    //I have created a class Common that holds the method toDom

    let listElement = Common.toDom(`
    <div class="note-list-element">
    <p>Time: ${ApiData.time}</p>
    </div>
  `);
    this.FetchApiElement.appendChild(listElement);
    
    // loops through the json and gets the currency elements, rates and name
    for(let x of Object.keys(ApiData.rates)){
      let listElement = Common.toDom(`
      <div class="note-list-element">
    <h1>${x}</h1> 
    <i>Rate for USD: ${ApiData.rates[x].rate}</i>
    </br>
    <i>Name: ${ApiData.rates[x].name}</i>
    
      <!--<p>Time: ${ApiData.time}</p>-->
    
      </div>
    `);
      this.FetchApiElement.appendChild(listElement);
    }

    /*-------------
	for (const items of data) {
    let listElement = Common.toDom(`
    <div class="note-list-element">
	<h1>${ApiData}</h1> 
	<i>Rate for USD: ${ApiData.rates.AUD.rate}</i>
	</br>
	<i>Name: ${ApiData.rates.AUD.name}</i>
	
    <p>Time: ${ApiData.time}</p>
	
    </div>
  `);
		this.FetchApiElement.appendChild(listElement);
		 }
    */
    });
  }

  }
  export default FetchFromApi;