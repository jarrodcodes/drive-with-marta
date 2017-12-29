const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const stationList = new Sequelize("postgres://localhost:5432/smarta-commute");

const StationList = stationList.define('stations', {
    name: {
        type: Sequelize.STRING
    },
    placeID: {
        type: Sequelize.STRING
    },
    lineColor: {
        type: Sequelize.STRING
    },
    parking: {
        type: Sequelize.BOOLEAN
    }
});

StationList.sync({ force: true }).then(() => {
    return StationList.create({
        name: 'Buckhead',
        placeID: 'ChIJI6k7YFgP9YgRycwA4FSszDw',
        lineColor: 'Red',
        parking: false,
    }
    ).then(() => {
        return StationList.create({
            name: 'Medical Center',
            placeID: 'ChIJF61TDzUJ9YgR2dil6cXQdcA',
            lineColor: 'Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Dunwoody',
            placeID: 'ChIJWybFmk8J9YgRJTyZ4x4-42E',
            lineColor: 'Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Sandy Springs',
            placeID: 'ChIJo9Awq1UJ9YgRo3QWdPhCExI',
            lineColor: 'Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'North Springs',
            placeID: 'ChIJ27hDMAYM9YgRAGj-HiXyrC4',
            lineColor: 'Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Five Points',
            placeID: 'ChIJQ-E6T4ED9YgRI3vsWO3wlBQ',
            lineColor: 'Gold',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Peachtree Center',
            placeID: 'ChIJ3RLXaHgE9YgRStIII8XKcQ0',
            lineColor: 'Gold',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Civic Center',
            placeID: 'ChIJRd4PW3oE9YgRgAv4i39SSt0',
            lineColor: 'Gold',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'North Avenue',
            placeID: 'ChIJu65s0W4E9YgR1ZlcTtxARlw',
            lineColor: 'Gold',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Midtown',
            placeID: 'ChIJdym9WF0E9YgRMBWDOd-dwzU',
            lineColor: 'Gold',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Arts Center',
            placeID: 'ChIJ6XSS4FoE9YgRRKoJM-ZX5Vw',
            lineColor: 'Gold',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Lindbergh Center',
            placeID: 'ChIJo8oZEMIF9YgRS35yQXEexwg',
            lineColor: 'Gold',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Lenox',
            placeID: 'ChIJ_2U4W_8F9YgRyWVPwssotoE',
            lineColor: 'Gold',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Arts Center',
            placeID: 'ChIJ6XSS4FoE9YgRRKoJM-ZX5Vw',
            lineColor: 'Gold',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Arts Center',
            placeID: 'ChIJ6XSS4FoE9YgRRKoJM-ZX5Vw',
            lineColor: 'Gold',
            parking: false,
        })
    })
});