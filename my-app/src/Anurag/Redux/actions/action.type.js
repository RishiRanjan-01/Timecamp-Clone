import axios from 'axios'
export const GET_DATA_REQUEST="GET_DATA_REQUEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"


export const ADD_DATA_REQUEST="ADD_DATA_REQUEST"
export const ADD_DATA_SUCCESS="ADD_DATA_SUCCESS"
export const ADD_DATA_FAILURE="ADD_DATA_FAILURE"






export const getDataRequest=()=>{
    return{
        type:GET_DATA_REQUEST
    }
}
export const getDataSuccess=(data)=>{
    return{
        type:GET_DATA_SUCCESS,
        Payload:data
    }
}
export const getDataFailure=(err)=>{
    return{
        type:GET_DATA_FAILURE,
        Payload:err
    }
}

export const AddDataRequest=()=>{
    return{
        type:ADD_DATA_REQUEST
    }
}
export const AddDataSuccess=(data)=>{
    return{
        type:ADD_DATA_SUCCESS,
        Payload:data
    }
}
export const AddDataFailure=(err)=>{
    return{
        type:ADD_DATA_FAILURE,
        Payload:err
    }
}

export const getData=()=> async(dispatch)=>{
   dispatch(getDataRequest())
   axios.get("http://localhost:8080/project")
   .then((r)=>{
    console.log(r.data)
    dispatch(getDataSuccess(r.data))
   })
   .catch((er)=>dispatch(getDataFailure(er)))
}



