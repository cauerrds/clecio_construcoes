import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--smoothblue);
  width: 100%;
  height: 80px;
  padding: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--snowWhite);
    font-size: 36px;
  }
`;

export const MenuContainer = styled.div`
  svg {
    height: 36px;
    width: 36px;
  }
`;
