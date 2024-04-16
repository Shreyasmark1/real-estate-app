import { Card, CardContent, CardHeader } from "@/components/ui/card"

function EnquiryCard() {

    return (
        <Card className="rounded-x sm:w-full md:w-[350px]">
            <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                {/* <CardTitle className="text-lg font-bold">Name: </CardTitle>
                shreyas */}
            </CardHeader>
            <CardContent className="gap-2">
                <div>
                    <div className="text-lg font-bold">
                        Name
                    </div>
                    <div>
                        Shreyas
                    </div>
                </div>
                <div>
                    <div className="text-lg font-bold">
                        Mobile
                    </div>
                    <div>
                        3213213213
                    </div>
                </div>
                <div>
                    <div className="text-lg font-bold">
                        Email
                    </div>
                    <div>
                    test@example.com
                    </div>
                </div>
                <div>
                    <div className="text-lg font-bold">
                        Message
                    </div>
                    <div>message:  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </div>
            </CardContent>
        </Card>
    )
}

export { EnquiryCard }