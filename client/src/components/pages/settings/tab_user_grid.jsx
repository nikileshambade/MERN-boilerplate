import { useQuery } from "react-query";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';

import USER from "../../../api/user";
import { Box, Button } from "@mui/material";

const TabUserGrid = () => {
    const { data, error, isLoading, isError} = useQuery('users', USER.getAllUser);

    if (isLoading) return <span>Loading.....</span>
    if (isError) return <span>Error: {error.message}</span>
    
    const columns = [{
        field: 'firstName',
        headerName: 'First Name',
        flex: 1
    },{
        field: 'lastName',
        headerName: 'Last Name',
        flex: 1
    },{
        field: 'emailId',
        headerName: 'Email',
        flex: 1
    }]

    return(
        <Box height='75vh'>
            <Box textAlign={'right'}>
                <Button sx={{ fontSize:'small' }}>
                    <AddIcon />Add user
                </Button>
            </Box>
            {data && data.data &&
                <DataGrid 
                    rows={data.data}
                    columns={columns}
                    getRowId={(row) => row._id}/>
            }
        </Box>
    )
}

export default TabUserGrid;