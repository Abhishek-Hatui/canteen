import { redirect } from "react-router-dom";

export function getAuthId(){
    const id = localStorage.getItem('id');
    return id;
}

export function cheackAuthLoader(){
    const id = getAuthId();
    if(!id){
        return redirect('/ologin');
    }

    return null;
}

export function idLoader(){
    return getAuthId();
}