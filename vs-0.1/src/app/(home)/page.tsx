import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }, 
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  })

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  })

  return (
    <div> 
      <Image 
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        priority={true}
        alt={"Até 55% de desconto só esse mês!"} />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals}/>
      </div>

      <Image 
        src="/banner-home-02.png"
        height={0}
        width={0}
        className="h-auto w-full px-5 py-5"
        sizes="100vw"
        priority={true}
        alt={"Até 55% de desconto em mouses!"} 
      />
      
      <div className="mt-8">
          <p className="mb-3 pl-5 font-bold uppercase">Teclados</p>
          <ProductList products={keyboards}/>
      </div>

      <Image 
        src="/banner-home-03.png"
        height={0}
        width={0}
        className="h-auto w-full px-5 py-5"
        sizes="100vw"
        priority={true}
        alt={"Até 20% de desconto em headphones!"} 
      />

      <div className="mt-8 ">
          <p className="mb-3 pl-5 font-bold uppercase">Headphones</p>
          <ProductList products={headphones}/>
      </div>
    </div>
  );
}