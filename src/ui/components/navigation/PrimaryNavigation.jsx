
import React, { Component } from 'react';

import Button from '../../elements/form/Button';

class PrimaryNavigation extends Component {
  render() {
    return (
      <div className="primary-navigation">
        <Button>Home</Button>
        <Button>Downloads</Button>
        <Button>Contant</Button>
      </div>
    );
  }
}

export default PrimaryNavigation;
