import React from 'react';
import { Header } from 'semantic-ui-react';
import DescriptionStats from '../components/DescriptionStats';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Characters extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (
      <div id="Characters-page">
        <Header as="h2" textAlign="center">Characters</Header>
        <DescriptionStats/>
      </div>
    );
  }
}

export default Characters;
