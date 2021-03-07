import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Range } from 'react-range';
import { RootState } from '../../store/reducers';
import {
    setTrackAttribute,
    TrackAttributesOptions,
} from '../../store/trackAttributesSlice';
import StyledTuneTrackAttributes from './TuneTrackAttributes.styles';

const TuneTrackAttributes: React.FC = () => {
    const [values, setValues] = useState([0.5]);
    const [isDisabled, setIsDisabled] = useState(false);
    const dispatch = useDispatch();
    const {
        target_acousticness,
        target_danceability,
        target_energy,
        target_instrumentalness,
        target_loudness,
        target_mode,
        target_popularity,
        target_tempo,
        target_time_signature,
        target_valence,
    } = useSelector((state: RootState) => state.trackAttributes);

    const handleChange = ({
        attribute,
        active,
        value,
    }: {
        attribute: TrackAttributesOptions;
        active?: boolean;
        value?: number;
    }) => {
        dispatch(
            setTrackAttribute({
                attribute,
                active,
                value,
            })
        );
    };

    return (
        <StyledTuneTrackAttributes>
            <h2>Tune</h2>

            <div className={`range ${isDisabled ? 'range--is-disabled' : ''}`}>
                <Range
                    disabled={isDisabled}
                    values={values}
                    step={0.1}
                    min={0}
                    max={1}
                    onChange={values => setValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: 'transparent',
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            className="range-background"
                            {...props}
                            style={{
                                ...props.style,
                                height: 40,
                                width: 24,
                                backgroundColor: 'transparent',
                                boxShadow:
                                    '0 8px 24px rgba(0, 0, 0, 0.75), inset 1px 1px 4px rgba(0, 0, 0, 0.15)',

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="range-background-left" />
                            <div className="range-background-right" />
                            <div className="range-background-inner" />
                            <div className="range-background-center" />
                        </div>
                    )}
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="liveness">
                    <input
                        type="checkbox"
                        id="liveness"
                        name="liveness"
                        onChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Liveness,
                                active: e.target.checked,
                            });
                        }}
                    />
                    Liveness
                </label>
            </div>

            <div style={{ marginBottom: 10 }}>
                <input
                    type="checkbox"
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Loudness,
                            active: e.target.checked,
                        });
                    }}
                />
                <label htmlFor="loudness">Loudness</label>
                <input
                    disabled={!target_loudness.active}
                    type="range"
                    id="loudness"
                    name="loudness"
                    min="-60"
                    max="0"
                    value={target_loudness.value}
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Loudness,
                            value: Number(e.target.value),
                        });
                    }}
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <input
                    type="checkbox"
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Mode,
                            active: e.target.checked,
                        });
                    }}
                />
                <span>Mode</span>
                <div>
                    <input
                        disabled={!target_mode.active}
                        type="radio"
                        id="major"
                        name="mode"
                        value={1}
                        checked={target_mode.value === 1}
                        onChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Mode,
                                value: Number(e.target.value),
                            });
                        }}
                    />
                    <label htmlFor="major">Major</label>
                </div>

                <div>
                    <input
                        disabled={!target_mode.active}
                        type="radio"
                        id="minor"
                        name="mode"
                        value={0}
                        checked={target_mode.value === 0}
                        onChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Mode,
                                value: Number(e.target.value),
                            });
                        }}
                    />
                    <label htmlFor="minor">Minor</label>
                </div>
            </div>

            <div style={{ marginBottom: 10 }}>
                <input
                    type="checkbox"
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Popularity,
                            active: e.target.checked,
                        });
                    }}
                />
                <label htmlFor="popularity">Popularity</label>
                <input
                    disabled={!target_popularity.active}
                    type="range"
                    id="popularity"
                    name="popularity"
                    min="0"
                    max="100"
                    value={target_popularity.value}
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Popularity,
                            value: Number(e.target.value),
                        });
                    }}
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <input
                    type="checkbox"
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Tempo,
                            active: e.target.checked,
                        });
                    }}
                />
                <label htmlFor="tempo">Tempo (BPM)</label>
                <input
                    disabled={!target_tempo.active}
                    type="number"
                    id="tempo"
                    name="tempo"
                    value={target_tempo.value}
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Tempo,
                            value: Number(e.target.value),
                        });
                    }}
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <input
                    type="checkbox"
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.TimeSignature,
                            active: e.target.checked,
                        });
                    }}
                />
                <label htmlFor="time_signature">Time signature</label>
                <input
                    disabled={!target_time_signature.active}
                    type="number"
                    id="time_signature"
                    name="time_signature"
                    value={target_time_signature.value}
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.TimeSignature,
                            value: Number(e.target.value),
                        });
                    }}
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <input
                    type="checkbox"
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Valence,
                            active: e.target.checked,
                        });
                    }}
                />
                <label htmlFor="valence">Valence</label>
                <input
                    disabled={!target_valence.active}
                    type="range"
                    id="valence"
                    name="valence"
                    min="0.0"
                    max="1.0"
                    value={target_valence.value}
                    step="0.1"
                    onChange={e => {
                        handleChange({
                            attribute: TrackAttributesOptions.Valence,
                            value: Number(e.target.value),
                        });
                    }}
                />
            </div>
        </StyledTuneTrackAttributes>
    );
};

export default TuneTrackAttributes;
