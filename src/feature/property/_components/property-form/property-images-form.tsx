import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import SelectableImage from "../../../../components/SelectableImage";
import { usePropertyService } from "@/services/PropertyService";
import { Badge } from "../../../../components/ui/badge";
import { BASE_URL } from "@/config/env-helper";
import { StringUtil } from "@/lib/utils/string-util";
import { Button } from "@/components/ui/button";
import { useAlert } from "@/lib/hooks/useAlert";
import { Property } from "../../_schemas/property-schema";

type Props = {
    property: Property
    next: (uniqueId: string) => void,
}

const PropertyFormStep2 = ({ next , property}: Props) => {

    const [bannerImage, setBannerImage] = useState<any>(property.bannerImag)
    const [images, setImages] = useState<any[]>(property.images)

    const uniqueId = property.uniqueId;

    const { showToastError } = useAlert()

    const { uploadPropertyBannerImg, uploadPropertyImg, savePropertyImages } = usePropertyService()

    const handleBannerSet = (e: any) => {
        if (e.target.files && e.target.files[0]) {

            const body = {
                uniqueId: uniqueId,
                file: e.target.files[0]
            }

            uploadPropertyBannerImg.mutate(body)
        }
    }

    const handleAddAditionalImage = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const body = {
                uniqueId: uniqueId,
                file: e.target.files[0]
            }
            uploadPropertyImg.mutate(body)
        }
    }

    const handleRemoveImg = (index: number) => {
        const temp = images
        if (index !== -1) temp.splice(index, 1);
        setImages([...temp])
    }

    // doing like this to prevent infinite re-renders
    useEffect(() => {
        if (uploadPropertyBannerImg.isSuccess) setBannerImage(uploadPropertyBannerImg.data?.data)
    }, [uploadPropertyBannerImg.isSuccess])

    useEffect(() => {
        if (uploadPropertyImg.isSuccess) setImages(prev => [...prev, uploadPropertyImg.data.data])
    }, [uploadPropertyImg.isSuccess])


    useEffect(() => window.scrollTo(0, 0), [])

    console.log(bannerImage);


    const handleFinalSave = () => {

        if (bannerImage == null) {
            showToastError("Please select a banner image")
            return
        }

        const body = {
            uniqueId: uniqueId,
            bannerImg: bannerImage,
            images: images
        }

        savePropertyImages.mutate(body)
    }

    useEffect(() => {
        if (savePropertyImages.isSuccess) {
            next(uniqueId)
        }

    }, [savePropertyImages.isSuccess])


    return (
        <Card className="w-full md:w-2/5 md:p-8 mx-auto">
            <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Images</CardTitle>
                <CardDescription>Select property images</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-5">
                <CardTitle className="text-1xl">Banner Image</CardTitle>
                <SelectableImage
                    className="h-[250px] aspect-square flex justify-center"
                    onFileSelect={handleBannerSet}
                    imageSrc={StringUtil.isEmptyString(bannerImage?.path) ? "/no-image.jpg" : `${BASE_URL}/${bannerImage.path}`}
                />
                <CardTitle className="text-1xl">Additional Images</CardTitle>

                {
                    images && images.length > 0 ?
                        images.map((img, index) => (
                            (
                                <Card key={img.path} className="h-[200px] md:h-[120px] w-full flex flex-col sm:flex-row justify-between p-2 gap-4">
                                    <div className="flex items-center overflow-hidden">
                                        <SelectableImage
                                            disabled
                                            className="w-full overflow-hidden md:w-[150px]"
                                            onFileSelect={() => { }}
                                            imageSrc={`${BASE_URL}/${img.path}`} />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            className="bg-transparent border-none focus:outline-none"
                                            placeholder="E.g: Kitchen..."
                                            onChange={(e) => {
                                                const prevImages = images

                                                prevImages[index].fileName = e.target.value

                                                setImages(prevImages)
                                            }}
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
                    className="h-[100px] aspect-square"
                    onFileSelect={handleAddAditionalImage}
                    imageSrc="/no-image.jpg" />

                <Button
                    type="submit"
                    disabled={savePropertyImages.isPending || uploadPropertyBannerImg.isPending || uploadPropertyImg.isPending}
                    onClick={handleFinalSave}
                    className="w-full bg-black text-white mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Save & Continue
                </Button>
            </CardContent>

        </Card>
    );
}

export default PropertyFormStep2;