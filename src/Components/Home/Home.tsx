import { NavLiksProps } from "../../util/Interface"
import { Header } from "../Header/Header"

export const Home = ({ArrNavLinks}:NavLiksProps) => {

  return (
    <>
      <Header ArrNavLinks={ArrNavLinks} />
    </>
  )
}
