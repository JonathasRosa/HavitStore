import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "@radix-ui/react-separator";


const Cart = () => {
    const { products, subtotal, total, totalDiscount} = useContext(CartContext)
    return (
        <div className="flex flex-col gap-8">
            <Badge className=" w-fit gap-1 border-primary border-2 text-base uppercase px-3 py-[0.375rem]" 
                    variant="outline">
                <ShoppingCartIcon size={16} />
            Carrinho
            </Badge>
            <div className="flex flex-col gap-4">
                {products.length > 0 ?(
                    products.map((product) => (
                        <CartItem
                            key={product.id}
                            product={computeProductTotalPrice(product as any) as any}
                        />
                    ))
                ) : (
                    <p className="text-center font-semibold">
                        Carrinho Vazio. Vamos fazer compras?
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
                <Separator />
                <div className="flex items-center justify-between text-xs">
                    <p>Subtotal</p>
                    <p>R$ {subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between text-xs">
                    <p>Entrega</p>
                    <p>Grátis</p>
                </div>
                <div className="flex items-center justify-between text-xs">
                    <p>Descontos</p>
                    <p>- R$ {totalDiscount.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between text-sm font-bold">
                    <p>Total</p>
                    <p>R$ {total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;