const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();

app.use(express.static(path.join(__dirname, 'public')))

// Restfull API to get the my questions list
app.post('/accountLookup', function (req, res) {
  var lookupData = {
      "accountInformation": [
          {
              "accountNumber": "008812345",
              "accountName": "Test",
              "addressLine1": "7801 E 88th St",
              "addressLine2": ""
          },
          {
              "accountNumber": "00881234456",
              "accountName": "Test - 2",
              "addressLine1": "7801 E 88th St",
              "addressLine2": ""
          }
      ]
  }
  res.json(lookupData).status(200);
});

app.post('/standardize', function (req, res) {
  var standardizeData = {
      "errorIndicator": false,
      "address": {
          "addressLine1": "7801 E 88th St",
          "city": "Indianapolis",
          "state": "IN",
          "zip": "46256-1233"
      }
  }
  res.json(standardizeData).status(200);
});

app.post('/getAccountData', function (req, res) {
  var accountData = {
      "publicID": "ID-123",
      "accountNumber": "008812345",

      "locations": [],
      "addressLine1": "7801 E 88th St",
      "addressLine2": "",
      "businessName": "Test Business",
      "city": "Indianapolis",
      "state": "IN",
      "zipCode": "46256-1233",
      "accountDetails": {
          "nAICSCode": "1234",
          "subNiche": "sub-niche",
          "niche": "niche",
          "fein": "1234-1234",
          "businessStartedYear": "2018",
          "businessStartedMonth": "January",
          "firstName": "John",
          "lastName": "Doe"
      },
      "displayName": "Test-Business"
  }
  res.json(accountData).status(200);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


