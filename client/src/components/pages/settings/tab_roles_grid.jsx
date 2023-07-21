import { useQuery } from "react-query";
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import USER from "../../../api/user";
import { Box, Button, Chip, Dialog, DialogContent, DialogTitle } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddRolesForm from "./add/roles";

const TabRolesGrid = () => {
    const { data, error, isLoading, isError} = useQuery('roles', USER.getAllRoles);
    const [open, setOpen] = useState(false);

    if (isLoading) return <span>Loading.....</span>
    if (isError) return <span>Error: {error.message}</span>
    
    const columns = [{
        field: 'role',
        headerName: 'Role',
        flex: 1
    },{
        field: 'permissions',
        headerName: 'Permissions',
        flex: 2,
        renderCell: (params) => {
            const permissionArr = params.formattedValue;
            return (
                <>
                    {
                        permissionArr.map(item => 
                            <Chip label={item} variant="outlined" />
                        )
                    }
                </>
            )
        }
    },{
        headerName: 'Actions',
        flex: 1,
        renderCell: (params) => {
            return (
                <DeleteIcon>Delete</DeleteIcon>
            )
        }
    }];

    const handleClose = () => setOpen(false);

    const handleAddRole = () => setOpen(true);

    return(
        <Box height='75vh'>
            <Box textAlign={'right'}>
                <Button sx={{ fontSize:'small' }} onClick={handleAddRole}>
                    <AddIcon />Add roles
                </Button>
            </Box>
            {data && data.data &&
                <DataGrid
                    rows={data.data}
                    columns={columns}
                    getRowId={(row) => row._id}/>
            }

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Role</DialogTitle>
                <DialogContent>
                    <AddRolesForm handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default TabRolesGrid;