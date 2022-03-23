import React from "react";
import {Link} from 'react-router-dom';
import {Button } from './Component/LoginButton/LoginButton';
import {Input} from './Component/Input/Input';

function Login() {
  return (<section>
    <h1>Innskráning</h1>
      <form className="form">
  <div className="field">
    <label >Notendanafn</label>
    <Input></Input>
  </div>


  <div className="field">
    <label >Lykilorð</label>
    <input ></input>
  </div>


  <Button className="button" >Innskrá</Button>
</form>
        <Link to='/'>Til Baka</Link>
    </section>);
}

export default Login;