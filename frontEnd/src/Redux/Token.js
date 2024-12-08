const token=()=>{
    //Token
    let user={};

    //getToken
    const getUser=()=>user;
   

    //setToken
    const setUser=(newToken)=>{
        user= newToken
        return true
    }
    
    return {
        getUser,
        setUser,
    }
}

export default token()