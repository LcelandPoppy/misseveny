const reducer=(state=[],info)=>{
  let {type,payload}=info;
  console.log(info);
  switch(type){
  	case "albumslists":return payload;
  	default:return state;
  }
  return state;

}


const reducer1=(state=[],info)=>{
  let {type,payload}=info;
  console.log(info);
  switch(type){
  	case "topinfo":return payload;
  	default:return state;
  }
  return state;

}

const reducer2=(state=[],info)=>{
  let {type,payload}=info;
  console.log(info);
  switch(type){
  	case "bottominfo":return payload;
  	default:return state;
  }
  return state;
}

const reducer3=(state=[],info)=>{
  let {type,payload}=info;
  console.log(info);
  switch(type){
  	case "gbjinfo":return payload;
  	default:return state;
  }
  return state;
}
const reducer4=(state=[],info)=>{
  let {type,payload}=info;
  console.log(info);
  switch(type){
  	case "searchinfo":return payload;
  	default:return state;
  }
  return state;
}
const reducer5=(state=[],info)=>{
  let {type,payload}=info;
  console.log(info);
  switch(type){
  	case "pageinfo":return payload;
  	default:return state;
  }
  return state;
}
// const reducer6=(state=[],info)=>{
//   let {type,payload}=info;
//   console.log(info);
//   switch(type){
//     case "cartsinfo":return Object.assign({}, state, payload);
//     default:return state;
//   }
//   return state;
// }
export {reducer,reducer1,reducer2,reducer3,reducer4,reducer5};