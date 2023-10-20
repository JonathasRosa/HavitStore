import { Product } from "@prisma/client";

interface ProductItemProps {
    product: Product[]
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div>
            <h1>Product</h1>
        </div>
    );
}

export default ProductItem;