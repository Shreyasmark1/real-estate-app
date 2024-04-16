import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"

type PropertyListProps = {
    list: any[]
}

function PropertyList({ list }: PropertyListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Properties</CardTitle>
                <CardDescription>
                    Manage your properties and view theirs performance.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">img</span>
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">Views</TableHead>
                            <TableHead className="hidden md:table-cell">Leads</TableHead>
                            <TableHead className="hidden md:table-cell">Created at</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {
                            list.map((_item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                        <img
                                            alt="Product img"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="/placeholder.svg"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Laser Lemonade Machine
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">Draft</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">10</TableCell>
                                    <TableCell className="hidden md:table-cell">2</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-07-12 10:42 AM
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Preview</DropdownMenuItem>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <Link to={"/property/id/stats"}><DropdownMenuItem>Leads</DropdownMenuItem></Link>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                <DropdownMenuItem>Share</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}

export { PropertyList }
