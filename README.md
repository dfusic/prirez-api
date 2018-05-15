# Prirez JSON API (2018)

Due to Croatia not having API for surtax values, I decided to create my own. 

---

Pošto Hrvatska nema svoj API za prirez, odlučio sam napraviti svoj.

### How to use

#### Javascript(ES6)
``` javascript
fetch('prirez.json')
.then((response)=>{
  return response.json();
}).then((json)=>{
  return json.prirez;
})
```
#### jQuery
``` javascript 
$.getJSON('prirez.json', function(data){
  return data;
});
```
#### Javascript(ES5)
``` javascript 
var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(method, url, true);
xmlhttp.onload = function () {
  return xmlhttp.response;
};
xmlhttp.send();
```