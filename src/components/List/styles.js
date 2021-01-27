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
    div.header-options {
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      :hover {
        background-color: rgba(80, 80, 80, 0.1);
        border-radius: 4px;
      }
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
      cursor: pointer;
    }

    button.create-from-template {
      width: 30px;
      cursor: pointer;
    }
  }

  div.textarea {
    textarea {
      width: 300px;
      min-width: 300px;
      max-width: 300px;
      height: 50px;
      min-height: 50px;
      max-height: 80px;
      padding: 5px;
      border-radius: 4px;
      border-top: 1px solid rgba(100, 100, 100, 0.2);
      border-right: 1px solid rgba(100, 100, 100, 0.2);
      border-left: 1px solid rgba(100, 100, 100, 0.2);
      border-bottom: 1px solid rgba(80, 80, 80, 0.5);
    }

    div.actions {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;

      div.actions-divider {
        display: flex;

        button.add-card {
          width: 5rem;
          height: 2rem;
          margin-right: 5px;
          margin-bottom: 5px;
          background-color: #5aac44;
          color: #fff;
          font-size: 14px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button.cancel {
          width: 2rem;
          height: 2rem;
          border: none;
          background-color: #ebecf0;
          cursor: pointer;
        }
      }

      div.options {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        margin-right: 5px;
        cursor: pointer;

        :hover {
          background-color: rgba(80, 80, 80, 0.1);
          border-radius: 4px;
        }
      }
    }
  }

  ul {
    margin-top: 30px;
  }
`;
