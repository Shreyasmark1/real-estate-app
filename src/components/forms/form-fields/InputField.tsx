import { Input } from "../../ui/input";

type Props = {
    name?: string,
    fieldType?: string,
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    leftIcon?: JSX.Element,
    className?: string,
    placeHolder?: string
}

const InputField = ({ name, fieldType, onChangeHandler, leftIcon, className, placeHolder }: Props) => {

    return (
        <>
            <Input
                name={name}
                autoComplete={name ? name === 'password' ? 'current-password' : 'on' : 'on'}
                type={fieldType}
                placeholder={placeHolder}
                onChange={onChangeHandler ? (e) => onChangeHandler(e) : undefined}
                className={"w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 " + className}
            />
            {leftIcon &&
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    {leftIcon}
                </div>
            }
        </>

    );
}

export default InputField;