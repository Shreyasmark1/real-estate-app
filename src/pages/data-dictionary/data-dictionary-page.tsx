import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataDictionaryColumnRef } from "./_components/data-dictionary";
import { DataDictionary } from "@/schema/data-dictionary/data-dictionary-form-schema";

const DataDictionaryPage = () => {

    const data: DataDictionary[] = [
        {
            uniqueId: "",
            ddValue: "Apartment",
            ddTypeId: "",
            ddTypeName: "Property Type",
            createdAt: "null"
        },
        {
            uniqueId: "736487364",
            ddValue: "Apartment",
            ddTypeId: "",
            ddTypeName: "Property Type",
            createdAt: "null"
        },
        {
            uniqueId: "23434",
            ddValue: "Hotel",
            ddTypeId: "",
            ddTypeName: "Property Type",
            createdAt: "null"
        },
        {
            uniqueId: "4324",
            ddValue: "Hostel",
            ddTypeId: "",
            ddTypeName: "Property Type",
            createdAt: "null"
        }
    ]

    const columnRef = DataDictionaryColumnRef()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Data dictionary</CardTitle>
                <CardDescription>
                </CardDescription>
            </CardHeader>
            <CardContent>
               <DataTable columns={columnRef} data={data}/>
            </CardContent>
        </Card>
    );
}

export default DataDictionaryPage;