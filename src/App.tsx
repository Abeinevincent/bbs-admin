import { Box } from "@chakra-ui/react";
import { Footer } from "./components/footer/Footer";
import Bookings from "./pages/booking/Bookings";

function App() {
  return (
    <Box>
      <Bookings />
      <Footer />
    </Box>
  );
}

export default App;
