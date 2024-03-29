import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../services/shopService";
import { useEffect } from "react";
import { setProfilePicture } from "../features/authSlice";


const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)

    const {data, error, isLoading } = useGetProfilePictureQuery(localId)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(data){
            
            dispatch(setProfilePicture(data.image))
        }
    },[data])

    // //useEffect(()=>{        COMPLETAR ESTO
    //     (async ()=>{
    //         try{
    //             const session = await
    //         }
    //     })
    // })

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )

}

export default MainNavigator