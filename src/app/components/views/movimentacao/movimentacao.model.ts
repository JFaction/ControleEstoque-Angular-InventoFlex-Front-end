import { Fornecedor } from "../fornecedor/fornecedor.model";
import { Produto } from "../produto/produto.model";

export interface Movimentacao{
    id?: string,
    tipoMovimento: string,
    tipoPagamento: string,
    produto: Produto,
    fornecedor: Fornecedor,
    quantidade: string,
    data: null
}