import { Divider } from "primereact/divider";
import { Ripple } from "primereact/ripple";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";


export interface IOptionReportAdmin {
    id: number;
    name: string;
    to: string;
    icon: string;
  }

  export interface IOptionReport {
    title: string;
    titleIcon: string;
    OptionReportAdminProp: IOptionReportAdmin[];
  }

  export interface Props {
    reports: IOptionReport;
  }

export const OptionReport = ({ reports } : Props ) => {
    return (
        <Container>
          <Divider align="left">
            <div className="inline-flex align-items-center">
              <IconContext.Provider value={{ size: "2rem", color: "#A788FA" }}>
                <i className={reports.titleIcon} style={{ color: "#A788FA" }} />
              </IconContext.Provider>
              <b>{reports.title}</b>
            </div>
          </Divider>
          <div className="linkcontainer">
            {reports.OptionReportAdminProp.map((e) => (
              <Link key={e.id} to={`${e.to}/${e.name}/-1`}
                state= {{ product: e }}
                className="linkdata p-ripple">
                <div className="icono">
                  <IconContext.Provider value={{ size: "2rem" }}>
                    <i className={e.icon} />
                  </IconContext.Provider>
                </div>
                {e.name}<Ripple />
              </Link>
            ))}
          </div>
        </Container>
      );
}

const Container = styled.section`
    b {
    padding-left: 5px;
    color: #a788fa;
  }
  .linkcontainer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    place-content: center;
    place-items: center;
    .linkdata {
      display: grid;
      grid-template-columns: 50px 1fr;
      align-items: center;
      text-decoration: none;
      height: 100px;
      width: 250px;
      border: 1px solid #383846;
      border-radius: 10px;
      color: #e2e3e5;
      box-shadow: 0 1px 3px #fcfcfc1d, 0 1px 2px #fcfcfc1d;
      &:hover {
        background-color: #4141411d;
      }
      .icono {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        text-align: left;
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }
}
`