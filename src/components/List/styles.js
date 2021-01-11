import styled from "styled-components";

export const Container = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  height: max-content;
  padding: 0 8px;
  margin: 5px;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 600;
      font-size: 14px;
      padding: 0 10px;
    }
  }

  div.action-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      height: 30px;
      border-radius: 5px;
      border: 0;
      background: transparent;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 5px;
      cursor: pointer;
      :hover {
        background: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.75);
      }
    }

    button.add-card-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 270px;
      font-size: 14px;
      padding-left: 10px;
    }

    button.create-from-template {
      width: 30px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;