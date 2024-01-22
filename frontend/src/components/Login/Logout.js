import { redirect } from "react-router-dom";

export function action(){
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    return redirect('/ologin');
}