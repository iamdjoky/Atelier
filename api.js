var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyBlP2SdJGzJbZLO'}).base('appoPuDsKbL0WoM6n');

base('Books').select({
    // Selecting the first 3 records in Galerie – Tous les livres:
    maxRecords: 3,
    view: "Galerie – Tous les livres"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Titre'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
