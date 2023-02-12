# string-template

~~~~~ sh
npm install e53e04ac/string-template
~~~~~

~~~~~ mjs
import { StringTemplate } from 'e53e04ac/string-template';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/b3a7678f84ede6ae2111a8802360b326a57d3ef2";
  click B_1 "https://github.com/e53e04ac/hold/tree/b0b5ef032800af76c6e7ae27472dbf25a04a947d";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/string-template";
    E_0(["StringTemplate"]);
  end;
  M(["index.mjs"])
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/string-template";
    E_0(["type StringTemplate"]);
    E_1(["const StringTemplate"]);
  end;
  M(["index.d.ts"])
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_1_0(["Get"]);
    I_1_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
