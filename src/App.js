import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import './App.css';

import Catalog from 'components/catalog/Catalog';
import Menu from 'components/Menu';

const routes = {
  '/': {
    title: 'Catalog',
    component: Catalog
  },
  '/cat': {
    title: 'Catalog',
    component: Catalog
  }
};

const Title = (text) => {
  return (
    <Typography variant="title" color="inherit">
      {text}
    </Typography>
  )
};

class App extends Component {
  state = {
    menu: false
  };

  toggleMenu() {
    this.setState({'menu': !this.state.menu})
  }

  render() {
    return (
      <div>
        <header>
          <AppBar position="fixed" color="default">
            <Toolbar>
              {/*<IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu.bind(this)}>*/}
                {/*<MenuIcon />*/}
              {/*</IconButton>*/}
              {/*{Object.keys(routes).map( (path, idx) =>*/}
                {/*<Route key={idx} exact path={path} component={Title(routes[path].title)}/>*/}
              {/*)}*/}
            </Toolbar>
          </AppBar>
          {/*<Menu active={this.state.menu} toggleMenu={this.toggleMenu.bind(this)}>*/}
            {/*<Route exact path="/" component={Catalog} />*/}
          {/*</Menu>*/}
        </header>
        <main>
          {Object.keys(routes).map( (path, idx) =>
            <Route key={idx} exact path={path} component={routes[path].component} />
          )}
          {/*<Route exact path="/about-us" component={About} />*/}
        </main>
      </div>
    );
  }
}

export default App;
