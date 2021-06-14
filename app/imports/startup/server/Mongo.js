import { Meteor } from 'meteor/meteor';
import { Characters } from '../../api/character/Character';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Characters.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Characters.collection.find().count() === 0) {
  if (Meteor.settings.defaultCharacters) {
    console.log('Creating default data.');
    Meteor.settings.defaultCharacters.map(data => addData(data));
  }
}
