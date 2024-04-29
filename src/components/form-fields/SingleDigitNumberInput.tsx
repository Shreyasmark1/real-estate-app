import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
    formContext: any,
    fieldName: string,
    maxValue: number,
    minValue: number
}

const SingleDigitNumberInput = ({ formContext, fieldName, maxValue, minValue }: Props) => {

    return (
        <div className="flex gap-1">
            <Button type="button" className="cursor-pointer" onClick={() => {

                const value = formContext.getValues(fieldName)

                if (value === minValue || value < minValue) {
                    formContext.setValue(fieldName, minValue)
                } else {
                    formContext.setValue(fieldName, value - 1)
                }
            }
            }>
                -
            </Button>

            <Input maxLength={1} onChange={() => { }} className="focus-visible:ring-transparent focus-visible:ring-offset-0 caret-transparent w-12 text-center" value={formContext.watch(fieldName)} />

            <Button type="button" className="cursor-pointer" onClick={() => {
                const value = Number(formContext.getValues(fieldName))

                if(value === maxValue || value > maxValue){
                    formContext.setValue(fieldName, maxValue)
                } else{
                    formContext.setValue(fieldName, value + 1)
                }
            }}>
                +
            </Button>
        </div>
    );
}

export default SingleDigitNumberInput;