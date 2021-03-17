import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elait-orders-purchased',
  templateUrl: './orders-purchased.component.html',
  styleUrls: ['./orders-purchased.component.css']
})
export class OrdersPurchasedComponent implements OnInit {

  constructor() { }

  orders =[
    {
      orderId : 1,
      productIds : [
        {
          id:101,
          name : 'shampoo',
          price : 153,
        },
        {
          id:102,
          name : 'perfume',
          price : 150,
        },
        {
          id:103,
          name : 'moisturiser',
          price : 92,
        },
        {
          id:104,
          name : 'face mask',
          price : 190,
        } 
      ],
      order_date : new Date(),
      shipping_adderess : {
          street : 'ramalayam street',
          city : 'nellore',
          state : 'Andhra pradesh',
          pincode : '524004',
          country : 'India'
      }
    },
    {
      orderId : 2,
      productIds : [
        {
          id:101,
          name : 'shampoo',
          price : 153,
        },
        {
          id:102,
          name : 'perfume',
          price : 150,
        },
        {
          id:103,
          name : 'moisturiser',
          price : 92,
        },
        {
          id:104,
          name : 'face mask',
          price : 190,
        },
        {
          id:104,
          name : 'face mask',
          price : 190,
        }  
      ],
      order_date : new Date(),
      shipping_adderess : {
          street : 'ramalayam street',
          city : 'nellore',
          state : 'Andhra pradesh',
          pincode : '524004',
          country : 'India'
      }
    }
  ]
  k=0;
  total_amount(orderid){
    var count = this.orders[orderid].productIds.length;
    let amount=0;
    for(let i=0; i<count; i++){
             
      amount = amount + this.orders[orderid].productIds[i].price;
            
            // console.log(count);
    }
    return amount;
  }


  arr=[];
  counta = this.orders.length-1;

    
  ngOnInit(): void {
    var dolog = () => {
      for(let i=0; i < this.counta; i++){
        this.arr.push(i);
      }
      console.log(this.arr);
    } 
    
  }

  
}

// var orders : any[] =[
//   {
//     orderId : 1,
//     productIds : [
//       {
//         id:101,
//         name : 'shampoo',
//         price : 153,
//       },
//       {
//         id:102,
//         name : 'perfume',
//         price : 150,
//       },
//       {
//         id:103,
//         name : 'moisturiser',
//         price : 92,
//       },
//       {
//         id:104,
//         name : 'face mask',
//         price : 190,
//       } 
//     ],
//     order_date : '14/03/2021',
//     shipping_adderess : {
//         street : 'ramalayam street',
//         city : 'nellore',
//         state : 'Andhra pradesh',
//         pincode : '524004',
//         country : 'India'
//     }
//   }
// ]

// function total_amount(orderid){
//       var count = orders[orderid].productIds.length;
//       let amount=0;
//       for(let i=0; i<count; i++){
           
//           amount = amount + orders[orderid].productIds[i].price;
          
//           // console.log(count);
//       }
//       return amount;
// }
// let output=total_amount(0);

// document.getElementById('orders').innerHTML=`OrderId : ${orders[0].orderId}`;
// document.getElementById('total_cost').innerHTML=`Output : ${output}`;
// document.getElementById('shipping_address').innerHTML=`Address : ${orders[0].shipping_adderess.street} , ${orders[0].shipping_adderess.city} , ${{orders[0].shipping_adderess.state} , ${{orders[0].shipping_adderess.pincode} , ${orders[0].shipping_adderess.country}.`;
// document.getElementById('order_date').innerHTML=`Date : ${orders[0].orderId}`;
