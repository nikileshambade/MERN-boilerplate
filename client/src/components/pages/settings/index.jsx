import { useState } from 'react';
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import TabUserGrid from "./tab_user_grid";
import TabRolesGrid from './tab_roles_grid';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
  }

const Settings = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <>
            <Typography mb={'1em'} variant='h6' >Settings</Typography>
            <Divider></Divider>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                width={'100%'}
            >
                
                <Box flex={1} alignItems='flex-start'>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Users" sx={{ alignItems: 'end' }} />
                        <Tab label="User roles" sx={{ alignItems: 'end' }} />
                    </Tabs>
                </Box>
                <Box flex={6}>
                    <TabPanel value={value} index={0}>
                        <TabUserGrid />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TabRolesGrid ></TabRolesGrid>
                    </TabPanel>
                </Box>
            </Box>
        </>
    )
}

export default Settings;