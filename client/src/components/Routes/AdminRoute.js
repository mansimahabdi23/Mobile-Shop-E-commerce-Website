import { useState, useEffect } from "react";
import { useAuth} from "../../context/auth.js";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute(){
    const [ok, setOk] = useState(true);
    const [auth, setAuth] = useAuth();

    
    useEffect(() => {
       
        const authCheck = async () => {
            try{
            const res = await axios.get("/api/v1/auth/admin-auth");
            if(res.data.ok){
                setOk(false);
            }else{
                setOk(true);
            } 
        }catch(e){console.log(e)};
        
        };
    
        if(auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner path=""/>;

};