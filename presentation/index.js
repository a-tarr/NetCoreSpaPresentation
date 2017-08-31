// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck } from "spectacle";

// Slides
import { Slide0 } from './0';
import { Agenda } from './1';
import { Setup } from './2';
import { Setup2 } from './3';
import { HMR } from './4';
import { Debug } from './5';
import { ServerSideRendering } from './6';
import { NodeServices } from './7';
import { NodeServices2 } from './8';
import { Links } from './9';

// Import theme
//import createTheme from "spectacle/lib/themes/default";
import theme from "../themes/formidable/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

export default class Presentation extends React.Component {
  render() {
    return <Deck progress="none" theme={theme} transition={["fade"]} transitionDuration={500} controls={false}>
        {Slide0}
        {Agenda}
        {Setup}
        {Setup2}
        {HMR}
        {Debug}
        {ServerSideRendering}
        {NodeServices}
        {NodeServices2}
        {Links}
      </Deck>;
  }
}
