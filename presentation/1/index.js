import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

export const WifiSlide = (
  <Slide bgColor="white">
    <Heading size={3}>WiFi</Heading>
    <Layout>
      <Fill>
        <Text textFont="monospace">Network</Text>
        <Text>Foundry</Text>
      </Fill>
      <Fill>
        <Text textFont="monospace">Password</Text>
        <Text>foundry98103</Text>
      </Fill>
    </Layout>
    <Text style={{ marginBottom: 0 }}>
      <Link href="https://twitter.com/seattlejs">
        @SeattleJS
      </Link>
    </Text>
  </Slide>
);
