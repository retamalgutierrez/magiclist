
import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import Componente from './componente.jsx';
import Layout from './layout.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Componente />)
    });
  }
});
