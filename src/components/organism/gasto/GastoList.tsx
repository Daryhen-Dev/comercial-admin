import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import { IGasto, IResponse } from "../../../api/report.interface";
import { apiFetchGet } from "../../../api/apiFetch";
import { Spinner } from "../../../utils/Spinner";
import { CardTotal } from "../../molecule/CardTotal";
import { PillGastoDetail } from "../../molecule/PillGastoDetail";


export const GastoList = () => {
    const toast = useRef<Toast>(null);
    const [dataList, setDataList] = useState<IResponse<IGasto[]>>();
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
      const apiResult = await apiFetchGet<IGasto[]>(
        `ReportAdmin/gastoList`
      );
      if (!apiResult.response) {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: `${apiResult.error}`,
          life: 3000,
        });
      }
  
      const totalSaldo = parseFloat(apiResult.data.reduce((a, item) => {
        return a + item.total
      }, 0).toFixed(2))
       
      setTotalSaldo(totalSaldo)
      const totalDetail = apiResult.data.length
      setTotalDetail(totalDetail)
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
             totalSaldo > 0 ? (  <CardTotal key="1" title="Gastos" total={totalSaldo} nameTotal="Total gastos" totalDetail={totalDetail} nameTotalDetail="Sucursales"  /> ) : null
         }
     
        {
            dataList.data.map(e =>  <PillGastoDetail key={e.idLocal} total={e.total} sucursal={e.sucursal} dato_Gasto_Mes={e.dato_Gasto_Mes} /> )
        }
      </>
    );
}