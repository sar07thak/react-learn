import { useId } from "react";

export const UseId = () => {
    const userid = useId() ;
    console.log(userid);
    
    const emailid = useId() ;
    console.log(emailid);
    
    return(
        <>
        hello
        </>
    );
}