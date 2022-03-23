import React from "react";
import {Link} from 'react-router-dom';


function Login() {
  return (<section>
    <h1>Innskráning</h1>
      <form className="form">
  <div className="field">
    <label htmlFor="username">Notendanafn</label>
    <input type="text" name="username" id="username"></input>
  </div>


  <div className="field">
    <label htmlFor="password">Lykilorð</label>
    <input type="password" name="password" id="password"></input>
  </div>


  <button className="button">Innskrá</button>
</form>
        <Link to='/'>Til Baka</Link>
    </section>);
}

export default Login;