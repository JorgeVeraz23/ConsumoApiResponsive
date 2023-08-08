export interface listaVillasI{
    id:number; 
    nombre:string;
    detalle:string;
    tarifa:number;
    ocupantes:number;
    metrosCuadrados:number;
    imagenUrl:string;
    amenidad:string;
    fechaCreacion: Date; // Agregamos estos campos de fecha
  fechaActualizacion: Date;
}
