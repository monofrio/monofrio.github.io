import React, { useEffect, useState } from 'react';
import data from "../data/data.json";

export default function Alerts(){
    const [isVisible, setIsVisible] = useState(true);

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setIsVisible(false);
    //     }, 3000);
    //
    //     return () => clearTimeout(timeoutId);
    // }, []);

    return (
        <div>
            {isVisible && (
                <div id={"mainAlert"} className="alert alert-warning" role="alert">
                    <strong>This is still in Beta.</strong> - Version: {data.appInfo.version} <br/>
                </div>
            )}
        </div>
    );
}
