import { Card } from "./card";


export const PropsActivity = () => {
let newObj = {
    username : "sarthak",
    age : 21 ,
}

let newArr = [1,2,3];

    return( 
        <>
          {/* <Card name = "Sarthak-Gupta" myobj = {newObj}  array = {newArr}/> */}
          <Card name = "Sarthak-Gupta" />
          <Card name ="Saksham-Gupta" />

        </>
    );
}