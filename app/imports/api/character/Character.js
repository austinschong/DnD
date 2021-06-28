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
      image: String,
      race: {
        type: String,
        allowedValues: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
        defaultValue: 'Human',
      },
      level: Number,
      charclass: {
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
      mainhand: String,
      offhand: String,
      notes: String,
      name: String,
      head: String,
      neck: String,
      back: String,
      arms: String,
      chest: String,
      hands: String,
      belt: String,
      ring1: String,
      ring2: String,
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }

  define({ name, image, race, level, charclass, subclass, strength, dexterity, constitution, intelligence,
    charisma, wisdom, head, neck, back, arms, chest, hands, belt, ring1, ring2, mainhand, offhand, notes }) {
    const docID = this._collection.insert({
      name,
      image,
      race,
      level,
      charclass,
      subclass,
      strength,
      dexterity,
      constitution,
      intelligence,
      charisma,
      wisdom,
      head,
      neck,
      back,
      arms,
      chest,
      hands,
      belt,
      ring1,
      ring2,
      mainhand,
      offhand,
      notes,
    });
    return docID;
  }

  update(docID, { name, image, race, level, charclass, subclass, strength, dexterity, constitution, intelligence,
    charisma, wisdom, head, neck, back, arms, chest, hands, belt, ring1, ring2, mainhand, offhand, notes }) {
    const updateData = {};
    if (name) {
      updateData.name = name;
    }
    if (image) {
      updateData.image = image;
    }
    if (race) {
      updateData.race = race;
    }
    if (level) {
      updateData.level = level;
    }
    if (charclass) {
      updateData.charclass = charclass;
    }
    if (subclass) {
      updateData.subclass = subclass;
    }
    if (strength) {
      updateData.strength = strength;
    }
    if (dexterity) {
      updateData.dexterity = dexterity;
    }
    if (constitution) {
      updateData.constitution = constitution;
    }
    if (intelligence) {
      updateData.intelligence = intelligence;
    }
    if (charisma) {
      updateData.charisma = charisma;
    }
    if (wisdom) {
      updateData.wisdom = wisdom;
    }
    if (head) {
      updateData.head = head;
    }
    if (back) {
      updateData.back = back;
    }
    if (neck) {
      updateData.neck = neck;
    }
    if (arms) {
      updateData.arms = arms;
    }
    if (chest) {
      updateData.chest = chest;
    }
    if (hands) {
      updateData.hands = hands;
    }
    if (belt) {
      updateData.belt = belt;
    }
    if (ring1) {
      updateData.ring1 = ring1;
    }
    if (ring2) {
      updateData.ring2 = ring2;
    }
    if (mainhand) {
      updateData.mainhand = mainhand;
    }
    if (offhand) {
      updateData.offhand = offhand;
    }
    if (notes) {
      updateData.notes = notes;
    }
    this._collection.update(docID, { $set: updateData });
  }
}

/**
 * The singleton instance of the CharactersCollection.
 * @type {CharactersCollection}
 */
export const Characters = new CharactersCollection();
