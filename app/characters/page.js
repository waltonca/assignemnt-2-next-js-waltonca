
// function to fetch characters from API
async function getCharacterss() {
    let apiUrl = 'https://hp-api.onrender.com/api/characters';
    let characters = [];
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    characters = characters.concat(data);
    
    return characters;
}

// Characters component
export default async function Characters() {
    const characters = await getCharacterss();
    
    return (
        <>
            <h2>Characters page</h2>
            {characters.length > 0 && characters.map((character) => ( 
            <div className="row mb-3" key={character.id}>
                <div className="col-lg-2">
                    <img src={character.image} alt={character.name} className="img-fluid" />
                </div>
                <div className="col-lg-10">
                    <h3>{character.name}</h3>
                    <blockquote>"{character.species}"</blockquote>
                    <p>{character.house}</p>
                </div>
            </div>
            ))} 
        </>
    );
}
