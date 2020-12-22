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
  margin-left: 4px;
  padding: 10px;
  width: 12px;
  height: 10px;
  &:hover {
    background-color: rgba(158, 158, 158, 0.5);
  }
`;

export const ActionButtonText = styled.p``;

export const WrapperTextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddCardOrColumnTextArea = styled.textarea`
  width: 240px;
  height: 50px;
`;

export const AddCardOrColumnButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 5px;
  background-color: #5aac44;
  color: white;
  border: 1px solid;
  border-radius: 5px;
`;

/**
 * buttonTextOpacity = list ? 1 : 0.5;
 * buttonTextColor = list ? "white" : "inherit";
 * buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
 */
