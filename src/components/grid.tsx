import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const CentredRow = Row.extend`
  justify-items: center;
`;

export const Column = Row.extend`
  flex-direction: column;
`;
