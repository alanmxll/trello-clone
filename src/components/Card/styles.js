import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 550;
    line-height: 20px;
  }

  #p-members {
    background: #dfe1e6;
    border-radius: 20px;
    padding: 5px;
    margin-top: 8px;
    color: rgb(0, 0, 75);
  }

  #div-members {
    height: 32px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding-top: 31px;
      border-radius: 4px;
      background: #dfe1e6;
      box-shadow: none;
      cursor: grabbing;

      p,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 40px;
  height: 8px;
  border-radius: 4px;
  display: inline-block;
  background: ${(props) => props.color};
`;
