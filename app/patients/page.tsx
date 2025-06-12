'use client'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination, FloatingLabel, Button } from "flowbite-react";
import { useState } from "react";

function Patients() {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);

    return (
        <div>
            <header>
                <div className="flex flex-row justify-between items-center pt-2 pb-2">
                    <h1 className="text-xl font-bold">Pacientes</h1>
                    <Button color="green" pill>
                        Novo
                    </Button>
                </div>
            </header>

            <main>
                <div className="overflow-x-auto">
                    <FloatingLabel variant="filled" label="Buscar" type="text" value={""} onChange={() => NaN} />
                    <Table hoverable>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>Product name</TableHeadCell>
                                <TableHeadCell>Color</TableHeadCell>
                                <TableHeadCell>Category</TableHeadCell>
                                <TableHeadCell>Price</TableHeadCell>
                                <TableHeadCell>
                                    <span className="sr-only">Edit</span>
                                </TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="divide-y">
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </TableCell>
                                <TableCell>Sliver</TableCell>
                                <TableCell>Laptop</TableCell>
                                <TableCell>$2999</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </TableCell>
                                <TableCell>White</TableCell>
                                <TableCell>Laptop PC</TableCell>
                                <TableCell>$1999</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                                <TableCell>Black</TableCell>
                                <TableCell>Accessories</TableCell>
                                <TableCell>$99</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </main>

            <footer>
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
                </div>

            </footer>

        </div>);
}

export default Patients;