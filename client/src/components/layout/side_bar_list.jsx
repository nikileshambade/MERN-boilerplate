import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import AssessmentIcon from '@mui/icons-material/Assessment';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PersonIcon from '@mui/icons-material/Person';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { NavLink } from "react-router-dom";

const list = {
    main: [{
        name: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/dashboard'
    },{
        name: 'Orders',
        icon: <ShoppingCartIcon />,
        path: '/orders'
    },{
        name: 'Payments',
        icon: <PaymentsIcon />,
        path: '/payments'
    },{
        name: 'Reports',
        icon: <AssessmentIcon />,
        path: '/reports'
    }],
    subList: [{
        name: 'Vendors',
        icon: <PeopleIcon />,
        path: '/vendor'
    },{
        name: 'Fleek',
        icon: <IntegrationInstructionsIcon />,
        path: '/vendor'
    },{
        name: 'Customers',
        icon: <CardTravelIcon />,
        path: '/vendor'
    }]
}

const SideBarListMenu = () => {
    return(
        <>
            <List>
                {list.main.map((item, index) => (
                    <ListItem key={item.name + '_' + index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <ListSubheader component="div" inset>Manage</ListSubheader>
            <List>
                {list.subList.map((item, index) => (
                    <ListItem key={item.name + '_' + index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText component={NavLink} to={item.path} primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default SideBarListMenu;