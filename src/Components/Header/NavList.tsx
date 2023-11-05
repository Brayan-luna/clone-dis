import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { NavLiksProps } from '../../util/Interface';
import { NavLink } from "react-router-dom";

export const NavList = ({ArrNavLinks}:NavLiksProps) => {
  return (
    <Box sx={{width:250, bgcolor:"#ffff"}}>
        <nav>
            <List>
                {
                    ArrNavLinks.map(({title, path})=> (
                        <ListItem key={title}>
                            <ListItemButton component={NavLink} to={path} >
                                <ListItemText>
                                    {title}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </nav>
    </Box>
  )
}
