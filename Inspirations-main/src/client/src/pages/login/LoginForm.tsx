import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useMutation } from "react-query";
import { DataContext } from "../../context/AppContext";
import { LoginButton } from "../../components/buttons/login-button";

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";

interface LoginFormData {
  email: string;
  password: string;
  [key: string]: string;
}

interface LoginResponse {
  data: {
    success: boolean;
    name: string;
  };
}

type ErrorResponse = {
  response: {
    data: {
      message?: string;
    };
  };
};

function LoginForm() {
  const {
    setIsAuthenticated,
    setUserName,
    navigate,
    errorResponse,
    setErrorResponse,
    isAuthenticated,
  } = useContext(DataContext);

  if (isAuthenticated) navigate("/");

  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const loginMutation = useMutation(
    (loginFormData: LoginFormData) =>
      axios.post<ErrorResponse, LoginResponse>("/api/login", loginFormData, {
        withCredentials: true,
      }),
    {
      onSuccess: (response) => {
        setIsAuthenticated(true);
        setUserName(response.data.name);
        navigate("/");
      },
      onError: (error: ErrorResponse) => {
        setErrorResponse(error.response.data.message || "");
      },
    }
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginMutation.mutateAsync(loginFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        {/* Left: Form */}
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                id="email"
                name="email"
                value={loginFormData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                value={loginFormData.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.500"}>Forgot password?</Text>
              </Stack>
              <Button
                rounded="full"
                px={8}
                py={6}
                fontSize="md"
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, cyan.400)"
                _hover={{ bgGradient: "linear(to-r, blue.500, cyan.500)" }}
                type="submit"
              >
                Sign in
              </Button>
              {!isAuthenticated && <LoginButton />}
              {loginMutation.isLoading && <div>Loading...</div>}
              {loginMutation.isError && <div>Error: {errorResponse}</div>}
              {errorResponse && <div>Error: {errorResponse}</div>}
            </Stack>
          </Stack>
        </Flex>

        {/* Right: Illustration/Image (replace src with your chosen Unsplash image) */}
        <Flex flex={1} align="center" justify="center" p={{ base: 6, md: 8 }} bg="blue.50">
          <Image
            alt="Login Illustration"
            objectFit="contain"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            borderRadius="xl"
            shadow="lg"
            width={{ base: "300px", sm: "400px", md: "500px", lg: "600px" }}
            height="auto"
          />

        </Flex>
      </Stack>
    </form>
  );
}

export default LoginForm;