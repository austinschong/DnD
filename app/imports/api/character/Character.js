import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The CharactersCollection. It encapsulates state and variable values for character.
 */
class CharactersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CharactersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      image: URL,
      race: {
        type: String,
        allowedValues: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
        defaultValue: 'Human',
      },
      level: Number,
      class: {
        type: String,
        allowedValues: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
        defaultValue: 'Barbarian',
      },
      subclass: String,
      strength: Number,
      dexterity: Number,
      constitution: Number,
      intelligence: Number,
      charisma: Number,
      wisdom: Number,
      head: String,
      neck: String,
      back: String,
      arms: String,
      chest: String,
      hands: String,
      belt: String,
      ring1: String,
      ring2: String,
      mainhand: String,
      offhand: String,
      notes: String,
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CharactersCollection.
 * @type {CharactersCollection}
 */
export const Characters = new CharactersCollection();
