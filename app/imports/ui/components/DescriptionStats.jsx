import React from 'react';
import { Container, Grid, Segment, Card, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. S. */
class DescriptionStats extends React.Component {
  render() {
    const CharStatsInfo = this.props.charstats;
    return (
      <div className="Character Sheet">
        <Container>
          <Segment>
            <Grid celled='internally'>
              <Grid.Column width={5}>
                <Segment>DICE ROLL FUNCTION</Segment>
                <Card fluid>
                  <Image large src={CharStatsInfo.image} alt='Mim' wrapped ui={false}/>
                </Card>
              </Grid.Column>
              <Grid.Column width={11}>
                <Grid>
                  <Grid.Column width={6}>
                    <Card>
                      <Card.Content>
                        <Card.Meta>RACE:</Card.Meta>
                        <Card.Header>{CharStatsInfo.race}</Card.Header>
                        <Card.Meta>LEVEL:</Card.Meta>
                        <Card.Header>{CharStatsInfo.level}</Card.Header>
                        <Card.Meta>CLASS:</Card.Meta>
                        <Card.Header>{CharStatsInfo.class}</Card.Header>
                        <Card.Meta>SUBCLASS:</Card.Meta>
                        <Card.Header>{CharStatsInfo.subclass}</Card.Header>
                      </Card.Content>
                    </Card>
                    <Grid>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>STR.</Card.Meta>
                              <Card.Header>{CharStatsInfo.strength}</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>DEX.</Card.Meta>
                              <Card.Header>{CharStatsInfo.dexterity}</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>CON.</Card.Meta>
                              <Card.Header>{CharStatsInfo.constitution}</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>INT.</Card.Meta>
                              <Card.Header>{CharStatsInfo.intelligence}</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>CHA.</Card.Meta>
                              <Card.Header>{CharStatsInfo.charisma}</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>WIS.</Card.Meta>
                              <Card.Header>{CharStatsInfo.wisdom}</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    <Card>
                      <Card.Content>
                        <Card.Meta>MAIN ATTACK:</Card.Meta>
                        <Card.Header>{CharStatsInfo.mainhand}</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content>
                        <Card.Meta>OFF HAND ATTACK:</Card.Meta>
                        <Card.Header>{CharStatsInfo.offhand}</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content>
                        <Card.Meta>NOTES:</Card.Meta>
                        <Card.Description>{CharStatsInfo.notes}</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Card fluid>
                      <Card.Content>
                        <Card.Header textAlign='center'>{CharStatsInfo.name}</Card.Header>
                      </Card.Content>
                    </Card>
                    <Segment>
                      <Header size='medium' textAlign='center'>Equipment</Header>
                      <Grid>
                        <Grid.Row columns={1}>
                          <Grid.Column>
                            <Card centered>
                              <Card.Content>
                                <Card.Meta textAlign='center'>HEAD</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.head}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>NECK</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.neck}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>BACK</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.back}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>ARMS</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.arms}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>CHEST</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.chest}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>HANDS</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.hands}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>BELT</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.belt}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>RING 1</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.ring1}</Card.Header>
                              </Card.Content>
                            </Card>
                          </Grid.Column>
                          <Grid.Column>
                            <Card>
                              <Card.Content>
                                <Card.Meta textAlign='center'>RING 2</Card.Meta>
                                <Card.Header textAlign='center'>{CharStatsInfo.ring2}</Card.Header>
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
    );
  }
}

// Require a document to be passed to this component.
DescriptionStats.propTypes = {
  charstats: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(DescriptionStats);
