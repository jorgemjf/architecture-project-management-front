

export interface Proyecto {
    id?: string;
    referencia: string;
    titulo: string;
    tipo: string;
    zonificacion: string;
    catastro: string;
    cliente: string;
    ubicacion: string;
    comercial: string;
    presupuesto?: number;
    activo?: boolean;
}
