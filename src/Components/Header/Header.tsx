import { Menu } from "@mui/icons-material"
import { AppBar, Box, Button, Container, Drawer, IconButton, Typography } from "@mui/material"
import { useState } from "react"
import { NavLiksProps } from "../../util/Interface"
import { NavList } from "./NavList"
import { NavLink } from "react-router-dom"
import './StyleHeader.css';


export const Header = ({ArrNavLinks}:NavLiksProps) => {

    const [open, setOpen] = useState<boolean>(false)

  return (
    <>
        <AppBar position="static" className="AppBar">

            <IconButton component={NavLink} to="/" sx={{color:"white", gap:"10px"}} >
                <i className="fa-brands fa-discord fa-lg"></i>
                <Typography>Discord</Typography>
            </IconButton>

            <Container sx={{ width: 'auto', margin:"0px"}}>
                <Box className="containerLinks">
                    {
                        ArrNavLinks.map( ({title, path})=>(
                            <Button
                                component={NavLink}
                                to={path} color="inherit"
                                key={title}
                                sx={{textTransform: "none",}}
                            >
                                {title}
                            </Button>
                        ))
                    }
                </Box>
            </Container>

            <Container className="containerBtnLoginMenu" >
                <Button sx={{
                    color:"black",
                    backgroundColor:"white",
                    borderRadius:"50px",
                    textTransform: "none",
                    '&:hover':{ backgroundColor:"rgb(129 140 248)" }
                }} >Login</Button>

                <IconButton
                    onClick={() => setOpen(true)}
                    color="inherit"
                    className="btnMenu"
                >
                    <Menu fontSize="large" />
                </IconButton>
            </Container>

        </AppBar>

        <Drawer
            open={open}
            anchor="right"
            onClose={()=> setOpen(false)}
        >
            <IconButton onClick={()=> setOpen(false)}>
                <i className="fa-brands fa-discord fa-lg"></i>
                Discord
            </IconButton>
            <NavList ArrNavLinks={ArrNavLinks} />
        </Drawer>
    </>

  )
}
