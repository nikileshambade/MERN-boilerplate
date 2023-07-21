import { Alert, Box, Button, DialogActions, TextField } from "@mui/material"
import { useMutation } from "react-query"
import USER from "../../../../api/user"

const AddRolesForm = ({ handleClose }) => {
    const mutation = useMutation({
        mutationFn: (params) => USER.addRole(params),
        onSuccess: (data) => {
            if(!data.data.error) {
                handleClose();
            }
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        mutation.mutate({
            role: data.get('role'),
            permissions: data.get('permissions').split(',')
        });
    }

    return(
        <Box component="form" noValidate onSubmit={handleSubmit} width={'50vh'}>
            {mutation.data && mutation.data.data.error &&
                <Alert severity="error">{ mutation.data.data.error.message }</Alert>
            }
            <Box m={'1em 0'}>
                <TextField fullWidth label="Name" name="role"/>
            </Box>
            <Box m={'1em 0'}>
                <TextField fullWidth label="Permissions" name="permissions"/>
            </Box>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" disabled={mutation.isLoading}>Add</Button>
            </DialogActions>
        </Box>
    )
}

export default AddRolesForm