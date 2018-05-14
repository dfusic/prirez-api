fetch('../prirez.json')
.then((response)=>{
  return response.json();
}).then((json)=>{
  console.table(json.prirez);
});