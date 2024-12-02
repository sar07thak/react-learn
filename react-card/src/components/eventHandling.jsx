export const Eventhandleing = () => {

    const print = () => {
        console.log("hello world");
    }

    const handleSubmit = () => {
        console.log("submit cliked");
    }
    
    return(
        <>
        <div className="flex justify-center items-center h-screen">
          <button onClick={print} > click-me</button>
          <button onClick={handleSubmit}>submit-please</button>
        </div>
        </>
    )
}

// ? border bg-${blue}-400 p-5 rounded-md