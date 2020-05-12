import Router from 'next/router'


export const MenuItems = {
    Coffe:["All","PIZZA","STEAK"] ,
    Foods:["All Food"],
    Discount:[],
    Search:[]
}


export const forwardTo = (location , status) => {
    Router.push({
        pathname: location,
        query: { status: status },
      })
  }
;