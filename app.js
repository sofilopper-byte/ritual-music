require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Credenciales
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const redirect_uri = 'https://ritual-music.onrender.com/callback';

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

app.get('/callback', (req, res) => {
  console.log("Simulando éxito para probar el diseño...");
  res.redirect('/?status=success');
});

app.listen(port, () => {
  console.log(`\n🚀 Servidor RITUAL corriendo en el puerto ${port}!`);
});