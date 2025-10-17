const express = require('express');
const app = express();
const port = 3000;

app.get('/weather', (req, res) => {
    const weatherData = {
        city: "Budapest",
        temperature: 22,
        unit: "Celsius",
        description: "Sunny"
    };
    
    res.json(weatherData);
});

app.listen(port, () => {
    console.log(`WeatherInfo API listening at http://localhost:${port}`);
});