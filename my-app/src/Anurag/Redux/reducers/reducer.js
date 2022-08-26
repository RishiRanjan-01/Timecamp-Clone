import { ADD_DATA_FAILURE, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./action.type"

const inistate={
projects:[],
isLoading:false,
isError:false
}

export const projectReducer=(state=inistate,{type,Payload})=>{
    switch(type){
        case GET_DATA_REQUEST:
            return{
                ...state,isLoading:true,isError:false
            }
        case GET_DATA_SUCCESS:
            console.log("get",Payload)
            return{
                ...state,projects:Payload,isLoading:false,isError:false
            }
            case GET_DATA_FAILURE:
                return{
                    ...state,isLoading:false,isError:true
                }

                case ADD_DATA_REQUEST:
                    return{
                        ...state,isLoading:true,isError:false
                    }
                case ADD_DATA_SUCCESS:
                    console.log(Payload)
                    return{
                        ...state,isLoading:false,isError:false
                    }
                    case ADD_DATA_FAILURE:
                        return{
                            ...state,isLoading:false,isError:true
                        }

      default: return state     
    }

}