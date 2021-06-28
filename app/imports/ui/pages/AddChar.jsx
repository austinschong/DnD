import React from 'react';
import { Grid, Header, Segment, Container, Card } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Characters } from '../../api/character/Character';

const bridge = new SimpleSchema2Bridge(Characters.schema);

/** Renders the Page for editing a single document. */
class AddChar extends React.Component {

  // On successful submit, insert the data.
  submit(data, formRef) {
    const { image, race, level, charclass, subclass, strength, dexterity, constitution,
      intelligence, charisma, wisdom, mainhand, offhand, notes, name, head, neck, back, arms, chest, hands, belt, ring1,
      ring2 } = data;
    const owner = Meteor.user().username;
    Characters.collection.insert({ image, race, level, charclass, subclass, strength, dexterity, constitution,
      intelligence, charisma, wisdom, mainhand, offhand, notes, name, head, neck, back, arms, chest, hands, belt, ring1,
      ring2, owner }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Item added successfully', 'success');
        formRef.reset();
      }
    });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid id='edit-character-page' container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Create Character</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <div className="Character Sheet">
                <Container>
                  <Segment>
                    <Grid celled='internally'>
                      <Grid.Column width={5}>
                        <Card fluid>
                          <TextField name='image'/>
                        </Card>
                      </Grid.Column>
                      <Grid.Column width={11}>
                        <Grid>
                          <Grid.Column width={6}>
                            <Card>
                              <Card.Content>
                                <Card.Header><SelectField name='race' /></Card.Header>
                                <Card.Header><NumField name='level' decimal={false} /></Card.Header>
                                <Card.Header><SelectField name='charclass' /></Card.Header>
                                <Card.Header><TextField name='subclass' /></Card.Header>
                              </Card.Content>
                            </Card>
                            <Grid>
                              <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><NumField name='strength' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><NumField name='dexterity' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><NumField name='constitution' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><NumField name='intelligence' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><NumField name='charisma' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                                <Grid.Column>
                                  <Card>
                                    <Card.Content>
                                      <Card.Header><NumField name='wisdom' decimal={false} /></Card.Header>
                                    </Card.Content>
                                  </Card>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                            <Card>
                              <Card.Content>
                                <Card.Header><TextField name='mainhand'/></Card.Header>
                              </Card.Content>
                            </Card>
                            <Card>
                              <Card.Content>
                                <Card.Header><TextField name='offhand'/></Card.Header>
                              </Card.Content>
                            </Card>
                            <Card>
                              <Card.Content>
                                <Card.Description><TextField name='notes' decimal={false} /></Card.Description>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column width={10}>
                            <Card fluid>
                              <Card.Content>
                                <Card.Header textAlign='center'><TextField name='name' /></Card.Header>
                              </Card.Content>
                            </Card>
                            <Segment>
                              <Header size='medium' textAlign='center'>Equipment</Header>
                              <Grid>
                                <Grid.Row columns={1}>
                                  <Grid.Column>
                                    <Card centered>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='head' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='neck' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='back' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='arms' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='chest' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='hands' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='belt' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='ring1' /></Card.Header>
                                      </Card.Content>
                                    </Card>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Card>
                                      <Card.Content>
                                        <Card.Header textAlign='center'><TextField name='ring2' /></Card.Header>
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
            <HiddenField name='owner' value={Meteor.user().username} />
            <ErrorsField/>
            <SubmitField value='Submit'/>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default AddChar;
