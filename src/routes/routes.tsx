import { Route, Routes } from "react-router-dom";
import { ReportList } from "../components/page/ReportList";

import { AnticipoList } from "../components/organism/anticipo/AnticipoList";
import { ReportItemTemplate } from "../components/template/ReportItemTemplate";
import { GastoList } from "../components/organism/gasto/GastoList";
import { GastoTrailerList } from "../components/organism/gastoTrailer/GastoTrailerList";
import { XCobrarXPagarList } from "../components/organism/xcobrar/XCobrarXPagarList";
import { OtroNegocioList } from "../components/organism/otronegocio/OtronegocioList";



export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element= {<ReportList /> } />
            <Route path="/report" element= {<ReportItemTemplate />}>
                <Route path="/report/anticipolist/:name/:urlReturn" element={<AnticipoList />} />
                <Route path="/report/gastolist/:name/:urlReturn" element={<GastoList />} />
                <Route path="/report/gastotrailerlist/:name/:urlReturn" element={<GastoTrailerList />} />
                <Route path="/report/xcobrarxpagarlist/:name/:urlReturn" element={<XCobrarXPagarList />} />
                <Route path="/report/otronegociolist/:name/:urlReturn" element={<OtroNegocioList />} />
              
                
            </Route> 
        </Routes>
    )
}