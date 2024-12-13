

export const GetMoviesdata = async() => {
    try {
        const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=efe7d584&s=titanic&page=1");
        const data = await response.json() ;
        return data ;
        
    } catch (error) {
        console.log(error);
        
    }
}
