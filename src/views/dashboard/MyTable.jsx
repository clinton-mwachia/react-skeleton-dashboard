import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const MyTable = () => {
  const data = [
    {
      from: "inches",
      to: "millimetres (mm)",
      multiplier: 25.4,
    },
    {
      from: "feet",
      to: "centimetres (cm)",
      multiplier: 30.48,
    },
    {
      from: "yards",
      to: "metres (m)",
      multiplier: 0.91444,
    },
  ];
  return (
    <TableContainer>
      <Table size="sm">
        <TableCaption>Table Caption</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        {data.map((dt, index) => (
          <Tbody key={index}>
            <Tr>
              <Td>{dt.from}</Td>
              <Td>{dt.to}</Td>
              <Td isNumeric>{dt.multiplier}</Td>
            </Tr>
          </Tbody>
        ))}
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
