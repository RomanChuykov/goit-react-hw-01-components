import styled from "styled-components";
export const Friend = styled.li`
  padding: 10px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;

  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Online = styled.div`
  position: relative;

  width: 20px;
  height: 20px;

  background-color: green;
  border-radius: 50%;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 20px;
    height: 20px;

    background-color: green;
    border-radius: 50%;
    opacity: 0.7;
    
  }
`;

export const Offline = styled.div`
  width: 20px;
  height: 20px;

  background-color: red;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #858585;
  text-shadow:-2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;