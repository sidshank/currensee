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

const getCountry = countryName => {
    return Country.findOne({name: countryName}).exec()
}

const createCurrency = async (currencyInfo, countryObjectId) => {
    let currencyObject = await Currency.find({name: currencyInfo.name}).exec()
    if (!currencyObject) {
        currencyDetails.countries = [countryObjectId]
        currencyObject = new Currency(currencyDetails)
    } else {
        currencyObject.countries.push(countryObjectId)
    }
    try {
        await currencyObject.save()
        sentry.captureMessage(`Saved currency ${currencyDetails.name}`)
    } catch (saveException) {
        sentry.captureException(saveException)
    }
}

const persistCurrencies = (currencies, countryObjectId) => {
    currencies.forEach(crncy => {
        createCurrency(crncy, countryObjectId)
    })
}

const seedHandler = async (req, res, next) => {
    try {
        const requestOptions = {
            uri: "https://restcountries.eu/rest/v2/all",
            json: true,
        }
        const resp = await request(requestOptions)
        resp.forEach(async rawCountry => {
            const countryObject = await getCountry(rawCountry.name)
            // persistCountryObject(rawCountry)
            persistCurrencies(rawCountry.currencies, countryObject._id)
        });
        res.send(resp)
    } catch (ex) {
        sentry.captureException(ex)
        res.send("Did not seed the DB")
    }
}

router.post('/seed', seedHandler)

module.exports = router;