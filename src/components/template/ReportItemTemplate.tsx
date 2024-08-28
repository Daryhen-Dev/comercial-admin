import { Outlet, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Button } from "primereact/button"
import { IconsPrime } from "../../styles/icons"

export const ReportItemTemplate = () => {
    const { name, urlReturn } = useParams()
    const navigate = useNavigate()

    console.log(name, urlReturn)
    if (!name) return <h2>Error</h2>

    function handleBack() {
        if (urlReturn === "-1") {
            navigate(-1)
        } else {
            navigate(`/${urlReturn}`)
        }
    }

    return (
        <Container>
        <header className="header">
          <Button
            label="Regresar"
            icon={IconsPrime.iconArrowLeft}
            outlined
            onClick={handleBack}
          />
          <span className="Title"> {name} </span>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </Container>
    )
}

const Container = styled.div`
  display: grid;
  min-height: 97vh;
  grid-template:
    "header" 50px
    "content";
  .header {
    grid-area: header;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    justify-content: center;
    align-items:center;
  }
  .content {
    grid-area: content;
  //  background-color: #1f2937;
    margin-top: 15px;
    border-radius: 10px;
    width: 100%;
    min-height: 100px;
    overflow-x: auto;
  }
  .Title {
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 768px) {
    .header {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }
  }
`