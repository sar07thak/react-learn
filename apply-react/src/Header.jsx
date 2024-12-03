export const Header =() => {
    return(
        <>
        <div className="min-h-20 bg-slate-600  text-white flex flex-row items-center justify-between p-2 ">
        <Div name ="E-commerce" />
            <div className="flex  w-[60%] justify-between">
                <Div name = "home" />
                <Div name= "our-projects" />
                <Div name = "contact-us"/>
                <Div name = "testimonial"/>
                <Div name = "apply-change"/>
            </div>
        </div>
        </>
    );
}


const Div = ({name}) => {
    return(
        <>
        <div className="bg-slate-800 h-10 w-40 text-white p-2 text-center rounded-lg ">
            <span>{name}</span>
        </div>
        </>
    );
}