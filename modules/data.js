class Data{ 
    
      static getApiData() { 
    
          //return fetch('http://www.omdbapi.com/?apikey=a4036190&t=Matrix')
		  //return fetch('https://cvrapi.dk/api?search=dansk%20selskab%20aps&country=dk')
		  //return fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
		  return fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/local')
          .then(
            (response) => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              //if it works, this piece of code is returned 
              return response.json();      
            }
            
          )
          .catch((err) => {
            console.log('Fetch Error :-S', err);
          });
      }
      
    }
    
    export default Data;

 