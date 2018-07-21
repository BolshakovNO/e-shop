import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import Expand from './Expand';
import Bool from './Bool';
import { dictPop } from 'common/scripts/utils';


import './Filters.css';

const filter_types = {
  NESTED: 'nested'
}

const data = [
  {
    name: 'filter 1',
    type: filter_types.NESTED,
    multi: true,
    children: [
      {name: 'filter child 1', enabled: false},
      {name: 'filter child 2', enabled: true},
      {name: 'filter child 3', enabled: false},
    ]
  },
];

class Filters extends Component {
  getFilterComponent(props) {
    const type = props.pop('type');
    switch(type) {
      case filter_types.NESTED:
        return <Expand {...props}/>;
      default:
        return <Bool {...props}/>;
    }
  }

  render() {
    return (
      <Paper className={classes.root} elevation={1}>
        <List component="nav">
          { data.map( (filter) => this.getFilterComponent() ) }
        </List>
        {/*<Typography variant="headline" component="h3">*/}
          {/*This is a sheet of paper.*/}
        {/*</Typography>*/}
        {/*<Typography component="p">*/}
          {/*Paper can be used to build surface or other elements for your application.*/}
        {/*</Typography>*/}
      </Paper>
    )
  }
}

export default Filters;