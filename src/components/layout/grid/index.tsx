import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const CentredRow = styled(Row)`
  justify-items: center;
  width: 100%;
`;

export const Column = styled(Row)`
  display: flex;
  flex-direction: column;
`;
