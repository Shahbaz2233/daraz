// import { ADD_TOCARD } from "../Action";

// const initialVal = {
//   items:[],
//   counter: 0
// };

// const Reducer = (state = initialVal, action) => {
//   switch (action.type) {
//     case ADD_TOCARD:
//       // const {id, qut} = action.payload;,
//       console.log(action.payload.qut, "qut..")
//       const { id, qut } = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);
//       if (existingItem) {
//         alert("matching")
//         state.counter = existingItem.qut + qut;
//         console.log(existingItem, "existingItem")
//         console.log(state.counter, "reducer")

//         return{ ...action.payload, qut: existingItem.qut };
//       } else {
//         const product = { ...action.payload, qut: qut };
//         return state.items.push(product);
//       }
//       // const updatObj = state.cartItems.find((items)=>{
//         //   return items.id === action.payload.id;
//         // })
//       // if(updatObj){
//       //   alert("dfjaf")

//       //   const updateCart = [...state.cartItems, action.payload];
//       //   console.log(updateCart, "updateCart")
//       //  const Updatqut = updateCart[updatObj].qut += 1;

//       //  console.log(Updatqut, "Updatqut")
//         // return {
//         //   ...state,
//         //   cartItems: state.cartItems.map(product =>
//         //     product.id === action.payload.id
//         //       ? { ...product, qut: product.qut + state.qut }
//         //       : product
//         //   )
//         // };
//         // }else{
//           //   return {
//             //     ...state,
//             //     cartItems: [...state.cartItems, {...action.payload, qut:state.qut}]
//             //   };
//             // }

//             default:
//               console.log((state), '<=====Slice');
//               return state;
//             }


// };

// export default Reducer;


import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  // qty: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, qut, total_price } = action.payload;
      console.log(total_price, "total_price") 

      const existingItem = state.items.find((item) => item.id === id);
      console.log(existingItem, "existingItem====1")
      if (existingItem) {
        existingItem.qut = existingItem.qut + qut;
        existingItem.total_price = total_price * existingItem.qut;
        console.log(existingItem, "existingItem====2")
      } else {
        const product = { ...action.payload, qut: qut, total_price:total_price*qut };
        state.items.push(product);
        console.log(product, "products ....")
      }
      console.log(current(state), '<=====Slice');
    },

    deleteItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
  },
});


// const initialState = {
//     items: [],

//   };

//   const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//       addItemToCart: (state, action) => {
//         const product = { ...action.payload };

//         const find = state.items.findIndex((item) => item.id === action.payload.id);
//         // console.log(find)
//         if(current(state.items).some((state=>state.id === action.payload.id))){
//             const newProduct = current(state.items).find(e=>e.id  === product.id)
//              const data =   {...newProduct,qty:product.qty+newProduct.qty}
//              state.items[find] = data
//         }else{

//               state.items.push(product);
//         }



//       },
//     },
//   });

export const { addItemToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;