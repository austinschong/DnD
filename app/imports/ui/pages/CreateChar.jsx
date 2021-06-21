import React from 'react';
import { Loader, Segment, Header } from 'semantic-ui-react';
import { AutoForm, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
// import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
// import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
// import { Stuffs } from '../../api/stuff/Stuff';
// import { Redirect } from 'react-router-dom';
import { Characters } from '../../api/character/Character';
import DescriptionStats from '../components/DescriptionStats';

// const bridge = new SimpleSchema2Bridge(formSchema);

class CreateChar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
  }

  // On submit, insert the data.
  submit(data) {
    const { name, image, race, level, subclass, strength, dexterity, constitution, intelligence, charisma,
      wisdom, head, neck, back, arms, chest, hands, belt, ring1, ring2, mainhand, offhand, notes, _id } = data;
    Characters.collection.update(_id, { $set: { name, image, race, level, subclass, strength, dexterity, constitution, intelligence, charisma,
      wisdom, head, neck, back, arms, chest, hands, belt, ring1, ring2, mainhand, offhand, notes } },
    (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <div id="Characters-page">
        <Header as="h2" textAlign="center">Characters</Header>
        <AutoForm schema={Characters} onSubmit={data => this.submit(data)} model={this.props.doc}>
          <Segment.Group centered>{this.props.characters.map((characters, index) => <DescriptionStats
            key={index}
            character={characters}/>)}
          </Segment.Group>
          <SubmitField className='editProfileButton' value='Submit'/>
        </AutoForm>

      </div>
    );
  }
}

CreateChar.propTypes = {
  doc: PropTypes.object,
  characters: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

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
})(CreateChar);
