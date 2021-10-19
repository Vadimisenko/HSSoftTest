import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import LastNodeContext from './components/lastNodeContext/'

const data = [{
        "id": 1,
        "name": "Africa",
        "country": [{ 
          "id": 2,
          "name": "Gana"
        }, {
          "id": 3,
          "name": "Sudan"
        }]
      }, {
        "id": 4,
        "name": "Antarctica",
        "country": [{ 
          "id": 5,
          "name": "Boulvet Island"
        }, {
          "id": 6,
          "name": "South Georgia"
        }]
      }, {
        "id": 7,
        "name": "Asia",
        "country": [{ 
          "id": 8,
          "name": "China"
        }, {
          "id": 9,
          "name": "India"
        }]
      }, {
        "id": 10,
        "name": "Europe",
        "country": [{
          "id": 11,
          "name": "Andorra",
            "country": [{
              "id": 12,
              "name": "Catalan"
            }]
        }, {
          "id": 13,
          "name": "Albania"
        }, {
          "id": 14,
          "name": "Austria"
        }]  
}];

ReactDOM.render(
  <LastNodeContext.Provider value={data[data.length-1].name}>
    <App data={data} />
  </LastNodeContext.Provider>,
  document.getElementById('root')
);