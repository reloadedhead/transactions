import { createStyles, Divider, List, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Transaction } from '../../types';
import TransactionListItem from './item';

const mockTransactions: Transaction[] = [
  {
    title: 'Dropbox Plan',
    category: 'Subscription',
    subCategory: 'dropbox',
    amount: 144.0,
    timestamp: new Date('2019-09-18'),
    type: 'expense',
  },
  {
    title: 'Spotify Subscr.',
    category: 'Subscription',
    subCategory: 'music',
    amount: 24.0,
    timestamp: new Date('2019-09-12'),
    type: 'expense',
  },
  {
    title: 'ATM Withdrawal',
    category: 'Cash Withdraw',
    subCategory: 'atm',
    amount: 32.0,
    timestamp: new Date('2019-09-10'),
    type: 'expense',
  },
  {
    title: 'KFC Restaurant',
    category: 'Food & Drink',
    amount: 14.0,
    subCategory: 'fastfood',
    timestamp: new Date('2019-09-06'),
    type: 'expense',
  },
  {
    title: 'Tax on Interest',
    category: 'Tax & Bill',
    subCategory: 'interest',
    amount: 1.0,
    timestamp: new Date('2019-09-04'),
    type: 'expense',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 8,
      marginRight: 24,
      marginLeft: 24,
      marginTop: 8,
    },
  })
);

const Transactions = () => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {mockTransactions.map((t, i) => (
        <>
          <TransactionListItem transaction={t} />
          {i < mockTransactions.length - 1 && <Divider variant="middle" component="li" />}
        </>
      ))}
    </List>
  );
};

export default Transactions;
