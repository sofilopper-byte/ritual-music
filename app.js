require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path'); // Importante para manejar las rutas de archivos
const app = express();
const port = 3000;

// Le decimos a Express que muestre los archivos (HTML, CSS, GIFs) de la carpeta 'public'
app.use(express.static('public'));

// Credenciales
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://127.0.0.1:3000/callback';

app.get('/auth/spotify', (req, res) => {
  const scope = 'user-library-read';
  res.redirect('https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri
    }).toString());
});

/*app.get('/callback', async (req, res) => {
  const code = req.query.code || null;

  try {
    const authOptions = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: new URLSearchParams({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      }).toString(),
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const response = await axios(authOptions);
    const access_token = response.data.access_token;

    // Pedimos las canciones favoritas (Liked Songs)
    const tracksResponse = await axios.get('https://api.spotify.com/v1/me/tracks', {
      headers: { 'Authorization': 'Bearer ' + access_token }
    });

    const tracks = tracksResponse.data.items.map(item => `<li>${item.track.name} - ${item.track.artists[0].name}</li>`).join('');
    
    // Por ahora, en vez de mostrar tu Pantalla 2, va a mostrar esta lista de éxito:
    res.send(`<h1>¡Conexión Exitosa!</h1><h2>Tus canciones favoritas:</h2><ul>${tracks}</ul><p>RITUAL ya está conectado.</p>`);

  } catch (error) {
    console.error("Error en Spotify:", error.response ? error.response.data : error.message);
    res.send('Error al conectar con Spotify. Revisa la terminal para ver el detalle.');
  }
});*/
app.get('/callback', (req, res) => {
  console.log("Simulando éxito para probar el diseño...");
  res.redirect('/?status=success');
});

app.listen(port, () => {
  console.log(`\n🚀 Servidor RITUAL corriendo!`);
  // Cambié esto para que sepas dónde entrar a ver el diseño:
  console.log(` Entrá en tu navegador a: http://localhost:3000 \n`);
});