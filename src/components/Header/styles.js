import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: 45px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    align-self: center;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
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
      border-radius: 5px;
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
  }
`;
