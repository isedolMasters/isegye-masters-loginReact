import React from 'react';

export function Login(){

    return (
        <div>
            <div style={{width: "70%", height: "3000px", margin: "0 auto"}}>
                <a href="/api/v1/auth/login/naver"><img src="./githubLogin.png" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}></img></a>
            </div>
        </div>
    );
}

export default Login;