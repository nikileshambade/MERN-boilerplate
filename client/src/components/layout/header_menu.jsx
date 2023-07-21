import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = [{
    name: 'Dashboard',
    to: '/dashboard'
}];

const HeaderMenu = () => {
    return(
        <>
            {
                pages.map((page, index) => (
                    <Button
                        key={page + '_' + index}
                        LinkComponent={NavLink}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        to={page.to}
                    >
                        {page.name}
                    </Button>
                ))
            }
        </>
    )
}

export default HeaderMenu;