import styled from "styled-components";

export const WrapperAddListButton = styled.div`
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 30px;
  flex-direction: row;
  margin-left: 10px;
  padding-left: 10px;
  width: 250px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export const ActionButtonText = styled.p`
  padding-left: 5px;
`;
