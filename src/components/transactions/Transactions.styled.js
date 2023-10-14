import styled from "styled-components";
export const Transacrions = styled.table`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;

  width: 350px;

  background-color: var(--bg);

  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const TableHeader = styled.thead`
  margin-bottom: 20px;

  width: 100%;
  display: block;

  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const HeaderRow = styled.tr`
  padding: 15px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.th`
  /* flex-basis: 33.333%; */

  font-weight: 700;
  font-size: 24px;
  color: var(--accent);
  text-align: left;

  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const TableBody = styled.tbody`
  width: 100%;
  display: block;
`;

export const BodyRow = styled.tr`
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const BodyValue = styled.td`
  padding: 10px;

  flex-basis: 33.333%;

  font-weight: 500;
  color: #858585;

  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
