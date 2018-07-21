import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <Drawer open={this.props.active} onClose={this.props.toggleMenu}>
        {this.props.children}
      </Drawer>
    )
  }
}

export default Menu;