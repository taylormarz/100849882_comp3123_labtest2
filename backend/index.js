// COMP3123 - Fullstack Development, Labtest 02
// Taylor Martin, Student ID: 100849882

import express from 'express';
import cors from 'cors';
import { getWeatherRoute } from './weather-route.js';

const app = express();
const SERVER_PORT = 8080;

// enabling communication with frontend
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET'],
    credentials: true
}));

// processing requests
app.use(express.json());

app.use('/api', getWeatherRoute());

app.listen(SERVER_PORT, () => { 
    console.log(`Server running on http://localhost:${SERVER_PORT}`) 
});