import { PropertyApi } from "@/api/property-api";
import { PropertyDD } from "@/feature/property/_schemas/property-schema";
import { useAlert } from "@/lib/hooks/useAlert"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const QUERY_KEY = "property";

export const usePropertyService = () => {
    const queryClient = useQueryClient()
    const { showToastError, showToastSuccess } = useAlert()
    const uniqueId = "763863yiu3y2i4"

    const uploadPropertyBannerImg = useMutation({
        mutationFn: (file) => {
            return PropertyApi.uploadPropertyImage(uniqueId, file)
        },
        onSuccess(_data, _variables, _context) { },
        onError(error) { showToastError(error.message) }
    })

    const uploadPropertyImg = useMutation({
        mutationFn: (file) => {
            return PropertyApi.uploadPropertyImage(uniqueId, file)
        },
        onSuccess(_data, _variables, _context) { },
        onError(error) { showToastError(error.message) }
    })

    const getPropertyDDList = () => {

        const dd = useQuery({
            queryKey: [QUERY_KEY],
            queryFn: PropertyApi.getDD,
            initialData: [],
        })

        if (dd.isError) showToastError(dd.error.message);

        return dd;
    }

    const saveDD = useMutation({
        mutationFn: (dd: PropertyDD) => PropertyApi.createOrUpdateDD(dd),
        onSuccess(_data, _variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            showToastSuccess("Saved!")
        },
        onError(error) { showToastError(error.message) }
    })

    return { uploadPropertyBannerImg, uploadPropertyImg, getPropertyDDList, saveDD }
}