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
  Code,
  Slide,
  Text
} from "spectacle";

export const Setup =
  <Slide>
    <Heading size={4} margin="0 0 1em 0">Setup</Heading>
    <Text>Download .NET Core 2.0 SDK <Link>https://www.microsoft.com/net/download/core</Link></Text>
    <Text>Comes with templates for Angular, React and React / Redux</Text>
    <Text><Code>dotnet new reactredux</Code></Text>
    <Code>dotnet restore && npm install</Code>
  </Slide>;
