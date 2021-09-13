import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { CheckBoxOutlineBlankSharp, CheckBoxOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const SideBarMainItems = (
    <div>
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
    </div>
);
export default SideBarMainItems