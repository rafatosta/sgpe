import { Pagination as PaginationFlowbite } from 'flowbite-react'

interface PaginationProps {
    currentPage: number
    totalRecords: number
    onPageChange: (page: number) => void
}

import { pageSize } from '@/utils/constants';

function Pagination({ currentPage, totalRecords, onPageChange }: PaginationProps) {
    const totalPages = Math.ceil(totalRecords / pageSize)

    return (
        <div className="flex overflow-x-auto sm:justify-center py-6">
            {totalRecords > 0 ? (
                <div className="flex justify-between items-center w-full">
                    <p className="text-sm text-gray-500">Total de {totalRecords} registros</p>
                    <PaginationFlowbite
                        layout="pagination"
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                        previousLabel=""
                        nextLabel=""
                        showIcons
                    />
                </div>
            ) : (
                <p className="text-gray-500">Não há dados cadastrados</p>
            )}
        </div>
    )
}

export default Pagination
