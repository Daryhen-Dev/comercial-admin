import styled from "styled-components"
import { IXCobrar } from "../../api/report.interface"
import moment from "moment"
interface TextProp {
    $textColor: number
}

export const PillXCobrar = ({ cliente, ci, idTipo, tipo, total, ultimoPa, meses } :IXCobrar) => {
    return (
        <Container $textColor={idTipo}>
            <div className="title">
                <span> {tipo} </span>
            </div>
            <div className="detail">
                <div className="detailText">
                <span >{ci}</span>
                <span >{cliente}</span>
                </div>
            </div>
            <div className="saldo">
                <span>$ {total}</span>
            </div>
            <div className="footer">
                <div className="detailText">
                <span className="name">Ultimo pago: {moment(ultimoPa).format('DD/MM/YYYY h:mm A')}</span>
                <span className="name">{meses} MESES</span>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div<TextProp>`
    display: grid;
    grid-template: 
    "title title"
    "saldo saldo"
    "detail detail"
    "footer footer";
    background-color: #1f2937;
    border-radius: 20px;
    padding: 5px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    .title {
        grid-area: title;
        display: flex;
        justify-content: center;
        padding: 15px;
        color: ${({ $textColor }) => $textColor === 0 ? '#2DD4BF' : '#A78BFA'};          
        border-bottom: 1px solid #424B57;
    }
    .saldo {
        grid-area: saldo;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
    .detail {
        grid-area: detail;
        padding: 10px;
        border-bottom: 1px solid #424B57;

    }
    .detailText{
            display: flex;
            flex-direction: column;
            padding: 3px;
            font-size: 14px;
        }
    .footer {
        grid-area: footer;
        display: flex;
        justify-content: space-between;
        padding: 10px 0 5px 10px;
    }
    @media (min-width: 375px) {
    grid-template:
      "title title" 50px
      "detail saldo" auto / 60% 40%
      "footer footer"
      ;
  }

`