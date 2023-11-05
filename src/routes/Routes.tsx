import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login/Login";
import { NavLink } from "../util/Interface";

export const PageRoutes = () => {
  
  const ArrNavLink:NavLink[] = [
    {
      title:"Download",
      path:"/download"
    },
    {
      title:"Nitro",
      path:"/nitro"
    },
    {
      title:"Discover",
      path:"/discover"
    },
    {
      title:"Safety",
      path:"/safety"
    },
    {
      title:"Support",
      path:"/support"
    },
    {
      title:"Blog",
      path:"/blog"
    },
    {
      title:"Careers",
      path:"/careers"
    }
  ]

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home ArrNavLinks={ArrNavLink} />} />
            <Route path="login" element={ <Login />} />
        </Routes>
    </BrowserRouter>
  )
}

