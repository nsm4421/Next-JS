"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppendixState } from "@/store/appendix-store";

export function DisplayCoverages() {
  const { coverages } = useAppendixState();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">A</TableHead>
          <TableHead className="text-center">B</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coverages.map((coverage, idx) => (
          <TableRow key={idx}>
            <TableCell>
              {coverage.left.map((c) => (
                <li key={c.code} className="text-lg">
                  {c.name}
                  <br />
                </li>
              ))}
            </TableCell>
            <TableCell>
              {coverage.right.map((c) => (
                <li key={c.code} className="text-lg">
                  {c.name}
                  <br />
                </li>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
