import styled from "styled-components";
import { OptionReport } from "../organism/OptionReport";
import { menuReportAdmin } from "../../utils/menuReport";

export const ReportListTemplate = () => {
    return (
        <Container>
        <header className="header">
           <span> Menu de reportes </span>
        </header>
        <main className="content">
          <OptionReport key="1" 
          reports={menuReportAdmin} />
        </main>
      </Container>
    )
};

const Container = styled.div`
  display: grid;
  grid-template:
    "header" 50px
    "content";
    gap: 10px;
  .header {
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1f2937;
    border-radius: 10px;
  }
  /* .menu{
    grid-area: menu;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    background-color: #1f2937;
  } */
  .content {
    grid-area: content;
    background-color: #1f2937;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    min-height: 100px;
  }


`;
