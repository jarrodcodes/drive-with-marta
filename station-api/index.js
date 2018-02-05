const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const stationList = new Sequelize("postgres://jarrod_young@localhost:5432/smarta-commute");

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
            placeID: 'ChIJ60W2TVQJ9YgRTcTkt6utgog',
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
            lineColor: 'Gold, Red, Blue, Green',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Peachtree Center',
            placeID: 'ChIJ3RLXaHgE9YgRStIII8XKcQ0',
            lineColor: 'Gold, Red',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Civic Center',
            placeID: 'ChIJRd4PW3oE9YgRgAv4i39SSt0',
            lineColor: 'Gold, Red',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'North Avenue',
            placeID: 'ChIJu65s0W4E9YgR1ZlcTtxARlw',
            lineColor: 'Gold, Red',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Midtown',
            placeID: 'ChIJVWLyW10E9YgRd9EAsFw8fXY',
            lineColor: 'Gold, Red',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Arts Center',
            placeID: 'ChIJ6yzJ31oE9YgR7hZJdBvUUg0',
            lineColor: 'Gold, Red',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Lindbergh Center',
            placeID: 'ChIJo8oZEMIF9YgRS35yQXEexwg',
            lineColor: 'Gold, Red',
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
            name: 'Brookhaven/Oglethorpe University',
            placeID: 'ChIJCzg087sI9YgRWE1Ps6UDDj8',
            lineColor: 'Gold',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Chamblee',
            placeID: 'ChIJhcujTlMI9YgRxT33tRg5Y0I',
            lineColor: 'Gold',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Doraville',
            placeID: 'ChIJZ5SGscQJ9YgRiOIn0Xkts2I',
            lineColor: 'Gold',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Garnett',
            placeID: 'ChIJqeJICHgD9YgRKqFxaZdhtgw',
            lineColor: 'Gold, Red',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'West End',
            placeID: 'ChIJi00l8RQD9YgRvcizUsN8StI',
            lineColor: 'Gold, Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Oakland City',
            placeID: 'ChIJaRrKuycD9YgR7z-dBv9V2Bc',
            lineColor: 'Gold, Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Lakewood/Ft. McPherson',
            placeID: 'ChIJcYu_Qc8C9YgRiYo0eLC-9J4',
            lineColor: 'Gold, Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'East Point',
            placeID: 'ChIJe45LZVMd9YgRE__2cWP0hOA',
            lineColor: 'Gold, Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'College Park',
            placeID: 'ChIJszvd7bfi9IgRvSNLpVbZOWY',
            lineColor: 'Gold, Red',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Airport',
            placeID: 'ChIJFwUs2M3i9IgR1SIEIQ8SwnQ',
            lineColor: 'Gold, Red',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Dome/GWCC/Philips Arena/CNN Center Station',
            placeID: 'ChIJ77wFoX8D9YgRtW_Y5jb5QFU',
            lineColor: 'Blue, Green',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Vine City',
            placeID: 'ChIJ9wfss30D9YgR225WGSp4vL4',
            lineColor: 'Blue, Green',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Ashby',
            placeID: 'ChIJveUPJl4D9YgRd8HMkTVuy3Q',
            lineColor: 'Blue, Green',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'West Lake',
            placeID: 'ChIJT9Oci64c9YgR2nJfyuy0rq4',
            lineColor: 'Blue',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Hamilton E. Holmes',
            placeID: 'ChIJ38TYEZsc9YgR_uMf8vnjQGU',
            lineColor: 'Blue',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Georgia State',
            placeID: 'ChIJDeNyEoUD9YgRQ_sRFQKliI0',
            lineColor: 'Blue, Green',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'King Memorial',
            placeID: 'ChIJ0RsX5IwD9YgR6J2NIxeB5Yg',
            lineColor: 'Blue, Green',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Inman Park/Reynoldstown',
            placeID: 'ChIJeSkmSFUB9YgRJz1ToM8WTSk',
            lineColor: 'Blue, Green',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Edgewood/Candler Park',
            placeID: 'ChIJBx0a57MG9YgR3nvK8fy50a8',
            lineColor: 'Blue, Green',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'East Lake',
            placeID: 'ChIJt-iA79cG9YgRjYm93BmYtTQ',
            lineColor: 'Blue',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Decatur',
            placeID: 'ChIJRZAUaT4H9YgRL5WibxIO_dA',
            lineColor: 'Blue',
            parking: false,
        })
    }).then(() => {
        return StationList.create({
            name: 'Avondale',
            placeID: 'ChIJ_e1VrEIH9YgRqyMtNuBzYj0',
            lineColor: 'Blue',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Kensington',
            placeID: 'ChIJJ_6DVuqp9YgRyzrwnWh0n3g',
            lineColor: 'Blue',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Indian Creek',
            placeID: 'ChIJH3a7ap6p9YgRyzXDyPm_Li0',
            lineColor: 'Blue',
            parking: true,
        })
    }).then(() => {
        return StationList.create({
            name: 'Bankhead',
            placeID: 'ChIJQ1OuG7AE9YgRikLXoEBZkdI',
            lineColor: 'Green',
            parking: false,
        })
    })
});

app.get('/stations', function (request, response) {
    StationList.findAll({ order: [['createdAt', 'DESC']] }).then(stations => {
        console.log(stations);
        response.send(stations);
    });
});

app.get('/stationswithparking', function (req, res) {
    StationList.findAll({
        where: { parking: true }
    }).then(stations => {
        res.send(stations);
    })
});

app.get('/stationsfirstbatch', function (req, res) {
    StationList.findAll({
        where: { id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] }
    }).then(stations => {
        res.send(stations);
    })
});

app.get('/stationssecondbatch', function (req, res) {
    StationList.findAll({
        where: { id: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38] }
    }).then(stations => {
        res.send(stations);
    })
});

app.get('/blue', function (req, res) {
    StationList.findAll({
        where: {
            lineColor: {
              $like: "%Blue%"
            }
          }
    }).then(stations => {
        res.send(stations);
    })
});

app.get('/green', function (req, res) {
    StationList.findAll({
        where: {
            lineColor: {
              $like: "%Green%"
            }
          }
    }).then(stations => {
        res.send(stations);
    })
});

app.get('/red', function (req, res) {
    StationList.findAll({
        where: {
            lineColor: {
              $like: "%Red%"
            }
          }
    }).then(stations => {
        res.send(stations);
    })
});

app.get('/gold', function (req, res) {
    StationList.findAll({
        where: {
            lineColor: {
              $like: "%Gold%"
            }
          }
    }).then(stations => {
        res.send(stations);
    })
});

app.listen(3000, () => {
    console.log('Hi!! You are on port 3000!')
});