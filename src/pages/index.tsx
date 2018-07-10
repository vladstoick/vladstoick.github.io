import * as React from "react";
import { Column } from "../components/grid";

const IndexPage = () => {
  return (
    <Column>
      <h2>👋 Hi</h2>
      <p>
        I am a Software Engineer based in London 🇬🇧. I have graduated from{" "}
        <b>King's College London</b> (BSc in Computer Science with Management)
        in 2018 with a First degree. I am currently on holiday until August when
        I will start to work at <b>Facebook London</b>.
      </p>
      <p>
        I have previously worked at{" "}
        <a href="https://wonderbly.com">
          <b>Wonderbly</b>
        </a>{" "}
        (or Lostmy.name as it was previously called) as a Backend engineer for
        almost 3 years during my studies.
      </p>
    </Column>
  );
};

export default IndexPage;
