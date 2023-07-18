import { useQuery } from "react-query";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

import USER from "../../../api/user";

const UserPage = () => {
    const { data, error, isLoading, isError} = useQuery('users', USER.getAllUser);

    if (isLoading) return <span>Loading.....</span>
    if (isError) return <span>Error: {error.message}</span>

    if(data) {
        console.log(data);
    }

    const columns = [{
        id: 'firstName',
        label: 'First Name'
    },{
        id: 'lastName',
        label: 'Last Name'
    },{
        id: 'emailId',
        label: 'Email'
    }]

    return(
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.data &&
                            data.data.map((item, index) =>
                                <TableRow key={'row_'+ index}>
                                    {
                                        columns.map((column, index) =>
                                            <TableCell key={'value_'+ index}>
                                                {item[column.id]}
                                            </TableCell>
                                        )
                                    }
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={15}
                rowsPerPage={10}
                page={1}
                onPageChange={(details) => console.log(details)}
            />
        </Paper>
    )
}

export default UserPage;