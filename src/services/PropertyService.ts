import { PropertyApi } from "@/api/property-api";
import { Property, PropertyBasicDetail, PropertyDD } from "@/feature/property/_schemas/property-schema";
import { useAlert } from "@/lib/hooks/useAlert"
import { DefinedUseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const QUERY_KEY = "property";

export const usePropertyService = () => {
    const queryClient = useQueryClient()
    const { showToastError, showToastSuccess } = useAlert()

    const uploadPropertyBannerImg = useMutation({
        mutationFn: ({ uniqueId, file }: any) => {
            return PropertyApi.uploadPropertyImage(uniqueId, file)
        },
        onSuccess(_data, _variables, _context) {
            return _data;
        },
        onError(error) { showToastError(error.message) }
    })

    const uploadPropertyImg = useMutation({
        mutationFn: (body: { uniqueId: string, file: any }) => {
            return PropertyApi.uploadPropertyImage(body.uniqueId, body.file)
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

    const getPropertyList = (): DefinedUseQueryResult<Property[], Error> => {

        const result = useQuery({
            queryKey: [QUERY_KEY],
            queryFn: PropertyApi.getPropertyList,
            initialData: [],
        })

        if (result.isError) showToastError(result.error.message);

        return result
    }

    const getPropertyDetail = (uniqueId: string): Promise<Property> => {

        return new Promise((resolve, reject) => {
            PropertyApi.getPropertyDetails(uniqueId)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                    showToastError(err.message);
                    return reject(err)
                })
        })



        // const result = useQuery({
        //     queryKey: [QUERY_KEY, uniqueId],
        //     queryFn: () => PropertyApi.getPropertyDetails(uniqueId),
        //     initialData: null,
        // })

        // if (result.isError) showToastError(result.error.message);

        // return result;
    }

    const saveDD = useMutation({
        mutationFn: (dd: PropertyDD) => PropertyApi.createOrUpdateDD(dd),
        onSuccess(_data, _variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            showToastSuccess("Saved!")
        },
        onError(error) { showToastError(error.message) }
    })

    const savePropertyBasic = useMutation({
        mutationFn: (body: PropertyBasicDetail) => {
            return PropertyApi.createOrUpdatePropertyBasic(body)
        },
        onSuccess(_data, _variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            showToastSuccess("Saved!")
        },
        onError(error) { showToastError(error.message) }
    })

    const savePropertyImages = useMutation({
        mutationFn: (body: any) => PropertyApi.savePropertyImages(body, body.uniqueId),
        onSuccess(_data, _variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            showToastSuccess("Saved!")
        },
        onError(error) { showToastError(error.message) }
    })

    return {
        uploadPropertyBannerImg,
        uploadPropertyImg,
        getPropertyDDList,
        saveDD,
        savePropertyBasic,
        savePropertyImages,
        getPropertyList,
        getPropertyDetail
    }
}