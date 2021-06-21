import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Characters } from '../../api/character/Character';
import DescriptionCards from '../components/DescriptionCards';

/** Renders a table containing all of the Stuff documents. Use <DescriptionCards> to render each row. */
class CharacterMenu extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Character Menu</Header>
        <Card.Group centered>{this.props.characters.map((characters, index) => <DescriptionCards
          key={index}
          character={characters}/>)}
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
CharacterMenu.propTypes = {
  characters: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Characters.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const characters = Characters.collection.find({}).fetch();
  return {
    characters,
    ready,
  };
})(CharacterMenu);
