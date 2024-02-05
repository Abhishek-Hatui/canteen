import { redirect,Form } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

const Logout = () => {
    return(
        <section>
        <Form method='POST' action='/logout'>
          <button className='button button--primary'>logout</button>
        </Form>
        <Navigation />
        </section>
      );
}

export default Logout;

export function action(){
    localStorage.removeItem('id');
    localStorage.removeItem('clg');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    return redirect('/ologin');
}