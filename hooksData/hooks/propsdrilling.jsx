export const ParentComponent = () => {
    return(
        <>
        <h1> hello parent component </h1>
        <ChildCOmpo data = "React js" />
        </>
    );
}

const ChildCOmpo = (props) => {
    return(
        <>
        <h1>hello component B</h1>
        <GrandChild data = {props.data} />
        </>
    );
}

const GrandChild = (props) => {
    return(
        <>
        <h1>hello component C</h1>
        <GrandgrandChild data = {props.data} />
        </>
    );
}


const GrandgrandChild = (props) => {
    return(
        <>
        <h1>hello i love {props.data}</h1>
        </>
    );
}