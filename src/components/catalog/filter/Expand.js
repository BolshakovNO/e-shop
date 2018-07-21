import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


import './Expand.css';

class Expand extends Component {
  state = {
    open: false
  };

  handleClick() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <ListItem button onClick={this.handleClick.bind(this)}>
        <ListItemText inset primary={this.props.text} />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    )
  }
}

export default Expand;