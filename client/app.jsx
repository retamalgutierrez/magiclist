
import React from 'react';

import {Navbar} from './navbar.jsx';

// define and export our Layout component
export const Layout = ({content}) => (
    //<Navbar />
    <div>
        <div>{content}</div>
    </div>
);


// Task component - represents a single todo item
export default class Welcome extends React.Component {
  render() {
    return (
      <div>Hola a todos</div>
    );
  }
}
