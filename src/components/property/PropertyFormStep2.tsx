import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import SelectableImage from "../SelectableImage";
import { usePropertyService } from "@/services/PropertyService";
import { isEmptyString } from "@/lib/utils/string-util";
import { Badge } from "../ui/badge";

const PropertyFormStep2 = () => {

    const [bannerImage, setBannerImage] = useState("")
    const [images, setImages] = useState<string[]>([])

    const { uploadPropertyBannerImg, uploadPropertyImg } = usePropertyService()

    const handleBannerSet = (e: any) => {
        if (e.target.files && e.target.files[0]) uploadPropertyBannerImg.mutate(e.target.files[0])
    }

    const handleAddAditionalImage = (e: any) => {
        if (e.target.files && e.target.files[0]) uploadPropertyImg.mutate(e.target.files[0])
    }

    const handleRemoveImg = (index: number) => {
        const temp = images
        if (index !== -1) temp.splice(index, 1);
        setImages([...temp])
    }

    useEffect(() => window.scrollTo(0, 0), [])
    useEffect(() => setBannerImage(uploadPropertyBannerImg.data?.data.path), [uploadPropertyBannerImg.data])

    useEffect(() => {
        if (uploadPropertyImg.data?.data.path) {
            setImages(prev => [...prev, uploadPropertyImg.data.data.path])
        }
    }, [uploadPropertyImg.data])

    return (
        <Card className="w-full md:w-2/5 md:p-8 mx-auto">
            <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Step 2</CardTitle>
                <CardDescription>Select property images</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-5">
                <CardTitle className="text-1xl">Banner Image</CardTitle>
                <SelectableImage
                    className="h-[250px] w-full flex justify-center"
                    onFileSelect={handleBannerSet}
                    imageSrc={isEmptyString(bannerImage) ? "/no-image.jpg" : "http://localhost:8080/" + bannerImage}
                />
                <CardTitle className="text-1xl">Additional Images</CardTitle>

                {
                    images && images.length > 0 ?
                        images.map((img, index) => (
                            (
                                <Card key={img} className="h-[200px] md:h-[120px] w-full flex flex-col sm:flex-row justify-between p-2 gap-4">
                                    <div className="flex items-center overflow-hidden">
                                        <SelectableImage disabled className="w-full overflow-hidden md:w-[150px]" onFileSelect={() => { }} imageSrc={"http://localhost:8080/" + img} />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            className="bg-transparent border-none focus:outline-none"
                                            placeholder="E.g: Kitchen..."
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Badge
                                            className="h-10 cursor-pointer"
                                            variant="destructive"
                                            onClick={() => handleRemoveImg(index)}
                                        >
                                            Remove
                                        </Badge>
                                    </div>
                                </Card>
                            )
                        )) : <></>
                }
                <SelectableImage
                    className="h-[100px]"
                    onFileSelect={handleAddAditionalImage}
                    imageSrc="/no-image.jpg" />
            </CardContent>
        </Card>
    );
}

export default PropertyFormStep2;