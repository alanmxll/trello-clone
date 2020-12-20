import styled from "styled-components";

export const WrapperTrelloList = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  width: 250px;
  height: max-content;
  padding: 8px;
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }
`;

export const TrelloListTitle = styled.h4`
  color: #172b4d;
  margin-top: 8px;
  margin-bottom: 10px;
  margin-left: 8px;
`;
