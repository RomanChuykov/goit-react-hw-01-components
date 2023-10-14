import styled from "styled-components";
export const ProfileCard = styled.div`
  margin: 40px auto;
  padding: 20px;

  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ebf5fc;
  border-radius: 10px;
  box-shadow:-2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  margin-bottom: 25px;

  text-align: center;
  color:  #858585;
`;

export const Avatar = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  width: 150px;
  display: block;

  border-radius: 50%;
  box-shadow: inset -2px -2px 5px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.p`
  margin-bottom: 7px;

  font-size: 28px;
  font-weight: 700;
  color: #6a9bd8;

  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);`

export const Tag = styled.p`
  margin-bottom: 7px;

  font-size: 18px;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);`

export const Location = styled.p`
  font-size: 18px;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);`

export const StatsList = styled.ul`
  margin: 0 auto;
  padding: 10px;

  width: 100%;

  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  border-radius: 10px;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.333%;
  gap: 7px;
`;

export const Label = styled.span`
  font-weight: 500;
  color:  #858585;

  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: #6a9bd8;

  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
