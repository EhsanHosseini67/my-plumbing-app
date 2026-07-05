import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Text,
  Preview,
  Container,
  Link,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({
  name,
  email,
  phone,
  city,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
