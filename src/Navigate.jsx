import React from "react";
import "./css/Navigate.css"
import { useNavigate } from 'react-router-dom';

function Navigate() {
    const navigate = useNavigate();

    const handleClickToLogin = () => {
        navigate('/login');
    };
    
    const handleClickToMain = () => {
        navigate('/main');
    };


  return (
    <div >


    <div className="Top-navigate">
        <div style={{ marginLeft: "80px"}}> 
            <img 
            onClick={handleClickToMain}
            src={`${process.env.PUBLIC_URL}/Logo.PNG`} 
            alt="Logo" 
            style={{ width: '150px', height: 'auto' }} 
            />
        </div>
        <div className="menu-Box">
            <div className="menus">
                Product
            </div>
            <div className="menus">
                Pricing
            </div>
            <div className="menus">
                Demo
            </div>
            
        </div>
        <div className="login-Box" onClick={handleClickToLogin}>
            <div className="login">
                로그인
            </div>
        </div>  
        <div className="start-Box">
            <div className="start">
                시작하기
            </div>
        </div>  
        
    </div>
  
    </div>
  );
}

export default Navigate;
