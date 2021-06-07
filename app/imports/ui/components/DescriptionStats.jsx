import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class DescriptionStats extends React.Component {
  render() {
    return (
      <div className="Character Sheet">
        <Container>
          <Card>
            <Image large src='../images/Mim.png' alt='Mim' wrapped ui={false}/>
            <Card.Content>
              <Card.Header>Name: Awesome Chest</Card.Header>
              <Card.Meta>Race: Dwarf</Card.Meta>
              <Card.Meta>Level: 1</Card.Meta>
              <Card.Meta>Class: Monk</Card.Meta>
              <Card.Meta>Subclass: 1</Card.Meta>
              <Card.Meta>Quantity: 1</Card.Meta>
              <Card.Meta>Strength: 1</Card.Meta>
              <Card.Meta>Dexterity: 1</Card.Meta>
              <Card.Meta>Constitution: 1</Card.Meta>
              <Card.Meta>Intelligence: 1</Card.Meta>
              <Card.Meta>Charisma: 1</Card.Meta>
              <Card.Meta>Head: Hat</Card.Meta>
              <Card.Meta>Neck: Keyhole</Card.Meta>
              <Card.Meta>Back: Wood</Card.Meta>
              <Card.Meta>Arms: Gold</Card.Meta>
              <Card.Meta>Hands: Coins</Card.Meta>
              <Card.Meta>Belt: Blue</Card.Meta>
              <Card.Meta>Ring1: Skull</Card.Meta>
              <Card.Meta>Ring2: Mushroom</Card.Meta>
              <Card.Meta>Mainhand: Sword</Card.Meta>
              <Card.Meta>Offhand: Tongue</Card.Meta>
              <Card.Meta>Notes: Awesome</Card.Meta>
              <Card.Meta>Owner: Someone</Card.Meta>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}

export default DescriptionStats;
