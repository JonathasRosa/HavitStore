import { CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";

interface CartItemProps {
    product: CartProduct
}

const CartItem = ({product}: CartItemProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-accent flex items-center justify-center rounded-lg h-[77px] w-[77px]">
                    <Image 
                        src={product.imageUrls[0]}
                        width={0} 
                        alt={product.name}
                        height={0}
                        priority={true}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">
                        {product.name}
                    </p>
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold">
                            R$ {product.totalPrice.toFixed(2)}
                        </p>
                        {product.discountPercentage > 0 && (
                            <p className="opacity-75 line-through text-xs">
                                R$ {Number(product.basePrice).toFixed(2)}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                        <Button size="icon" variant="outline" className="h-6 w-6">
                            <ArrowLeftIcon size={14} />
                        </Button>
                        <span className="text-xs">
                            {product.quantity}
                        </span>
                        <Button size="icon" variant="outline" className="h-6 w-6">
                            <ArrowRightIcon size={14} />
                        </Button>
                    </div>
                </div>
                <Button size="icon" variant="outline">
                    <TrashIcon size={16}/>
                </Button>
            </div>
        </div>
    );
};

export default CartItem;