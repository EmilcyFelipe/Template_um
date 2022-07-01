import React from "react";

import { Container } from "./styles";

export default function ServiceModel({ children, description }) {
  return (
    <Container>
      {children}
      <p>{description}</p>
    </Container>
  );
}
