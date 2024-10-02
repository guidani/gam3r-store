'use client'
import useProdutos from "@/app/data/hooks/useProdutos";
import { Produto } from "@/core";
import { useEffect, useState } from "react";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const { obterProdutoPorId } = useProdutos();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    obterProdutoPorId(+id).then(setProduto);
  }, [id, obterProdutoPorId])

  return (
    <div>
      {produto?.nome}
    </div>
  )
}