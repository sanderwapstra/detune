import React from 'react';

const TuneTrackAttributes: React.FC = () => {
    return (
        <>
            <h2>Finetuning. What is important to you?</h2>
            <div style={{ marginBottom: 10 }}>
                <label htmlFor="acousticness">Acousticness</label>
                <input
                    type="range"
                    id="acousticness"
                    name="acousticness"
                    min="0.0"
                    max="1.0"
                    defaultValue="0.0"
                    step="0.1"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="danceability">Danceability</label>
                <input
                    type="range"
                    id="danceability"
                    name="danceability"
                    min="0.0"
                    max="1.0"
                    defaultValue="0.0"
                    step="0.1"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="energy">Energy</label>
                <input
                    type="range"
                    id="energy"
                    name="energy"
                    min="0.0"
                    max="1.0"
                    defaultValue="0.0"
                    step="0.1"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="instrumentalness">Instrumentalness</label>
                <input
                    type="range"
                    id="instrumentalness"
                    name="instrumentalness"
                    min="0.0"
                    max="1.0"
                    defaultValue="0.0"
                    step="0.1"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="liveness">
                    <input type="checkbox" id="liveness" name="liveness" />
                    Liveness
                </label>
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="loudness">Loudness</label>
                <input
                    type="range"
                    id="loudness"
                    name="loudness"
                    min="-60"
                    max="0"
                    defaultValue="-60"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <span>Mode</span>
                <div>
                    <input type="radio" id="major" name="mode" value="major" />
                    <label htmlFor="major">Major</label>
                </div>

                <div>
                    <input type="radio" id="minor" name="mode" value="minor" />
                    <label htmlFor="minor">Minor</label>
                </div>
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="popularity">Popularity</label>
                <input
                    type="range"
                    id="popularity"
                    name="popularity"
                    min="0"
                    max="100"
                    defaultValue="0"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="tempo">Tempo (BPM)</label>
                <input type="number" id="tempo" name="tempo" />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="time_signature">Time signature</label>
                <input
                    type="number"
                    id="time_signature"
                    name="time_signature"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="valence">Valence</label>
                <input
                    type="range"
                    id="valence"
                    name="valence"
                    min="0.0"
                    max="1.0"
                    defaultValue="0.0"
                    step="0.1"
                />
            </div>
        </>
    );
};

export default TuneTrackAttributes;
