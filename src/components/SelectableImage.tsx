import { useRef } from "react";

type Props = {
    className?: string
    variant?: "sm" | "md" | "lg"
    onFileSelect: (file: any | null) => void;
    imageSrc?: string;
    disabled?: boolean
}

const SelectableImage = ({ onFileSelect, className, disabled, imageSrc }: Props) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    // window.document.getElementById('banner-img')?.click()
    const openExplorer = () => fileInputRef.current?.click();

    return (
        <div className={className}>
            <input
                className="hidden"
                // id="banner-img"
                ref={fileInputRef ? fileInputRef : undefined}
                type="file"
                onClick={(e: any) => e.target.value = null}
                onChange={(e) => onFileSelect(e)}
            />
            <img
                className="object-cover h-full w-auto rounded-lg"
                onClick={disabled ? undefined : openExplorer}
                src={imageSrc ? imageSrc : '/no-image.jpg'}
            />
        </div>
    );
}

export default SelectableImage;













// function useFilePicker() {
//     const [selectedFile, setSelectedFile] = useState<string | null>(null);

//     const filePickerHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files.length > 0) {
//             setSelectedFile(URL.createObjectURL(event.target.files[0]));
//         }
//     };

//     return [selectedFile, filePickerHandler] as const;
// }
