import React from 'react';
import { Container, Grid, Segment, Card, Image, Header } from 'semantic-ui-react';

/** Renders a single row in the List Stuff table. S. */
class DescriptionStats extends React.Component {
  render() {
    return (
      <div className="Character Sheet">
        <Container>
          <Grid celled='internally'>
            <Grid.Column width={5}>
              <Segment>DICE ROLL FUNCTION</Segment>
              <Card fluid>
                <Image large src='../images/Mim.png' alt='Mim' wrapped ui={false}/>
              </Card>
            </Grid.Column>
            <Grid.Column width={11}>
              <Grid>
                <Grid.Column width={6}>
                  <Card>
                    <Card.Content>
                      <Card.Meta>RACE:</Card.Meta>
                      <Card.Header>Lorem</Card.Header>
                      <Card.Meta>LEVEL:</Card.Meta>
                      <Card.Header>0</Card.Header>
                      <Card.Meta>CLASS/SUBCLASS:</Card.Meta>
                      <Card.Header>Ipsum</Card.Header>
                    </Card.Content>
                  </Card>
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Card>
                          <Card.Content>
                            <Card.Meta>STR.</Card.Meta>
                            <Card.Header>00</Card.Header>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                        <Card>
                          <Card.Content>
                            <Card.Meta>DEX.</Card.Meta>
                            <Card.Header>00</Card.Header>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Card>
                          <Card.Content>
                            <Card.Meta>CON.</Card.Meta>
                            <Card.Header>00</Card.Header>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                        <Card>
                          <Card.Content>
                            <Card.Meta>INT.</Card.Meta>
                            <Card.Header>00</Card.Header>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Card>
                          <Card.Content>
                            <Card.Meta>CHA.</Card.Meta>
                            <Card.Header>00</Card.Header>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                        <Card>
                          <Card.Content>
                            <Card.Meta>WIS.</Card.Meta>
                            <Card.Header>00</Card.Header>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Card>
                    <Card.Content>
                      <Card.Meta>MAIN ATTACK:</Card.Meta>
                      <Card.Header>Lorem</Card.Header>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Meta>OFF HAND ATTACK:</Card.Meta>
                      <Card.Header>Ipsum</Card.Header>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Meta>NOTES:</Card.Meta>
                      <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est nisl, sodales vitae dui at, euismod ultricies nunc. Vivamus rutrum sapien et maximus egestas. Morbi varius
                        elit lorem, at vehicula erat feugiat eget. Nulla ultrices nunc nec est tempor bibendum convallis eget odio.</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Card fluid>
                    <Card.Content>
                      <Card.Header textAlign='center'>LOREM IPSUM DOLOR</Card.Header>
                    </Card.Content>
                  </Card>
                  <Segment>
                    <Header size='medium' textAlign='center'>Equipment</Header>
                    <Grid>
                      <Grid.Row columns={1}>
                        <Grid.Column>
                          <Card fluid>
                            <Card.Content>
                              <Card.Meta textAlign='center'>HEAD</Card.Meta>
                              <Card.Header textAlign='center'>Lorem</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>NECK</Card.Meta>
                              <Card.Header>Ipsum</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>BACK</Card.Meta>
                              <Card.Header>Dolor</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>ARMS</Card.Meta>
                              <Card.Header>Ipsum</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>CHEST</Card.Meta>
                              <Card.Header>Dolor</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>HANDS</Card.Meta>
                              <Card.Header>Ipsum</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>BELT</Card.Meta>
                              <Card.Header>Dolor</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>RING 1</Card.Meta>
                              <Card.Header>Ipsum</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>RING 2</Card.Meta>
                              <Card.Header>Dolor</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>MAIN HAND</Card.Meta>
                              <Card.Header>Ipsum</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Meta>OFF HAND</Card.Meta>
                              <Card.Header>Dolor</Card.Header>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={1}>
                        <Grid.Column>
                          <Card fluid>
                            <Card.Content>
                              <Card.Meta textAlign='center'>ARROWS BOLTS</Card.Meta>
                              <Card.Header textAlign='center'>SIT AMET</Card.Header>
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
        </Container>
      </div>
    );
  }
}

export default DescriptionStats;
