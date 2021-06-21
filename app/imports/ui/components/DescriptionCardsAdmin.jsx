import React from 'react';
import { Accordion, Card, Image, Icon, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class DescriptionCardsAdmin extends React.Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const CharacterInfo = this.props.character;
    const { activeIndex } = this.state;
    return (
      <Card>
        <Image src={CharacterInfo.image}/>
        <Card.Content>
          <Card.Header>{CharacterInfo.name}</Card.Header>
          <Card.Meta>Race: {CharacterInfo.race}</Card.Meta>
          <Card.Meta>Level: {CharacterInfo.level}</Card.Meta>
          <Card.Meta>Class: {CharacterInfo.class}</Card.Meta>
          <Card.Meta>Subclass: {CharacterInfo.subclass}</Card.Meta>
          <Card.Description>{CharacterInfo.notes}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown'/>
              More
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <List>
                <List.Item>Strength: {CharacterInfo.strength}</List.Item>
                <List.Item>Dexterity: {CharacterInfo.dexterity}</List.Item>
                <List.Item>Constitution: {CharacterInfo.constitution}</List.Item>
                <List.Item>Intelligence: {CharacterInfo.intelligence}</List.Item>
                <List.Item>Charisma: {CharacterInfo.charisma}</List.Item>
                <List.Item>Wisdom: {CharacterInfo.wisdom}</List.Item>
                <List.Item>Head: {CharacterInfo.head}</List.Item>
                <List.Item>Neck: {CharacterInfo.neck}</List.Item>
                <List.Item>Back: {CharacterInfo.back}</List.Item>
                <List.Item>Arms: {CharacterInfo.arms}</List.Item>
                <List.Item>Chest: {CharacterInfo.chest}</List.Item>
                <List.Item>Hands: {CharacterInfo.hands}</List.Item>
                <List.Item>Belt: {CharacterInfo.belt}</List.Item>
                <List.Item>Ring1: {CharacterInfo.ring1}</List.Item>
                <List.Item>Ring2: {CharacterInfo.ring2}</List.Item>
                <List.Item>Mainhand: {CharacterInfo.mainhand}</List.Item>
                <List.Item>Offhand: {CharacterInfo.offhand}</List.Item>
              </List>
            </Accordion.Content>
          </Accordion>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>Owner: {CharacterInfo.owner}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
DescriptionCardsAdmin.propTypes = {
  character: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default DescriptionCardsAdmin;
