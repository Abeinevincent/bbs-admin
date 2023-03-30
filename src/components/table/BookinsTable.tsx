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

const BookinsTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Today's Analytics</TableCaption>
        <Thead>
          <Tr>
            <Th>ID No.</Th>
            <Th>Ticket No.</Th>
            <Th>Leaving From</Th>
            <Th>Date Booked</Th>
            <Th>Time Booked</Th>
            {/* <Th>To convert</Th> */}
            <Th>No. of Passengers</Th>
            <Th>Seat Number(s)</Th>
            <Th>Phone</Th>
            <Th>Bus</Th>
            <Th>Payment Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
            <Tr>
              <Td>af124d334g5f5445f45</Td>
              <Td>1345</Td>
              <Td>Mbra - Kla</Td>
              <Td>12/12/2023</Td>
              <Td>12:20 pm</Td>
              <Td>45</Td>
              <Td>1, 2</Td>
              <Td>0779923404</Td>
              <Td>GA03</Td>
              <Td>Successful</Td>
              {/* <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BookinsTable;
