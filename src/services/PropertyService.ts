import { PropertyApi } from "@/api/property-api";
import { useAlert } from "@/lib/hooks/useAlert"
import { useMutation } from "@tanstack/react-query"

export const usePropertyService = () => {

    const { showToastError } = useAlert();

    const uniqueId = "763863yiu3y2i4"

    const uploadPropertyBannerImg = useMutation({
        mutationFn: (file) => {
            return PropertyApi.uploadPropertyImage(uniqueId, file)
        },
        onSuccess(_data, _variables, _context) {},
        onError: ({ error }: any) => showToastError(error.message)
    })

    const uploadPropertyImg = useMutation({
        mutationFn: (file) => {
            return PropertyApi.uploadPropertyImage(uniqueId, file)
        },
        onSuccess(_data, _variables, _context) {},
        onError: ({ error }: any) => showToastError(error.message)
    })

    return { uploadPropertyBannerImg, uploadPropertyImg}
}