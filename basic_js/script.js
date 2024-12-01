const Data = [
          {
            "id": 1,
            "name": "Inception",
            "type": "Feature Film",
            "genre": ["Sci-Fi", "Thriller"],
            "actors_api": {
              "actors": [
                { "id": 101, "name": "Leonardo DiCaprio", "role": "Cobb" },
                { "id": 102, "name": "Joseph Gordon-Levitt", "role": "Arthur" },
                { "id": 103, "name": "Ellen Page", "role": "Ariadne" }
              ]
            },
            "rating": 8.8,
            "release_year": 2010,
            "duration_minutes": 148,
            "language": "English"
          },
          {
            "id": 2,
            "name": "The Shawshank Redemption",
            "type": "Feature Film",
            "genre": ["Drama"],
            "actors_api": {
              "actors": [
                { "id": 201, "name": "Tim Robbins", "role": "Andy Dufresne" },
                { "id": 202, "name": "Morgan Freeman", "role": "Ellis Boyd 'Red' Redding" }
              ]
            },
            "rating": 9.3,
            "release_year": 1994,
            "duration_minutes": 142,
            "language": "English"
          },
          {
            "id": 3,
            "name": "Parasite",
            "type": "Feature Film",
            "genre": ["Thriller", "Drama"],
            "actors_api": {
              "actors": [
                { "id": 301, "name": "Song Kang-ho", "role": "Kim Ki-taek" },
                { "id": 302, "name": "Lee Sun-kyun", "role": "Park Dong-ik" },
                { "id": 303, "name": "Cho Yeo-jeong", "role": "Park Yeon-kyo" }
              ]
            },
            "rating": 8.6,
            "release_year": 2019,
            "duration_minutes": 132,
            "language": "Korean"
          },
          {
            "id": 4,
            "name": "Spirited Away",
            "type": "Animated Film",
            "genre": ["Fantasy", "Adventure"],
            "actors_api": {
              "actors": [
                { "id": 401, "name": "Rumi Hiiragi", "role": "Chihiro Ogino" },
                { "id": 402, "name": "Miyu Irino", "role": "Haku" },
                { "id": 403, "name": "Mari Natsuki", "role": "Yubaba / Zeniba" }
              ]
            },
            "rating": 8.6,
            "release_year": 2001,
            "duration_minutes": 125,
            "language": "Japanese"
          },
          {
            "id": 5,
            "name": "The Dark Knight",
            "type": "Feature Film",
            "genre": ["Action", "Crime", "Drama"],
            "actors_api": {
              "actors": [
                { "id": 501, "name": "Christian Bale", "role": "Bruce Wayne / Batman" },
                { "id": 502, "name": "Heath Ledger", "role": "Joker" },
                { "id": 503, "name": "Aaron Eckhart", "role": "Harvey Dent / Two-Face" }
              ]
            },
            "rating": 9.0,
            "release_year": 2008,
            "duration_minutes": 152,
            "language": "English"
          }
    ]


    // ?  OBJECT DISTRUCTURING

    // ? simple fetching data from object element
    
    // const movie = Data[4] ;
    // console.log(movie.release_year);
    
    // ? Advance distructuring of object

    // const {id , name ,type ,genre,language} = movie ;
    // console.log(id,type,name,genre,language);
    
    // ?  ARRAY DISTRUCTURING
    
    const movie = Data[4] ;
    const movieActor = movie.actors_api.actors;
    
    // ? simple method for distructuring

    // const primaryActor = movieActor[0];
    // const secondaryActor = movieActor[1];

    // ? Advannce method for distructuring

    // const [primaryActor ,secondaryActor ] = movieActor ;

    // console.log(primaryActor,secondaryActor);

    // ? REST / SPREAD OPERATOR => are those operator which shows the remaining values in the array and return array .

    // const [primaryActor , ...otherActor ] = movieActor ;
    // console.log(primaryActor , otherActor);

    const array = [1,2,3,4,5,6,7,8,9,0];
    const [primary ,secondary , ...other ] = array ;
    console.log(primary , secondary , other);
    