import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Characters } from '../../api/character/Character';
import DescriptionStats from '../components/DescriptionStats';

/** Renders a table containing all of the Stuff documents. Use <DescriptionStats> to render each row. */
class CharacterPage extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <div id="Characters-page">
        <Header as="h2" textAlign="center">Characters</Header>
        <Segment.Group centered>{this.props.characters.map((characters, index) => <DescriptionStats
          key={index}
          character={characters}/>)}
        </Segment.Group>
      </div>
    );
  }
}

// Require an array of Stuff documents in the props.
CharacterPage.propTypes = {
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
})(CharacterPage);
