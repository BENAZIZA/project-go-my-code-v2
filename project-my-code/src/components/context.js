import React ,{useState}  from 'react'
const FoodContext = React.createContext()


const FoodProvider = (props) => {
    const [login,setLogin]=useState (false)
    const [loginData,setLoginData]=useState(null)
    const isLogin=()=>{
        setLogin(true)
    }
    const ModifData=(a)=>{
        setLoginData(a);
    }

    return (
        <FoodContext.Provider value ={{login:login,isLogin:isLogin,loginData:loginData,ModifData:ModifData}}>
            {props.children}
            
        </FoodContext.Provider>
    )
}
export {FoodProvider,FoodContext}



