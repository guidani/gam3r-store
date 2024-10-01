import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";

export default function Home() {

  return (
    <div className="grid grid-cols-4 gap-5">
      {produtos.map((produto) => (
        <ProdutoItem produto={produto} key={produto.id} />
      ))}
    </div>
  );
}
