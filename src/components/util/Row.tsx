import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
    className?: string,
    itemsPerRow?: number
} & PropsWithChildren

const Row = ({ className, children, itemsPerRow }: Props) => {
    return (
        <div className={cn(`grid grid-cols-${itemsPerRow}`, className)}>
            {children}
        </div>
    );
}

export default Row;