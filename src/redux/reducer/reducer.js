let initialState = {
    contactList:[],
    keyword:"",
};

// state는 항상 initialState가 있어야 한다.
function reducer(state=initialState, action){
  const {type,payload} = action // destructing: 객체인 action을 분해해서 속성값 각각 쓰는 것

  switch(type){
    case "ADD_CONTACT":
      return{...state, contactList:
        [...state.contactList,
          { 
              name: payload.name, 
              phoneNumber: payload.phoneNumber
          }
        ]
      }
    case "SEARCH_BY_USERNAME":
      return {...state, keyword: payload.keyword};
    default:   
      return {...state};
  }
}

export default reducer;