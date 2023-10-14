import styled from "styled-components";
export const Container = styled.section`
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 20px;
  width: 350px;

  background-color: #ebf5fc;
  border-radius: 10px;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: var(--accent);
  text-transform: uppercase;

  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 5);
`;

export const Label = styled.span`
  font-weight: 500;

  color: #858585;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Percentage = styled.span`
  font-weight: 700;

  color:  #6a9bd8;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
