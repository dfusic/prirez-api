# Prirez JSON API (2018)

Due to Croatia not having API for surtax values, I decided to create my own. 

---

Pošto Hrvatska nema svoj API za prirez, odlučio sam napraviti svoj.

### How to use

``` javascript
fetch('prirez.json')
.then((response)=>{
  return response.json();
}).then((json)=>{
  return json.prirez;
})
```
