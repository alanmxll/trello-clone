import styled from "styled-components";

export const WrapperAddCardButton = styled.div`
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
  padding-left: 10px;
  width: 225px;
  &:hover {
    background-color: rgba(158, 158, 158, 0.5);
  }
`;

export const WrapperCreateFromTemplateButton = styled.div`
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

export const ActionButtonText = styled.p`
  padding-left: 5px;
`;

export const WrapperInputField = styled.div``;

export const TextAreaInputCardName = styled.textarea`
  resize: none;
  width: 245px;
  height: 40px;
  border-radius: 4px;
`;

export const WrapperActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const AddCardOnBoardButton = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  background-color: #5aac44;
  color: #fff;
  cursor: pointer;
  width: 80px;
  min-height: 32px;
  height: 32px;
  margin-left: 0px;
  margin-right: 10px;
`;
