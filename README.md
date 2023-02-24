# string-template

~~~~~ sh
npm install e53e04ac/string-template
~~~~~

~~~~~ mjs
import { StringTemplate } from 'string-template';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\n1c42c278687d626fd9dbc9da241e899e482bac0d"]);
    C_1(["e53e04ac/hold\nccd6d335b2be61f30045be782b2129d08a53ac67"]);
  end;
  subgraph "npmjs";
    C_2(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/1c42c278687d626fd9dbc9da241e899e482bac0d";
  click C_1 "https://github.com/e53e04ac/hold/tree/ccd6d335b2be61f30045be782b2129d08a53ac67";
  click C_2 "https://www.npmjs.com/package/@types/node/v/18.14.1";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/string-template";
    E_0(["namespace StringTemplate"]);
    E_1(["type StringTemplate"]);
    E_2(["const StringTemplate"]);
  end;
  M["index.d.ts"]
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
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/string-template";
    E_0(["StringTemplate"]);
  end;
  M["index.mjs"]
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
