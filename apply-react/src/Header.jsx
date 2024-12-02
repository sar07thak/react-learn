export const Header =() => {
    return(
        <>
        <div className="min-h-20 bg-slate-500 border text-white flex flex-row ">
            <h2>
                <Div/>
                <Div/>
                
            </h2>
        </div>
        </>
    );
}


const Div = () => {
    return(
        <>
        <div className="bg-slate-800 h-10 w-15 text-white p-2 ">
            <span>head</span>
        </div>
        </>
    );
}