import styled from 'styled-components';

export const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
`;

export const ContentModal = styled.div`
  position: relative;
  width: 350px;
  height: auto;
  background-color: #fff;

  border-radius: 5px;
  .content {
    text-align: center;
    padding: 30px;
    color: #333333;
    input {
      padding: 8px;
      width: 100%;
      margin: 15px 0 15px 0;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 15px;
      color: #333333;
    }
    h2 {
      text-transform: capitalize;
    }
  }
`;

export const FooterModal = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding-top: 10px;
`;

export const Button = styled.button`
  position: relative;
  padding: 10px 30px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  overflow: hidden;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  &.success {
    margin-right: 5px;
    background-color: #2ecc71;
  }
  &.danger {
    background-color: #d7dcdd;
    color: #7b868a;
  }
`;
