import React from 'react'

const InfoCard = () => {

  var isIncome=Math.floor(Math.random() * 10);;

  return (
    <div style={{textAlign:'center', padding:'0 10%'}}>
      Try Saying: <br/>
      Add {isIncome>5?'Income' : 'Expense'}{" "}  
      for {isIncome>5?'$100':'$50'}{" "} 
      in catagory {isIncome>5?'Business':"House"}{" "} 
      for {isIncome>5?'Monday':'Thursday'}.
    </div>
  )
}

export default InfoCard
