import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Qr from "../../Assets/Qr.png";
import "./Login.css";
export default function Login() {
  return (
    <section className="sectFormLogin">
      <Box component="form" className="box">
        <div className="formHola">
          <h3 style={{ color: "white" }}>!Hola de nuevo!</h3>
          <p style={{ color: "white" }}>
            !Nos alegramos mucho de volver a verte!{" "}
          </p>
          <div className="containerDivInputs">
            <label htmlFor="" className="textColorGray">
              {" "}
              CORREO ELETRONICO O NUMERO DE TELEFONO
            </label>
            <input type="text" className="inputsFormLogin" />
            <label htmlFor="" className="textColorGray">
              CONTRASEÑA
            </label>
            <input type="text" className="inputsFormLogin" />
            <NavLink
              style={{ color: "#069AE4", textDecoration: "none" }}
              to={"/login"}
            >
              Has olvidado la contraseña?
            </NavLink>
            <Button
              className="btnFormLogin"
              sx={{ backgroundColor: "#4752C4", color: "white", marginTop: 3 , padding:'10px'}}
            >
              {" "}
              Iniciar sesion
            </Button>
          </div>
        </div>

        <div className="formQr">
          <img src={Qr} alt="" />
          <h3 style={{ color: "white", textAlign: "center" }}>
            Iniciar sesion con <br /> codigo QR
          </h3>
          <p style={{ color: "#B1B6BE", textAlign: "center" }}>
            Escanealo con la{" "}
            <span
              style={{ fontSize: "15px", fontWeight: 600 }}
              className="textColorGray"
            >
              aplicacion de movil de Discord para iniciar sesion de forma
              instantanea.
            </span>
          </p>
        </div>
      </Box>
    </section>
  );
}
