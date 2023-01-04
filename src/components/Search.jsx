import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/82512-google-search.json';

const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [searchInfo, setSearchInfo] = useState({});

    const handleSearch = async (e) => {
        e.preventDefault();
        if (search === '') return;

        const endpoint = `https://fr.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=200&srsearch=${search}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json)

        setResults(json.query.search);
        setSearchInfo(json.query.searchinfo);
    }

    return (
        <div className="App">
            <header>
                <h1>Recherche</h1>
                <form className="search-box" onSubmit={handleSearch}>
                    <input type="search" placeholder="que voulez vous rechercher ?"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
                {(searchInfo.totalhits) ? <p>Résultat : {searchInfo.totalhits}</p> : ''}
            </header>
            <div className="results">
                {results.map((result, i) => {
                    const url = `https://fr.wikipedia.org/?curid=${result.pageid}`;

                    return (
                        <div className="result" key={i}>
                            <h3>{result.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                            <a href={url} target="_blank" rel="nofollow">Voir plus</a>
                        </div>
                    )
                })}
                <Player
                    autoplay
                    loop
                    src={animation}
                    style={{ height: '600px', width: '600px' }}
                    className="search"
                >
                </Player>

            </div>
        </div>
    );
}

export default Search
