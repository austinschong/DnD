import React from 'react';
import { Grid, Loader, Header, Segment, Container, Card } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoField, AutoForm, ErrorsField, SubmitField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Characters } from '../../api/character/Character';

const bridge = new SimpleSchema2Bridge(Characters.schema);

/** Renders the Page for editing a single document. */
class EditChar extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { image, race, level, charclass, subclass, strength, dexterity, constitution, intelligence,
      charisma, wisdom, mainhand, offhand, notes, name, head, neck, back, arms, chest, hands, belt, ring1, ring2, owner, _id } = data;
    Characters.collection.update(_id, { $set: { image, race, level, charclass, subclass, strength, dexterity, constitution,
      intelligence, charisma, wisdom, mainhand, offhand, notes, name, head, neck, back, arms, chest, hands, belt, ring1,
      ring2, owner } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    console.log(this.props.doc);
    return (
      <Grid id='edit-character-page' container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Character</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <div className="Character Sheet">
                <Container>
                  <Segment>
                    <Grid celled='internally'>
                      <Grid.Column width={5}>
                        <Segment>DICE ROLL FUNCTION</Segment>
                        <Card fluid>
                          <AutoField name='image' />
                        </Card>
                      </Grid.Column>
                      <Grid.Column width={11}>
                        <Grid>
                          <Grid.Column width={6}>
                            <Card>
                              <Card.Content>
                                <Card.Header><AutoField name='race' /></Card.Header>
                                <Card.Header><AutoField name='level' decimal={false} /></Card.Header>
                                <Card.Header><AutoField name='charclass' /></Card.Header>
                                <Card.Header><AutoField name='subclass' /></Card.Header>
                              </Card.Content>
                            </Card>
                            <Grid>
                              <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><AutoField name='strength' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><AutoField name='dexterity' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><AutoField name='constitution' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><AutoField name='intelligence' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><AutoField name='charisma' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><AutoField name='wisdom' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                            <Card>
                              <Card.Content>
                                <Card.Header><AutoField name='mainhand' /></Card.Header>
                              </Card.Content>
                            </Card>
                            <Card>
                              <Card.Content>
                                <Card.Header><AutoField name='offhand' /></Card.Header>
                              </Card.Content>
                            </Card>
                            <Card>
                              <Card.Content>
                                <Card.Description><AutoField name='notes' /></Card.Description>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column width={10}>
                            <Card fluid>
                              <Card.Content>
                                <Card.Header textAlign='center'><AutoField name='name' /></Card.Header>
                              </Card.Content>
                            </Card>
                            <Segment>
                              <Header size='medium' textAlign='center'>Equipment</Header>
                              <Grid>
                                <Grid.Row columns={1}>
                                  <Grid.Column>
                                    <Card centered>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='head' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='neck' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='back' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='arms' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='chest' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='hands' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='belt' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='ring1' v/></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><AutoField name='ring2' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                              </Grid>
                            </Segment>
                          </Grid.Column>
                        </Grid>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                </Container>
              </div>
            </Segment>
            <AutoField name='owner' />
            <ErrorsField/>
            <SubmitField value='Submit'/>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Character document in the props object. Uniforms adds 'model' to the props, which we use.
EditChar.propTypes = {
  doc: PropTypes.object.isRequired,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Character documents.
  const subscription = Meteor.subscribe(Characters.userPublicationName);
  return {
    doc: Characters.collection.findOne(documentId), // Get the document
    ready: subscription.ready(),
  };
})(EditChar);
