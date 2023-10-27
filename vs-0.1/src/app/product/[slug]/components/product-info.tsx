"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
    product: Pick< ProductWithTotalPrice,
        "basePrice" |
        "description" |
        "discountPercentage" |
        "totalPrice" |
        "name"
    >
}

const ProductInfo = ({
    product: {name, basePrice, description, discountPercentage, totalPrice},
}: ProductInfoProps) => {
    const[quantity, setQuantity] = useState(1);

    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    }

    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1);
    }

    return(
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>
            <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 && (
                    <Badge className="px-2 py-[2px]">
                        <ArrowDownIcon size={14}/> 
                        {discountPercentage}%
                    </Badge>
                )}
            </div>
            {discountPercentage >0 && (
                <p className="text-sm line-through opacity-75">R$ {Number(basePrice).toFixed(2)}</p>
            )}
            <div className="flex items-center gap-2 mt-4">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16} />
                </Button>
                <span>{quantity}</span>
                <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16} />
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo;