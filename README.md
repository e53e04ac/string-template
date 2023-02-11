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
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_1 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "event-emitter";
    B_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_1_0(["hold"]);
    B_1_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "event-emitter";
    B_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_1_0(["Get"]);
    B_1_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
~~~~~
