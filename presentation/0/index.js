import React from "react";
import {
  Heading,
  Slide,
  Text,
  Link,
  Image
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  logoTwitter: require("../../assets/logo-twitter.svg")
};

preloader(images);

export const Slide0 = (
  <Slide>
    <Heading size={4} margin="0 0 1em 0">.NET Core 2.0 and Single Page Applications</Heading>
    <Text>Follow along at: http://bit.ly/netcore2spa</Text>
    <Text>Originally presented by Steve Sanderson @ NDC Sydney 2017</Text>
    <Text style={{ marginTop: 0 }}>
            <Image
              height="1.5em"
              src={images.logoTwitter}
              style={{ verticalAlign: "middle", borderRadius: "5px", marginRight: "10px" }}
              bgColor="#4099FF"
            />
            @stevensanderson
        </Text>
  </Slide>
);
