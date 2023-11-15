export const ADD_TOCARD = "ADD_TODO";

export const addTodo=(payload)=>{
    console.log(payload, "action...")
    return{
        type: ADD_TOCARD,
        payload
    }
}
