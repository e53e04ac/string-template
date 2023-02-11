# string-template

~~~~~ sh
npm install e53e04ac/string-template
~~~~~

~~~~~ mjs
import { StringTemplate } from 'e53e04ac/string-template';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/string-template"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_1 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/string-template"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "event-emitter"
    D0(["EventEmitter"]);
  end;
  subgraph "hold"
    D1(["hold"]);
    D2(["unwrap"]);
    D3(["Get"]);
    D4(["ValueOrGet"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D0 --import--> C1;
  D3 --import--> C1;
  D4 --import--> C1;
~~~~~
