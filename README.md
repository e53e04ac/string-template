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
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/964765f7141bb2ab94b8dc1b5c41323a8b8ab1e3";
  click B_1 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
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
