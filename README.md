# string-template

~~~~~ sh
npm install e53e04ac/string-template
~~~~~

~~~~~ mjs
import { StringTemplate } from 'e53e04ac/string-template';
~~~~~

~~~~~ mermaid
graph LR;
  A(["string-template"]);
  B0(["e53e04ac/event-emitter"]);
  B1(["e53e04ac/hold"]);
  C0(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/event-emitter";
  click B1 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/string-template";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
