console.log('LOCATION', location); // Temp

export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:3800'
    : 'https://isdi-coders-2023-elias-martin-final.onrender.com'; // DEL SERVIDOR DE RENDER

console.log(serverUrl); // Temp
