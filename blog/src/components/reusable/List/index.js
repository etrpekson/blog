import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Dashboard from '@material-ui/icons/Dashboard';
import Comment from '@material-ui/icons/Comment';
import EventNote from '@material-ui/icons/EventNote';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { Link } from 'react-router-dom';

export const listItems = (
  <div>
               
    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText>
          Dashboard
        </ListItemText>
      </ListItem>
    </Link>
        
    <Link to='/posts' style={{textDecoration: 'none', color: 'white'}}>
      <ListItem button>
        <ListItemIcon>
          <EventNote />
        </ListItemIcon>
        <ListItemText>
          Posts
        </ListItemText>
      </ListItem>
    </Link>

    <Link to='/media' style={{textDecoration: 'none', color: 'white'}}>
      <ListItem button>
        <ListItemIcon>
          <PhotoCamera />
        </ListItemIcon>
        <ListItemText>
          Media
        </ListItemText>
      </ListItem>
    </Link>

    <Link to='/comments' style={{textDecoration: 'none', color: 'white'}}>
      <ListItem button>
        <ListItemIcon>
          <Comment />
        </ListItemIcon>
        <ListItemText>
          Comments
        </ListItemText>
      </ListItem>
    </Link>
  </div>
);

