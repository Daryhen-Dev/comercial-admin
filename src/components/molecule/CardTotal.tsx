import styled from "styled-components";
import { numericFormat } from "../../utils/numericFormat";


interface ICardTotal {
   title: string,
   total: number,
   nameTotal: string,
   totalDetail: number,
   nameTotalDetail: string
}

export const CardTotal = ({title, total, nameTotal, totalDetail, nameTotalDetail }: ICardTotal) => {

  return (
    <Container >
      <section className="cardTitle">
        <div className="cardIcon">
            <i className="pi pi-dollar" style={{ fontSize: "1.5rem" }}></i>

        </div>
        <span className="cardTitleText">{title}</span>
      </section>
      <section className="cardDetail">
        <div className="cardSaldoOne">
          <span className="cardValor">{numericFormat(total)}</span>
          <span className="cardValorText">{nameTotal} </span>
        </div>
        <div className="cardSaldoTwo">
          <span className="cardValor">{numericFormat(totalDetail)}</span>
          <span className="cardValorText">{nameTotalDetail}</span>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  height: 152px;
  width: 100%;
  padding: 17.5px;
  border: solid 1px #2a323d;
  border-radius: 15px;
  border-left: solid 4px #64B5F6;
  background-color: #1f2937;
  .cardIcon{
    padding: 4px;
    border-radius: 5px;
    background-color: #64B5F6;
  }
  .cardValor {
    font-size: 1.5rem;
  }
  .cardValorText {
    font-size: 14px;
    font-weight: 600;
   
  }
  .cardTitleText {
    font-size: 17.5px;
    font-weight: 600;
    color: #64B5F6;
  }
  .cardTitle {
    display: flex;
    height: 28px;
    width: 100%;
    align-items: center;
    gap: 5px;
  }
  .cardDetail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
  .cardSaldoOne {
    display: flex;
    height: 75px;
    width: 100%;
    padding: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: solid 1px #383838;
  }
  .cardSaldoTwo {
    display: flex;
    height: 75px;
    width: 100%;
    padding: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
