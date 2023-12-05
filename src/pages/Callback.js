import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';


export function Callback() {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    
    
    useEffect(() => {
        const sessionId = searchParams.get("sessionId")
        
        
        if (sessionId) {
            console.log(`${sessionId}`)
            console.log("exe파일 열기")
            window.location.href =`isegyemasters://${sessionId}`
        } else {
            console.log('No user or token information received');
            // handle the case where there's no user or token
        }

    }, []);

    return (
        <div>
            Loading...
        </div>
    )
}

export default Callback;