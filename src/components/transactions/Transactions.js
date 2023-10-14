import React from 'react'
import {
  Transacrions,
  TableHeader,
  HeaderRow,
  HeaderTitle,
  TableBody,
  BodyRow,
  BodyValue,
} from './Transactions.styled';
export const Transactions = ({transactions}) => {
  return (
    <Transacrions>
    <TableHeader>
      <HeaderRow>
        <HeaderTitle>Type</HeaderTitle>
        <HeaderTitle>Amount</HeaderTitle>
        <HeaderTitle>Currency</HeaderTitle>
      </HeaderRow>
    </TableHeader>

    <TableBody>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <BodyRow key={id}>
            <BodyValue>{type}</BodyValue>
            <BodyValue>{amount}</BodyValue>
            <BodyValue>{currency}</BodyValue>
          </BodyRow>
        );
      })}
    </TableBody>
  </Transacrions>
  )
}
