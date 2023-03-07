import React from "react";
import {useLocation} from "react-router-dom";

export function Home () {
        return(
            <div>
               <h1>[Company Website]</h1>
            </div>
        );
}

export function Stuff () {
        return(
            <div>
                <h1>[Stuff]</h1>

            </div>
        );
}



export function Contact () {
        return(
            <div>
                <h1>[Contact]</h1>

            </div>
        );
}

export function Whoops404 () {
    let loc = useLocation(); // 요청 경로 알아냄
    return(
        <div><h1> 404 - {loc.pathname}라는 페이지가 존재하지 않습니다.</h1></div>
    );
}
