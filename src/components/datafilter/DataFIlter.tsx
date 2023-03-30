import {
  Box,
  Center,
  Flex,
  FormLabel,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import React from "react";

const DataFIlter = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      w="100%"
    >
      <Box flex={1}>
        <Center
          flexDirection={"column"}
          w={{ base: "97%", lg: "90%" }}
          mb={1}
          h="100%"
        >
          <FormLabel alignSelf={"flex-start"}>Filter Customers</FormLabel>
          <InputGroup w="100%">
            <Select
              required
              // value={destination}
              placeholder="-Select-"
              // onChange={(e) => setDestination(e.target.value)}
              w={{ base: "50%", lg: "30%" }}
              size="lg"
            >
              <option
                value={10}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                10
              </option>
              <option
                style={{
                  backgroundColor: "blue",
                  color: "white",
                }}
                value={20}
              >
                20
              </option>
            </Select>
          </InputGroup>
        </Center>
      </Box>
      <Box w="100%" flex={1} display="flex" justifyContent={"flex-end"}>
        <Center
          display="flex"
          justifyContent={"flex-end"}
          flexDirection={"column"}
          w={{ base: "97%", lg: "90%" }}
          mb={1}
          h="100%"
        >
          <FormLabel alignSelf={"flex-end"}>Select Date</FormLabel>
          <InputGroup
            w="100%"
            alignSelf={"flex-end"}
            alignContent="flex-end"
            justifyContent={"flex-end"}
          >
            <Select
              required
              // value={destination}
              placeholder="-Select-"
              // onChange={(e) => setDestination(e.target.value)}
              w={{ base: "50%", lg: "30%" }}
              size="lg"
            >
              <option
                value={10 / 11 / 2023}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                10/11/2023
              </option>
              <option
                style={{
                  backgroundColor: "blue",
                  color: "white",
                }}
                value={10 / 11 / 2023}
              >
                10/11/2023
              </option>
            </Select>
          </InputGroup>
        </Center>
      </Box>
    </Flex>
  );
};

export default DataFIlter;
