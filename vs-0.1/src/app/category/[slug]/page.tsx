import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computerProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
    const category = await prismaClient.product.findFirst({
        where: {
            slug: params.slug,
        }, 
        include: {
            products: true,
        }
    });
    if(!category) {
        return null;
    }

    return (
        <div className="flex flex-col gap-8 p-5">
            <Badge className=" w-fit gap-1 border-primary border-2 text-base uppercase px-3 py-[0.375rem]"
                variant="outline"
            >
            {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
            {category.name}
            </Badge>
        
        <div className="grid grid-cols-2 gap-8">
            {category.products.map((product) => (
                <ProductItem 
                key={product.id} 
                product={computerProductTotalPrice(product)} 
                />
            ))}
        </div>
        </div>
    );
};

export default CategoryProducts;