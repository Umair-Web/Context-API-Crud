import { useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider=({children})=>{
    const[users,setUser]=useState([])

    let addUser=(user)=>{
        setUser([...users,user])
    }

    let delUser=(id)=>{
        setUser(users.filter((user)=> user.id!==id))
    }

    let updateUser=(id,name,age)=>{
        const affected=users.map((user)=>{
            if (user.id===id){
                return {...user,name:name,age:age}
            }
            return user
        })
        setUser(affected)
    }
    return(
        <UserContext.Provider value={{users,addUser,delUser,updateUser}} >
            {children}
        </UserContext.Provider>
    ) 
}