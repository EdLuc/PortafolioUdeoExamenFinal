export interface InfoProducto {
  titulo?: string;
  email?: string;
  producto?: Producto[];
}

interface Producto {
  id?: string;
  nombre?: string;
  categoria?: string;
  precio?: string;
  stock?: string;
}