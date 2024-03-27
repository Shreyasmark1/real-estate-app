import { PropsWithChildren } from "react";

type Props = {
    columnCount: number
    rowCount: number
} & PropsWithChildren

const GridComponent = ({ columnCount, rowCount, children }: Props) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gridTemplateRows: `repeat(${rowCount}, 1fr)`,
    };

    return (
        <div style={gridStyle}>
            {children}
        </div>
    );
};

export default GridComponent;