const Currency = require('../models/Currency');
const Country = require('../models/Country');

const lod = require('lodash')
const router = require('express').Router();
const request = require('request-promise')
const sentry = require('@sentry/node');

const persistCountryObject = (rawCountry) => {
    const countryFields = lod.pick(rawCountry, [
        'name',
        'alpha2code',
        'alpha3code'
    ])
    const countryObject = new Country(countryFields)
    countryObject.save(err => {
        if (err) {
            console.log("error occurred")
            sentry.captureException(err)
        } else {
            sentry.captureMessage(`Saved country ${countryFields.name}`)
        }
    })
}

const seedHandler = async (req, res, next) => {
    try {
        const requestOptions = {
            uri: "https://restcountries.eu/rest/v2/all",
            json: true,
        }
        const resp = await request(requestOptions)
        res.send(resp)
        resp.forEach(rawCountry => {
            persistCountryObject(rawCountry)
        });
    } catch (ex) {
        sentry.captureException(ex)
        res.send("Did not seed the DB")
    }
}

router.post('/seed', seedHandler)

module.exports = router;