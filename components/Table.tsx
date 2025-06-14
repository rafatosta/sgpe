import { Table as TableFlowbite, TableHead, TableCell, TableBody, TableRow, TableHeadCell } from 'flowbite-react'

interface Column<T> {
    header: string
    accessor: (item: T, index: number) => React.ReactNode
    className?: string
}

interface TableProps<T> {
    data: T[]
    columns: Column<T>[]
    keyExtractor: (item: T) => React.Key
}

function Table<T>({ data, columns, keyExtractor }: TableProps<T>) {
    return (
        <div className="overflow-y-auto">
            <TableFlowbite hoverable>
                <TableHead className="sticky top-0 z-40">
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHeadCell key={index}>{column.header}</TableHeadCell>
                        ))}
                    </TableRow>

                </TableHead>
                <TableBody className="divide-y overflow-y-auto">
                    {data.map((item, i) => (
                        <TableRow key={keyExtractor(item)}>
                            {columns.map((column, index) => (
                                <TableCell key={index} className={column.className}>
                                    {column.accessor(item, i)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </TableFlowbite>
        </div>
    )
}

export default Table
