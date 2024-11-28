// COMP3123 - Fullstack Development, Labtest 02
// Taylor Martin, Student ID: 100849882

import express from 'express';
import axios from 'axios';

const apiKey = 'deac23fc752d99a796d2cf3fe7e97f24';

export function getWeatherRoute() {
    const router = express.Router();

    router.get('/weather', async (req, res) => {
        const { city, country } = req.query;
        const location = country ? `${city},${country}` : city;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric`;

        try {
            const response = await axios.get(url);
            res.json(response.data);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({ error: 'Could not get weather data' });
        }
    });

    return router;
}