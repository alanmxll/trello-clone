import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: 45px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    cursor: pointer;
    opacity: 0.7;

    :hover {
      opacity: 1;
    }
  }

  div.menu-buttons {
    display: flex;
    justify-content: space-around;

    div.button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      margin-left: 5px;
      border-radius: 2px;
      background-color: rgba(0, 0, 0, 0.25);
      cursor: pointer;

      :hover {
        background-color: rgba(0, 0, 0, 0.35);
      }

      :active {
        background-color: rgba(0, 0, 0, 0.5);
      }

      p {
        color: #fff;
        margin-left: 5px;
        font-size: 14px;
        font-weight: bold;
      }
    }

    div.textarea {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12rem;
      padding: 0 10px;
      margin-left: 5px;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 2px;

      textarea {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        color: #fff;
        resize: none;
        cursor: text;
      }
    }
  }
`;
