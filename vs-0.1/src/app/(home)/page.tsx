import Categories from "./components/categories";
import ProductList from "../../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }, 
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
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
    <div className="flex flex-col gap-8 py-8"> 
      <PromoBanner 
        src="/banner-home-01.png"
        alt={"Até 55% de desconto só esse mês!"} />

      <div className="px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals}/>
      </div>

      <PromoBanner 
        src="/banner-home-02.png"
        alt={"Até 55% de desconto em mouses!"} 
      />
      
      <div className="mt-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses}/>
      </div>

      <PromoBanner 
        src="/banner-home-03.png"
        alt={"Até 20% de desconto em headphones!"} 
      />

      <div className="mt-8 ">
          <SectionTitle>HeadPhones</SectionTitle>
          <ProductList products={headphones}/>
      </div>
    </div>
  );
}