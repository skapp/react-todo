import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CheckBoxOutlined } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBarMainItems = () => (
    <List>
        <ListItem component={Link} to="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/todo">
            <ListItemIcon>
                <CheckBoxOutlined />
            </ListItemIcon>
            <ListItemText primary="ToDo" />
        </ListItem>
    </List>
);
export default SideBarMainItems