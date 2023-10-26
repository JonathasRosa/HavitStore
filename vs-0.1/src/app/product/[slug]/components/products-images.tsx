import Image from "next/image";

interface ProductImagesProps {
    name: string;
    imageUrls: sting[];
}

const ProductImages = ({imageUrls, name}: ProductImagesProps) => {
    return(
        <div className="flex flex-col">
            <div className="flex h-[380px] w-full items-center justify-center bg-accent">
                <Image 
                    src={imageUrls[0]}
                    alt={name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    priority={true}
                    style={{objectFit: "contain"}}
                />
            </div>
            {imageUrls.map(imageUrl => (
                <div key={imageUrl} className="flex items-center justify-center rounded-lg bg-accent">
                    <h1>CHICO</h1>
                </div>
            ))}
        </div>
    )
}

export defualt ProductImages;