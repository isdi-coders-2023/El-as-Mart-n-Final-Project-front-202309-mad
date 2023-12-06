console.log('LOCATION', location); // Temp

export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:3800'
    : 'https://Elias-Martin-Final-Project-back-202309-mad.onrender.com'; // DEL SERVIDOR DE RENDER

console.log(serverUrl); // Temp
