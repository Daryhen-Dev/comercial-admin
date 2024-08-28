import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import { IconsPrime } from "../../styles/icons";
import { IOtroNegocio } from "../../api/report.interface";


//{ idCliente,  documento, empleado, saldo } : IAnticipo
export const PillOtroNegocio = ( { idCuentaProducto, cuenta, total } : IOtroNegocio ) => {
    function handleGo() {
        console.log(idCuentaProducto)
    }
    
    return (
        <Container className="p-ripple" onClick={handleGo}>
            <div className="detail">
                <span className="name">{cuenta}
                  <Ripple />

                </span>
            </div>
            <div className="saldo">
                <span className="saldoText">$ {total}</span>
                <i className={IconsPrime.iconArrowNext}></i>
            </div>
        </Container>
    )
}

const Container = styled.a`
    display: flex;
    height: 80px;
    width: 100%;
    background-color: #1f2937;
    border-radius: 20px;
    padding: 5px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 60%;
        .name{
            padding-left: 10px;
            font-size: 13px;
            font-weight:600; 
        }
    }
    .saldo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 7px 0 5px;
        height: 100%;
        width: 40%;
        .saldoText {
            font-size: 14px;
        }
    }
`