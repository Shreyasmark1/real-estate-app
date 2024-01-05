import { Input } from "../../ui/input";

type Props = {
    name?: string,
    fieldType?: string,
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    rightIcon?: JSX.Element
}

const InputField = ({ name, fieldType, onChangeHandler, rightIcon }: Props) => {

    return (
        <>
            <Input
                name={name}
                autoComplete={ name? name === 'password' ? 'current-password' : 'on' : 'on'}
                type={fieldType}
                onChange={onChangeHandler ? (e) => onChangeHandler(e) : undefined}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
            {rightIcon &&
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                    {rightIcon}
                </div>
            }
        </>

    );
}

export default InputField;