import { Box, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useProduct } from "./contexts/products_context";

function App() {
  const [productState] = useProduct()
  const { allProducts } = productState

  return (
    <Box display="flex" flexDir="column" alignItems="center" my={16}>
      <VStack spacing={4}>
        <Text align="center">Vending Spot</Text>
        <Box>
          <Table variant="striped" colorScheme="purple">
            <TableCaption>
              Product List
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Item</Th>
                <Th>Description</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                allProducts && allProducts?.map(({ id, name, description, price }) => {
                  return (
                    <Tr key={id}>
                      <Td>{name}</Td>
                      <Td>{description}</Td>
                      <Td>{new Intl.NumberFormat(
                        'en-US', { style: 'currency', currency: 'USD' }
                      ).format(price)}</Td>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
