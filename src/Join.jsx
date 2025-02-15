import React from "react";
import "./css/Login.css"
import { useNavigate } from 'react-router-dom';

function Join() {


    const navigate = useNavigate();

    const handleClickToMain = () =>{
        navigate("/main");
    }

    const handleClickToLogin = () =>{
        navigate("/login");
    }

    const handleClickToPWFind = () =>{
        navigate("/pw-find");
    }


  return (
    <div className="LoginPage-Body">
    
    <div className="Login-Box">

            <img 
            className="Login-Logo"
            onClick={handleClickToMain}
            src={`${process.env.PUBLIC_URL}/Login-Logo.PNG`} 
            alt="Logo" 
            />

        <div className="ID-PW-InputBox">
        <div className="Input-Wrapper">
          <input type="text" className="Login-Input-ID" placeholder="아이디" />
        </div>
        <div className="Input-Wrapper">
          <input type="password" className="Login-Input-PW" placeholder="비밀번호" />
        </div>
        </div>
        <button className="Login-Button">회원가입</button>
            <div className="Join-PWFind-Box">
              | &nbsp; &nbsp; <span className="Join" onClick={handleClickToLogin}>로그인</span>  &nbsp; &nbsp;  | 
              &nbsp;&nbsp; <span className="PWFind" onClick={handleClickToPWFind}>비밀번호 찾기</span> &nbsp;&nbsp; |
            </div>
    </div>
    
  
   

  
    </div>
  );
}

export default Join;   
