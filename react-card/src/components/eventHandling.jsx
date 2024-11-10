export const Eventhandleing = () => {

    const print = () => {
        console.log("hello world");
    }

    return(
        <>
        <div className="flex justify-center items-center h-screen">
          <button onClick={print} > click-me</button>
        </div>
        </>
    )
}

// ? border bg-${blue}-400 p-5 rounded-md