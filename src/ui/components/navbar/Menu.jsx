import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Create, ExpandLess, ExpandMore, Group, Home, PrecisionManufacturing, Settings, StarBorder, Task } from "@mui/icons-material"
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export const Menu = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>

            <ListItemButton onClick={() => { navigate(`/tracker/home`) }}>
                <ListItemIcon sx={{ color: 'secondary.light' }}>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton onClick={() => { navigate(`/tracker/task`) }}>
                <ListItemIcon sx={{ color: 'secondary.light' }}>
                    <Task />
                </ListItemIcon>
                <ListItemText primary="Tasks" />
            </ListItemButton>
            <ListItemButton onClick={() => { navigate(`/tracker/user`) }}>
                <ListItemIcon sx={{ color: 'secondary.light' }}>
                    <Group />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{ color: 'secondary.light' }}>
                    <Create />
                </ListItemIcon>
                <ListItemText primary="ABMs" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{ color: 'secondary.light' }}>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={() => { navigate(`/tracker/updatemantis`) }}>
                <ListItemIcon sx={{ color: 'secondary.light' }}>
                    <PrecisionManufacturing />
                </ListItemIcon>
                <ListItemText primary="Update Data Mantis" />
            </ListItemButton>
            <ListItemButton onClick={() => { navigate(`/tracker/settings`) }}>
                <ListItemIcon sx={{ color: 'secondary.light' }}>
                    <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </>
    )
}
