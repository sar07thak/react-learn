export const EventProps = () => {
    const handlewelcomeUser = (user) =>{
        alert(`hey , ${user}`);
    }

    const handleHover = () =>{
        alert("hey hover me");
    }

    return(
        <>
         <WelcomeUser onCLick = {()=>handlewelcomeUser("sarthak")} 
            onMouseEnter = {handleHover}  />
        </>
    );
}



const WelcomeUser = (props) =>{ 
    const handleGreeting = () => {
        alert("sent some greetings");
    }
return(
    <>
    <div className="flex justify-center items-center h-screen">
    <button onClick={props.onCLick} className="border p-4 bg-red-400 mr-2">Click</button>
    <button onMouseEnter={props.onMouseEnter} className="border p-4 bg-emerald-400 mr-2 ">Hover me</button>
    <button onClick={handleGreeting} className="border bg-purple-500 p-4 " >Greeting</button>
    </div>
    </>
);
}