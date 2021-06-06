import React from 'react';
import { Grid, Icon, Button, Container, List, Header, Segment, Reveal, Divider, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className="landing-background">
        <Container className='landingPage' style={{
          backgroundColor: 'white' }}>
          <Header className='landingPage' textAlign='center' as={'h1'} style={{
            paddingTop: '10px', fontSize: '30px' }}>
              Welcome to Create & Play! Our apllicaiton helps you set up and store your personal characters
          easily and fast!</Header>
          <Grid verticalalign='middle'>
            <Grid.Row columns={3}>
              <Grid.Column verticalalign='middle'>
                <Reveal animated='move' instant>
                  <Reveal.Content visible>
                    <Image size='small' fluid src="image.png"/>
                  </Reveal.Content>
                  <Reveal.Content hidden verticalalign='middle'>
                    <br/>
                    <br/>
                    <br/>
                    <Header className='landingPage' textAlign='center' as={'h1'}>
                        Set up your character now!
                      <Divider hidden/>
                      <Button className='whtBtn' as={Link} to="/signin" animated size="large">
                        <Button.Content visible>Sign-Up!</Button.Content>
                        <Button.Content hidden>
                          <Icon className='iWht' name='arrow right'/>
                        </Button.Content>
                      </Button>
                    </Header>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <List as='h2' size='large'>
                  <br/><br/><br/>
                  <List.Item>
                    <Icon name='user'/> Get started on creating your D&D character and get playing!
                  </List.Item>
                  <br/>
                  <List.Item>
                    <Icon name='edit'/> Customize and update your character as you play!
                  </List.Item>
                  <br/>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Reveal animated='move right' instant>
                  <Reveal.Content visible>
                    <Image fluid src='/images/mim.png'/>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Header className='landingPage' textAlign='center' as={'h1'}>
                        Manage your characters from anywhere!
                      <Divider hidden/>
                      <Button className='whtBtn' as={Link} to="/login" animated size="large">
                        <Button.Content visible>Log-In!</Button.Content>
                        <Button.Content hidden>
                          <Icon className='iWht' name='arrow right'/>
                        </Button.Content>
                      </Button>
                    </Header>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header className='landingPage' textAlign='center' as={'h1'}>
              Start making your life easier with Create & Play </Header>
          <Image src='/images/icon.png' size='small' centered/>
          <Container className='landing_bottom_image'>
            <Segment basic floated='right' compact textAlign='center'>
              <Button className='whtBtn' as={Link} to="/signin" animated size="large">
                <Button.Content visible>Join Now</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right'/>
                </Button.Content>
              </Button>
            </Segment>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Landing;
