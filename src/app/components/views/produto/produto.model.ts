import { Categoria } from "../categoria/categoria.model";
import { Fornecedor } from "../fornecedor/fornecedor.model";

export interface Produto{
    id?: String,
    nome: String,
    quantidade: String,
    valor: String,
    categoria: Categoria,
    fornecedor: Fornecedor
}