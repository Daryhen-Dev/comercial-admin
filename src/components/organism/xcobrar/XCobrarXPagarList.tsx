import { useEffect, useRef, useState } from "react";
import { apiFetchGet } from "../../../api/apiFetch";
import { IResponse, IXCobrar } from "../../../api/report.interface";
import { Toast } from "primereact/toast";
import { Spinner } from "../../../utils/Spinner";
import { CardTotal } from "../../molecule/CardTotal";
import { PillXCobrar } from "../../molecule/PillXCobrar";

export const XCobrarXPagarList = () => {
    const toast = useRef<Toast>(null);
    const [dataList, setDataList] = useState<IResponse<IXCobrar[]>>();
    const [totalSaldo, setTotalSaldo] = useState<number>(0)
    const [totalDetail, setTotalDetail] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
      (async () => {
        await handleData();
      })();
    }, []);
  
    async function handleData() {
      setLoading(true);
      const apiResult = await apiFetchGet<IXCobrar[]>(
        `ReportAdmin/xcobrarxpagar`
      );
      if (!apiResult.response) {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: `${apiResult.error}`,
          life: 3000,
        });
      }
  
      const totalSaldo = parseFloat(apiResult.data.filter(item => item.tipo === "PRODUCTO POR COBRAR").reduce((a, item) => {
        return a + item.total
      }, 0).toFixed(2))
      
      const totalSaldoEntregar = parseFloat(apiResult.data.filter(item => item.tipo === "PRODUCTO POR ENTREGAR").reduce((a, item) => {
        return a + item.total
      }, 0).toFixed(2))
      
      setTotalSaldo(totalSaldo)
      setTotalDetail(totalSaldoEntregar)
      setDataList(apiResult);
      setLoading(false);
  
    }
    if (loading) {
      return <Spinner state={loading} />;
    }
  
    if (!dataList?.data || dataList.data.length <= 0) {
      return (
        <>
          <Toast ref={toast} />
          <h2> no hay datos</h2>
        </>
      );
    }
  
    return (
      <>
             {/* <PorcenLineal /> */}
         {
             totalSaldo > 0 ? (  <CardTotal key="1" title="'Por entregar', 'Por cobrar' " total={totalSaldo} nameTotal="Por entregar" totalDetail={totalDetail} nameTotalDetail="Por cobrar"  /> ) : null
         }

        {
            dataList.data.map(e =>  <PillXCobrar key={e.idCliente} idCliente={e.idCliente} idTipo={e.idTipo} cliente={e.cliente} ci={e.ci} tipo={e.tipo} total={e.total} ultimoPa={e.ultimoPa} meses={e.meses} /> )
        }
      </>
    );
}