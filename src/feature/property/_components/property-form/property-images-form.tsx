import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import SelectableImage from "../../../../components/SelectableImage";
import { usePropertyImageService, usePropertyService } from "@/services/PropertyService";
import { Badge } from "../../../../components/ui/badge";
import { BASE_URL } from "@/config/env-helper";
import { StringUtil } from "@/lib/utils/string-util";
import { Button } from "@/components/ui/button";
import { useAlert } from "@/lib/hooks/useAlert";
import { PropertyFileUploadRes } from "../../_schemas/property-schema";

type Props = {
    uniqueId: string
    bannerImg: PropertyFileUploadRes,
    images: PropertyFileUploadRes[],
    next: (uniqueId: string) => void,
}

const PropertyFormStep2 = ({ next, bannerImg, images, uniqueId }: Props) => {

    const [bannerImageCurrent, setBannerImageCurrent] = useState(bannerImg)
    const [imagesCurrent, setImagesCurrent] = useState(images)

    const { showToastError } = useAlert()

    const {  savePropertyImages } = usePropertyService()
    const {uploadPropertyBannerImg, uploadPropertyImg }  = usePropertyImageService()

    const handleBannerSet = (e: any) => {
        if (e.target.files && e.target.files[0]) {

            const form = new FormData()
            form.append("file", e.target.files[0])

            const body = {
                uniqueId: uniqueId,
                form: form
            }

            uploadPropertyBannerImg.mutate(body)
        }
    }

    const handleAddAditionalImage = (e: any) => {
        if (e.target.files && e.target.files[0]) {

            const form = new FormData()
            form.append("file", e.target.files[0])

            const body = {
                uniqueId: uniqueId,
                form: form
            }
            uploadPropertyImg.mutate(body)
        }
    }

    const handleRemoveImg = (index: number) => {
        const temp = imagesCurrent
        if (index !== -1) temp.splice(index, 1);
        setImagesCurrent([...temp])
    }

    // doing like this to prevent infinite re-renders
    useEffect(() => {
        if (uploadPropertyBannerImg.isSuccess) setBannerImageCurrent(uploadPropertyBannerImg.data?.data)
    }, [uploadPropertyBannerImg.isSuccess])

    useEffect(() => {
        if (uploadPropertyImg.isSuccess) setImagesCurrent(prev => [...prev, uploadPropertyImg.data.data])
    }, [uploadPropertyImg.isSuccess])


    useEffect(() => window.scrollTo(0, 0), [])

    const handleFinalSave = () => {

        if (bannerImageCurrent == null) {
            showToastError("Please select a banner image")
            return
        }

        const body = {
            uniqueId: uniqueId,
            bannerImg: bannerImageCurrent,
            images: imagesCurrent
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
                    imageSrc={StringUtil.isEmptyString(bannerImageCurrent?.path) ? "/no-image.jpg" : `${BASE_URL}/${bannerImageCurrent.path}`}
                />
                <CardTitle className="text-1xl">Additional Images</CardTitle>

                {
                    imagesCurrent && imagesCurrent.length > 0 ?
                        imagesCurrent.map((img, index) => (
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
                                            value={img.fileName}
                                            className="bg-transparent border-none focus:outline-none"
                                            placeholder="E.g: Kitchen..."
                                            onChange={(e) => {
                                                // Create a new array with the same values as imagesCurrent
                                                const newImages = [...imagesCurrent];

                                                // Update the fileName property of the relevant image object
                                                newImages[index].fileName = e.target.value;

                                                // Update the state with the new array
                                                setImagesCurrent(newImages);
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