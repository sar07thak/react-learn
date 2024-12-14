export const getMovieDetails = async ({ params }) => {
    console.log(params);
    const id = params.movieID;
    console.log(id);
    
  
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=efe7d584`
      );
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };