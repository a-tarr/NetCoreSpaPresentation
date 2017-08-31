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
  Text,
  Appear
} from "spectacle";

export const Debug =
  <Slide>
    <Heading size={4} margin="0 0 1em 0">Debugging</Heading>
    <Text>Debug through browser or IDE</Text>

    <Appear>
      <div>
        <Text>aspnet/DotNetTools</Text>
        <Text>https://github.com/aspnet/DotNetTools</Text>
        <Text><Code>dotnet watch run</Code></Text>
        <Text><Code>dotnet watch test</Code></Text>
      </div>
    </Appear>

  </Slide>;
