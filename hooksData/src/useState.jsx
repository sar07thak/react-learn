export const Challenge = () => {
    return(
        <>
        <section className="h-screen text-black bg-blue-600 flex justify-center items-center p-8">
            <div className="f bg-blue-400 flex flex-col justify-center items-center gap-4">
                <h1 className="text-2xl font-serif ">useState Challenge</h1>
                <P>Count : <span>{value}</span></P>
                <p>step : <input type="text" /></p>
                <div className="flex gap-3">
                    <button className="border p-1.5  ">Increment</button>
                    <button className="border p-1.5 ">Decrement</button>
                    <button className="border p-1.5 ">Reset</button>
                </div>
            </div>
        </section>
        </>
    );
}