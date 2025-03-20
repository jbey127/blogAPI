require('dotenv').config();
const airtable = require('airtable')
const atKey = process.env.AT_KEY
const baseID = 'app8i8E6sZ9v8Qm7m'
const base = new airtable({apiKey: atKey}).base(baseID)

base('Table 1').create([
    {
      "fields": {
        "Name": "BLOG EXAMPLE 2",
        "HTML": "test"
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      console.log(record.get('Name'));
    });
  });