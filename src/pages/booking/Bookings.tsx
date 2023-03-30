import {
  AttachMoney,
  BookOnline,
  CalendarMonth,
  Class,
  CurrencyBitcoin,
  LocalLibrary,
  Note,
  School,
  SupervisedUserCircle,
} from "@mui/icons-material";
import {
  Box,
  Text,
  Center,
  Flex,
  Heading,
  WrapItem,
  Select,
  InputGroup,
  FormLabel,
} from "@chakra-ui/react";

import {
  FaBus,
  FaPlay,
  FaSafari,
  FaServicestack,
  FaTicketAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import BookinsTable from "../../components/table/BookinsTable";
import DataFIlter from "../../components/datafilter/DataFIlter";

const Bookings = () => {
  return (
    <Box
      w="100%"
      h="100%"
      boxShadow="md"
      px={{ base: 1, md: 10, lg: 20 }}
      py={5}
    >
      <Flex
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        justify="space-between"
        h={70}
        p={5}
        my={3}
      >
        <Box display={"flex"}>
          <Heading as={"h5"} color={"darkblue"}>
            Welcome
          </Heading>
          <Text fontWeight={'bold'}>Username</Text>
        </Box>
        <Box display={"flex"} alignItems="center" gap={2}>
          <Text fontWeight="bold" fontSize={14}>
            Dashboard
          </Text>
        </Box>
      </Flex>
      <Flex
        p={4}
        w="100%"
        h="100%"
        gap={3}
        flexWrap="wrap"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"teal"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaUsers style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Customers
              </Text>
              <Heading as="h2">44</Heading>
            </Flex>
          </Center>
        </WrapItem>
        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"teal"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <BookOnline style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Bookings
              </Text>
              <Heading as="h2">44</Heading>
            </Flex>
          </Center>
        </WrapItem>

        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"darkblue"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaBus style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Buses
              </Text>
              <Heading as="h2">22</Heading>
            </Flex>
          </Center>
        </WrapItem>

        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"tomato"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaServicestack style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Seats
              </Text>
              <Heading as="h2">56</Heading>
            </Flex>
          </Center>
        </WrapItem>
      </Flex>

      <Flex
        p={4}
        w="100%"
        h="100%"
        gap={3}
        flexDirection={{ base: "column", md: "row" }}
      >
        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"teal"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <CalendarMonth style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Date
              </Text>
              <Heading fontSize={30} as="h2">{`${new Date().getDate()}/${
                new Date().getMonth() + 1
              }/${new Date().getFullYear()}`}</Heading>
            </Flex>
          </Center>
        </WrapItem>

        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"darkblue"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaTicketAlt style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Availability
              </Text>
              <Heading as="h2">45</Heading>
            </Flex>
          </Center>
        </WrapItem>

        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"teal"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <LocalLibrary style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Routes
              </Text>
              <Heading as="h2">2</Heading>
            </Flex>
          </Center>
        </WrapItem>

        <WrapItem
          boxShadow={"base"}
          flex={1}
          gap={2}
          flexDirection={"column"}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Center flexDirection={"row"} w="100%" h="100%" boxShadow={"base"}>
            <Flex
              bgColor={"teal"}
              w={"30%"}
              h={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <AttachMoney style={{ color: "white", fontSize: 60 }} />
            </Flex>
            <Flex
              p={3}
              w={"70%"}
              h={"100%"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={20} fontWeight="bold" color={"gray"} mb={3}>
                Amount Collected
              </Text>
              <Box fontSize={30} fontWeight={500}>
                5000,000/=
              </Box>
            </Flex>
          </Center>
        </WrapItem>
      </Flex>

      {/* Filtering table data */}

      <Box>
        <DataFIlter />
      </Box>

      <Flex>
        <BookinsTable />
      </Flex>
    </Box>
  );
};

export default Bookings;
