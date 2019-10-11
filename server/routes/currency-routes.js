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

const seedHandler = async (req, res, next) => {
    try {
        const requestOptions = {
            uri: "https://restcountries.eu/rest/v2/all",
            json: true,
        }
        const resp = await request(requestOptions)
        let allCurrencies = {}
        for (let i = 0; i < resp.length; i++) {
            const rawCountry = resp[i]
            // persistCountryObject(rawCountry)
            const countryObject = await getCountry(rawCountry.name)
            const currencies = rawCountry.currencies;
            currencies.forEach(curr => {
                if (curr.name === null || curr.code === '(none)' || curr.code === null) {
                    // do nothing
                } else if (allCurrencies[curr.code] === undefined) {
                    curr.countries = [countryObject._id]
                    allCurrencies[curr.code] = curr;
                } else if(allCurrencies[curr.code].countries.indexOf(countryObject._id) === -1) {
                    allCurrencies[curr.code].countries.push(countryObject._id)
                }
            })
        }
        for (let key in allCurrencies) {
            const currencyInfo = allCurrencies[key]
            const currencyObject = new Currency(currencyInfo)
            currencyObject.save(err => {
                if (err) {
                    console.log("error occurred when saving currency")
                    sentry.captureException(err)
                } else {
                    sentry.captureMessage(`Saved currency ${currencyInfo.name}`)
                }
            })
        }
        res.send(resp)
    } catch (ex) {
        sentry.captureException(ex)
        res.send("Did not seed the DB")
    }
}

router.post('/seed', seedHandler)

module.exports = router;