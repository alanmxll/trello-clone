import styled from "styled-components";

export const WrapperTrelloActionButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: max-content;
`;

export const WrapperAddButton = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 30px;
  flex-direction: row;
  width: 225px;
  &:hover {
    background-color: rgba(158, 158, 158, 0.5);
  }
`;

export const WrapperAddButtonIcon = styled.div`
  align-items: center;
  display: flex;
  padding: 5px;
`;

export const WrapperCreateFromTemplateIconButton = styled.div`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: max-content;
  margin-left: 4px;
  padding: 10px;
  height: 10px;
  &:hover {
    background-color: rgba(158, 158, 158, 0.5);
  }
`;

export const ActionButtonText = styled.p``;

/**
 * buttonTextOpacity = list ? 1 : 0.5;
 * buttonTextColor = list ? "white" : "inherit";
 * buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
 */
