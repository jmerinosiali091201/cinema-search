interface GridProps {
    children: React.ReactNode;
}

const Grid = ({ children }: GridProps) => {
    return (
        <div className="grid 2xl:grid-cols-4 2xl:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-4">
            {children}
        </div>
    )
}

export default Grid;