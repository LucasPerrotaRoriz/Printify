const PRINTIFY_API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjUwMDEzZmI3MDg5MGI2NTA3YjQ1ZDEyMDFmZDUzZTgwYzc4MjgzZDFkZDUzYTIzZDcwMzVkOWM2MzNmZDkyMmUzZGU5MzE1NWY2ODMyNDZjIiwiaWF0IjoxNzA5NjgyNDQzLjg0NjgxMiwibmJmIjoxNzA5NjgyNDQzLjg0NjgxNCwiZXhwIjoxNzQxMjE4NDQzLjgzNzExOSwic3ViIjoiMTcyNjc1MzUiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AKA4qfGbIX_f1jJjCW4RdC7Xte4zsaovPWOH4Layd7MloJ7_IH8yAsV81-08XR81PnxBRWPg09vtyQSG4YM';

const url = 'https://cors-anywhere.herokuapp.com/https://api.printify.com/v1/shops.json';

fetch(`${url}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${PRINTIFY_API_TOKEN}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('STORE', data[0]); 
  
  fetch(`https://cors-anywhere.herokuapp.com/https://api.printify.com/v1/shops/${data[0].id}/products.json`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${PRINTIFY_API_TOKEN}`
    }
  })
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('PRODUCTS', data);
  })
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
