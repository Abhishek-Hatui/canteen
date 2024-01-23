import { redirect } from "react-router-dom";

export function action(){
    localStorage.removeItem('id');
    localStorage.removeItem('clg');
    localStorage.removeItem('token');
    return redirect('/ologin');
}