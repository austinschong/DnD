import React from 'react';
import { Grid, Loader, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
// import { Stuffs } from '../../api/stuff/Stuff';
import { Redirect } from 'react-router-dom';
import { Characters } from '../../api/character/Character';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  quantity: Number,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class CreateChar extends React.Component {

  // On submit, insert the data.
  submit(data) {
    const { name, image, race, level, subclass, strength, dexterity, constitution, intelligence, charisma,
      wisdom, head, neck, back, arms, chest, hands, belt, ring1, ring2, mainhand, offhand, notes, _id } = data;
    Characters.update(_id, { $set: { name, image, race, level, subclass, strength, dexterity, constitution, intelligence, charisma,
      wisdom, head, neck, back, arms, chest, hands, belt, ring1, ring2, mainhand, offhand, notes } },
    (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    const { from } = this.props.location.state || { from: { pathname: /createchar/ } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    } return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Character Creation</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='name'/>
              <NumField name='quantity' decimal={false}/>
              <SelectField name='condition'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}
CreateChar.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
  location: PropTypes.object,
  profiles: PropTypes.array.isRequired,
};

export default CreateChar;
