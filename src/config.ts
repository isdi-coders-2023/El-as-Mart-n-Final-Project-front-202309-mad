console.log('LOCATION', location); // Temp

export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:3500'
    : 'https://eliasmr98-202309-w6ch5-elias-martin-back.onrender.com'; // DEL SERVIDOR DE RENDER

console.log(serverUrl); // Temp
