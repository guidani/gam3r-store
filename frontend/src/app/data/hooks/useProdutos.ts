"use client";
import { Produto } from "@/core";
import { useCallback, useEffect, useState } from "react";

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const obterProdutos = useCallback(async () => {
    const resp = await fetch("http://localhost:3333/produtos");
    const produtos = await resp.json();
    return produtos ?? [];
  }, []);

  const obterProdutoPorId = useCallback(async function (
    id: number
  ): Promise<Produto | null> {
    const resp = await fetch(`http://localhost:3333/produtos/${id}`);
    const produto = await resp.json();
    return produto ?? null;
  },
  []);

  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);
  return { produtos, obterProdutoPorId };
}
