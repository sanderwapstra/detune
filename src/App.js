import React from 'react';

const App = () => {
    const loginWithSpotify = () => {
        const scopes = 'playlist-modify-public';

        window.location.replace(
            `https://accounts.spotify.com/authorize?client_id=453ef47ef0c24a63a38a91b855d9c9b3&redirect_uri=${encodeURIComponent(
                window.location.href
            )}&scope=${encodeURIComponent(scopes)}&response_type=token`
        );
    };

    return (
        <div className="App">
            <button onClick={loginWithSpotify}>Login with Spotify</button>
        </div>
    );
};

export default App;
