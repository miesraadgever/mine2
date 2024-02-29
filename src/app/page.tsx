"use server"

import Image from "next/image";

export default async function Home() {
    let results: any[] = []

    const paramsString = "mine"

    //fetch images from cloudinary
    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/dwgsproch/resources/search?${paramsString}`, {
            headers: {
                Authorization: `Basic ${Buffer.from(process.env.NEXT_CLOUDINARY_API_KEY + ':' + process.env.NEXT_CLOUDINARY_API_SECRET).toString('base64')}`
            },
            cache: "no-cache"
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.resources)
        results = data.resources
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                {results.map(image =>
                    <li key={image.asset_id}>
                        <>{image.id}</>
                        <Image priority width={image.width} height={image.height} src={image.secure_url} alt={image.asset_id} />
                    </li>
                )}
            </div>
        </main>
    );
}



