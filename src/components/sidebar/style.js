import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.3);
  width: 300px;
  max-height: 90%;
  top: 3%;
  left: 2%;
  overflow-y: auto;
  z-index: 1;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c7c8ca;
  }
`;

export const BoxDev = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  position: relative;
  min-height: 75px;
  div {
    display: flex;
    justify-content: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 15px;
      h1 {
        font-size: 0.9em;
      }
      small {
        font-size: 11px;
      }
    }
  }
  div {
    button {
      display: flex;
      justify-content: flex-end;
      border: 0;
      background: #fff;
      &:hover {
        cursor: pointer;
      }
      i.fa-times {
        color: #ff4c4c;
      }
      i.fa-map-marker-alt {
        margin-right: 12px;
        color: #666666;
      }
    }
    &:not(:last-child) {
      &:after {
        content: '';
        margin: 0 auto;
        width: 87%;
        height: 1px;
        position: absolute;
        background-color: #f3f4f7;
        bottom: 0;
        left: 20px;
      }
    }
  }
`;
