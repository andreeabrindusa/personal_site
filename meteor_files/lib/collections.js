Entries = new Mongo.Collection('Entries');

if (Entries.find().count() === 0) {
 Entries.insert({
 title: 'Plant Care App',
 description: 'description'
 });
 Entries.insert({
 title: 'Commit Fitness App',
 description: 'description'
 });
}