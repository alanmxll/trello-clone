import styled from "styled-components";

export const WrapperAddListButton = styled.div`
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  display: flex;
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

export const WrapperInputField = styled.div`
  margin-left: 10px;
  background-color: #fff;
  height: max-content;
`;

export const TextAreaInputListName = styled.textarea`
  resize: none;
  width: 250px;
  height: 40px;
  border-radius: 4px;
  margin: 5px;
`;

export const WrapperActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddListOnBoardButton = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  background-color: #5aac44;
  color: #fff;
  cursor: pointer;
  width: 80px;
  min-height: 32px;
  height: 32px;
  margin: 5px;
  margin-right: 10px;
`;
