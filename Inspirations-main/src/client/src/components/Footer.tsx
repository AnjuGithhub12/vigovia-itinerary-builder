import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import VigoviaLogo from "../assets/ChatGPT Image Oct 15, 2025, 09_38_43 PM.png";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blue.100", "blue.200")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"all 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blue.200", "blue.300"),
        transform: "scale(1.1)",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => (
  <Text
    fontWeight="700"
    fontSize="lg"
    mb={3}
    color="gray.800"
    textTransform="uppercase"
    letterSpacing="wide"
  >
    {children}
  </Text>
);

export default function Footer() {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-b, #f0f8ff, #e0f7ff)" // soft white to very light blue
      color="gray.800"
      py={12}
      px={{ base: 6, md: 12 }}
    >

      <Container as={Stack} maxW={"7xl"} spacing={8}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={10}
          justifyContent="space-between"
        >
          {/* Brand */}
          <Stack align={{ base: "center", md: "flex-start" }} spacing={5}>
            <Box
              as="a"
              href="https://www.linkedin.com/company/vigovia/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={VigoviaLogo}
                alt="Vigovia Logo"
                style={{
                  height: "120px", // Increased size
                  width: "auto",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Box>
            <Text fontSize="sm" opacity={0.8}>
              © 2025 Vigovia Travel Technologies Pvt. Ltd. 
            </Text>
          </Stack>

          {/* Company */}
          <Stack align={{ base: "center", md: "flex-start" }}>
            <ListHeader>Company</ListHeader>
            <Link href="/about" _hover={{ textDecoration: "underline" }} color="blue.600">
              About Us
            </Link>
            <Link href="/careers" _hover={{ textDecoration: "underline" }} color="blue.600">
              Careers
            </Link>
            <Link href="/blog" _hover={{ textDecoration: "underline" }} color="blue.600">
              Our Blog
            </Link>
            <Link href="/partners" _hover={{ textDecoration: "underline" }} color="blue.600">
              Partnerships
            </Link>
          </Stack>

          {/* Resources */}
          <Stack align={{ base: "center", md: "flex-start" }}>
            <ListHeader>Resources</ListHeader>
            <Link href="/planner" _hover={{ textDecoration: "underline" }} color="blue.600">
              AI Trip Planner
            </Link>
            <Link href="/destinations" _hover={{ textDecoration: "underline" }} color="blue.600">
              Top Destinations
            </Link>
            <Link href="/community" _hover={{ textDecoration: "underline" }} color="blue.600">
              Community
            </Link>
            <Link href="/faq" _hover={{ textDecoration: "underline" }} color="blue.600">
              FAQs
            </Link>
          </Stack>

          {/* Connect */}
          <Stack align={{ base: "center", md: "flex-start" }}>
            <ListHeader>Connect</ListHeader>
            <Stack direction="row" spacing={4}>
              <SocialButton label="Instagram" href="https://www.instagram.com/">
                <FaInstagram />
              </SocialButton>
              <SocialButton label="Twitter" href="https://twitter.com/">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="LinkedIn" href="https://linkedin.com/">
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Divider borderColor="gray.300" />

        <Text textAlign="center" fontSize="sm" opacity={0.8}>
          Made For Vigovia — Explore. Plan. Go.
        </Text>
      </Container>
    </Box>
  );
}
