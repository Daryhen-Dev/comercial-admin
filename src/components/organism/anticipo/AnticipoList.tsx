import { useEffect, useState, useRef } from "react";
import { Toast } from "primereact/toast";

import { IAnticipo, IResponse } from "../../../api/report.interface";
import { Spinner } from "../../../utils/Spinner";
import { CardTotal } from "../../molecule/CardTotal";
import { PillDetails } from "../../molecule/PillDetails";
import { apiFetchGet } from "../../../api/apiFetch";

export const AnticipoList = () => {
  const toast = useRef<Toast>(null);
  const [anticipoList, setAnticipoList] = useState<IResponse<IAnticipo[]>>();
  const [totalSaldo, setTotalSaldo] = useState<number>(0)
  const [totalEmpleado, setTotalEmpleado] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      await handleData();
    })();
  }, []);

  async function handleData() {
    setLoading(true);
    const apiResult = await apiFetchGet<IAnticipo[]>(
      `ReportAdmin/anticipoTotalList`
    );
    if (!apiResult.response) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: `${apiResult.error}`,
        life: 3000,
      });
    }

    const totalSaldo = apiResult.data.reduce((a, item) => {
      return a + item.saldo
    }, 0)
     
    setTotalSaldo(totalSaldo)
    const totalPersonas = apiResult.data.length
    setTotalEmpleado(totalPersonas)
    setAnticipoList(apiResult);
    setLoading(false);

  }
  if (loading) {
    return <Spinner state={loading} />;
  }

  if (!anticipoList?.data || anticipoList.data.length <= 0) {
    return (
      <>
        <Toast ref={toast} />
        <h2> no hay datos</h2>
      </>
    );
  }

  return (
    <>
       {
          totalSaldo > 0 ? (  <CardTotal key="1" title="Anticipos" total={totalSaldo} nameTotal="Total anticipos" totalDetail={totalEmpleado} nameTotalDetail="Empleados"  /> ) : null
       }
   
      {anticipoList?.data.map((e) => (
         <PillDetails key={e.idCliente} id={e.idCliente} info={e.documento} moreInfo={e.empleado} total={e.saldo} />
        // <h2 key={e.idCliente}>
        //   {" "}
        //   {e.empleado} {e.saldo}{" "}
        // </h2>
      ))}
      {/* <ReportAAClientList props={anticipoList.data} /> */}
    </>
  );
};
