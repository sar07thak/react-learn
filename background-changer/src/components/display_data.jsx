import Data from "../data/data.json";

export const DisplayArtworks = () => {
    return(
        <>
            {
            Data.map((curElem,index) => (
                <ArtworkCard key={index} info={curElem} />
            ))
            }
        </>
    );
};

const ArtworkCard = ({info}) => {
    const { name, artist, description, url, alt } = info;
    console.log();
    
    return(
        <div>
            <h2>{name}</h2>
            
            <p>Artist: {artist}</p>
            <p>{description}</p>
            <img src={url} alt={alt} style={{ width: '200px', height: 'auto' }} />
        </div>
    );
};
