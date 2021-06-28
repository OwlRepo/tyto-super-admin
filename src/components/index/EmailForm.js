import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import EmailFormStyles from "../index/style-props/EmailFormStyles";
export default function EmailForm() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  function UpdateEmailValue({ value }) {
    setEmail(value);
  }

  function ValidateEmail() {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      toast({
        title: "Verification code sent to email 📥",
        description: "The verification code was sent to your email",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Invalid Input 🤔",
        description: "It looks like you've entered an invalid email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  return (
    <FormControl>
      <FormLabel {...EmailFormStyles.formLabel}>Email</FormLabel>
      <Input
        {...EmailFormStyles.formEmailInputField}
        onChange={(value) => UpdateEmailValue({ value: value.target.value })}
      />
      <FormHelperText {...EmailFormStyles.formHelperText}>
        We'll never share your email.
      </FormHelperText>
      <br />
      <Button
        {...EmailFormStyles.formSubmitButton}
        onClick={() => ValidateEmail()}
      >
        SUBMIT
      </Button>
    </FormControl>
  );
}
