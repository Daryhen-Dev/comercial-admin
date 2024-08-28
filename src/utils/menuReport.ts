import { IconsPrime } from "../styles/icons";


export const menuReportAdmin = {
  title: "Reportes de administrador",
  titleIcon: "pi pi-box",
  OptionReportAdminProp: [
    {
      id: 1,
      name: "Anticipos",
      to: "/report/anticipolist",
      icon: IconsPrime.iconProductoAdd,
    },
    {
      id: 2,
      name: "Gastos",
      to: "/report/gastolist",
      icon: IconsPrime.iconProductF,
    },
    {
      id: 3,
      name: "Gastos de trailer",
      to: "/report/gastotrailerlist",
      icon: IconsPrime.iconProductMM,
    },
    {
      id: 4,
      name: "Inventario",
      to: "/report/inventory",
      icon: IconsPrime.iconProductMM,
    },
    {
      id: 5,
      name: "Otros negocios",
      to: "/report/otronegociolist",
      icon: IconsPrime.iconProductMM,
    },
    {
      id: 6,
      name: "Por entregar, cobrar",
      to: "/report/xcobrarxpagarlist",
      icon: IconsPrime.iconProductMM,
    },
    {
      id: 7,
      name: "Producto embodegado",
      to: "/report/inventory",
      icon: IconsPrime.iconProductMM,
    },
  ],
};
