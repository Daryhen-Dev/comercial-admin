import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import { IconsPrime } from "../../styles/icons";
import { IPillDetail } from "../../utils/infoDetail.inteface";


//{ idCliente,  documento, empleado, saldo } : IAnticipo
export const PillDetails = ( { id,  info, moreInfo, total } : IPillDetail ) => {
    function handleGo() {
        console.log(id)
    }
    
    return (
        <Container className="p-ripple" onClick={handleGo}>
            <div className="detail">
                <span className="ci">{info}</span>
                <span className="name">{moreInfo}
                  <Ripple />

                </span>
            </div>
            <div className="saldo">
                <span>$ {total}</span>
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
        width: 70%;
        .name{
            padding-left: 10px;
            font-size: 13px;
            font-weight:600; 
        }
        .ci{
            padding-left: 10px;
            padding-bottom: 5px;
            font-size: 13px;
            font-weight: bold;
        }
    }
    .saldo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 7px 0 5px;
        height: 100%;
        width: 30%;
    }
`