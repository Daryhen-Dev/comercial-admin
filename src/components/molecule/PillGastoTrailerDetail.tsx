import styled from "styled-components";
import { IGastoTrailerDetailMonth } from "../../api/report.interface";




export const PillGastoTrailerDetail = ({ total, cuenta, detalles } : IGastoTrailerDetailMonth) => {
  return (
    <Container>
      <div className="title"> {cuenta}
      </div>
      <div className="month">
        {detalles.map(e => <div className="monthText"> 
            <span className="fontText">{e.mes}</span>
            <span className="fontTextSaldo">$ {e.total}</span>
        </div>) }
      </div>
      <div className="total">$ {total}</div>
      <a className="navigation">
            VER DETALLE...
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px 0 10px 0;
  background-color: #1f2937;
  .title {
    grid-area: title;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #A78BFA;
    border-bottom: 1px solid #424B57;
    padding: 15px;
  }
  .month {
    grid-area: month;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-bottom: 1px solid #424B57;
    padding: 15px;
    .monthText {
      display: flex;
      justify-content: space-between;
      padding: 3px;
      .fontText{
        font-size: 14px;
        font-weight: bolder;
      }
      .fontTextSaldo{
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .total {
    grid-area: total;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
  .navigation {
    grid-area: navigation;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 10px 0; 
    color: #64b5F6;
    text-decoration: none;
  }

  @media (min-width: 320px) {
    grid-template:
      "title" 50px
      "total"
      "month"
      "navigation";
  }

  @media (min-width: 375px) {
    grid-template:
      "title title" 50px
      "month total" auto / 60% 40%
      "navigation";
  }
`;
