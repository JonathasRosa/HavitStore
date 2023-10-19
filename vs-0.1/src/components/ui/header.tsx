"use client"

import { 
    HomeIcon, 
    ListOrderedIcon, 
    LogInIcon, 
    LogOutIcon, 
    MenuIcon, 
    PercentIcon, 
    ShoppingCartIcon 
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { 
    Sheet, 
    SheetContent, 
    SheetHeader, 
    SheetTrigger 
} from "./sheet";
import { signIn, useSession, signOut } from "next-auth/react";

function Header() {
    const { status, data } = useSession();

    const handleLoginClick = async () => {
        await signIn();
    };

    const handleLogoutClick = async () => {
        await signOut();
    };

    return (
        <Card className="flex items-center justify-between p-[1.875rem">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent className="w-[300px] sm:w-[450px]" side="left">
                    <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
                    {status === 'authenticated' && data?.user && (
                        <Avatar>

                        </Avatar>
                    )}
                    <div className="mt-2 flex flex-col gap-2">
                        {status === 'unauthenticated' && (
                            <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                                <LogInIcon size={16} />
                                Fazer Login
                            </Button>
                        )}
                        {status === 'authenticated' && (
                            <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                                <LogOutIcon size={16} />
                                Fazer Logout
                            </Button>
                        )}
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16} />
                            Início
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon size={16} />
                            Ofertas
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon size={16} />
                            Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="text-lg font-semibold">
                <span className="text-primary">Havit</span>Store
            </h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
}

export default Header;

function signOut() {
    throw new Error("Function not implemented.");
}
