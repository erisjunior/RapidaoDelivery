import React from 'react';

import { isSignedIn } from "./src/services/auth";
import { createRootNavigator } from './src/routes';
import { fontConfig } from './src/config/FontConfig';

import './src/config/StatusBarConfig';

export default class App extends React.Component {

  state = {
    signed: false,
    signLoaded: false,
    fontLoaded: false,
  };

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signed: res, signLoaded: true }))
      .catch(err => alert("Erro"));
  }

  async componentDidMount() {
    await fontConfig();
    this.setState({fontLoaded: true})
  }

  render() {

    const { signLoaded, fontLoaded, signed } = this.state;

    if (!signLoaded || !fontLoaded) {
      return null;
    }

    const Layout = createRootNavigator(signed);
    return <Layout />;
  }
}