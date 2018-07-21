import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

// import './Catalog.css';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg',
    title: 'Image',
    author: 'author',
  },
];


class Catalog extends Component {
  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={300} cellWidth={300} className={classes.gridList} cols={4}>
          {/*<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>*/}
            {/*<ListSubheader component="div">December</ListSubheader>*/}
          {/*</GridListTile>*/}
          {tileData.map((tile, idx) => (
            <GridListTile key={idx}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default withStyles(styles)(Catalog);