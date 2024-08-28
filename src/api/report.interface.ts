export interface IResponse<T> {
  typeStatus: number;
  error: string;
  response: boolean;
  data: T;
}

export interface IAnticipoTotal {
  totalSaldo: number;
  totalEmpleados: number;
  client: IAnticipo[];
}

export interface IAnticipo {
  idCliente: number;
  documento: string;
  empleado: string;
  saldo: number;
}

export interface IGasto {
  idLocal: number;
  total: number;
  sucursal: string;
  dato_Gasto_Cuenta: IDatoGastoCuenta[];
  dato_Gasto_Mes: IDatoGastoMes[];
}

export interface IGastoDetailMonth {
  total: number;
  sucursal: string;
  dato_Gasto_Mes: IDatoGastoMes[];
}

export interface IDatoGastoCuenta {
  id_Gasto_CuentaProducto: number;
  idContaCuenta: number;
  idLocal: number;
  cuentaContable: string;
  cuenta: string;
  total: number;
}

export interface IDatoGastoMes {
  idLocal: number;
  idMes: number;
  mes: string;
  total: number;
}

export interface IGastoTrailer {
  id_Gasto_CuentaProducto: number;
  cuenta: string;
  total: number;
  detalles: IGastoTrailerDetalle[];
}

export interface IGastoTrailerDetalle {
  id_Gasto_CuentaProducto: number;
  idMes: number;
  mes: string;
  total: number;
}

export interface IGastoTrailerDetailMonth {
    total: number;
    cuenta: string;
    detalles: IGastoTrailerDetalle[];
  }

  export interface IXCobrar {
    idCliente: number;
    idTipo:    number;
    cliente:   string;
    ci:        string;
    tipo:      string;
    total:     number;
    ultimoPa:  Date;
    meses:     number;
}

export interface IOtroNegocio {
  idCuentaProducto: number;
  cuenta: string;
  total: number;
}
  