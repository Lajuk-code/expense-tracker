import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles'
import { useContext } from 'react';

const List = () => {
    const classes=useStyles();

    const{deleteTransaction,transactions } =useContext(ExpenseTrackerContext);

    // const transactions=[
    //   {id:1, type:"Income", catagory:"Salary", amount: 8000, date:"Today"},
    //   {id:2, type:"Expense", catagory:"Pets", amount: 100, date:"Today"},
    //   {id:3, type:"Expense", catagory:"Food", amount: 500, date:"Today"},
    //   {id:4, type:"Income", catagory:"Business", amount: 5000, date:"Today"}
    // ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction)=>(
        <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type==='Income'?classes.avatarIncome:classes.avatarExpense}>
                <MoneyOff/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label='delete' onClick={()=>deleteTransaction(transaction.id)}>
                  <Delete/>
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}      
    </MUIList>
  )
}

export default List
