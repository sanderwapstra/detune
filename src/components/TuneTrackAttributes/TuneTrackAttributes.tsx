import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import {
    setTrackAttribute,
    TrackAttributesOptions,
} from '../../store/trackAttributesSlice';
import TrackAttributeRange from '../TrackAttributeRange/TrackAttributeRange';
import StyledTuneTrackAttributes from './TuneTrackAttributes.styles';

const TuneTrackAttributes: React.FC = () => {
    const dispatch = useDispatch();
    const {
        target_acousticness,
        target_danceability,
        target_energy,
        target_instrumentalness,
        target_popularity,
        target_tempo,
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
            <h2>Start tuning</h2>

            <ul>
                <li>
                    <TrackAttributeRange
                        title="Acousticness"
                        defaultValue={target_acousticness.value}
                        disabled={!target_acousticness.active}
                        handleActiveChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Acousticness,
                                active: e.target.checked,
                            });
                        }}
                        handleRangeChange={value => {
                            handleChange({
                                attribute: TrackAttributesOptions.Acousticness,
                                value,
                            });
                        }}
                        max={1}
                        min={0}
                        step={0.1}
                    />
                </li>
                <li>
                    <TrackAttributeRange
                        title="Danceability"
                        defaultValue={target_danceability.value}
                        disabled={!target_danceability.active}
                        handleActiveChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Danceability,
                                active: e.target.checked,
                            });
                        }}
                        handleRangeChange={value => {
                            handleChange({
                                attribute: TrackAttributesOptions.Danceability,
                                value,
                            });
                        }}
                        max={1}
                        min={0}
                        step={0.1}
                    />
                </li>
                <li>
                    <TrackAttributeRange
                        title="Energy"
                        defaultValue={target_energy.value}
                        disabled={!target_energy.active}
                        handleActiveChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Energy,
                                active: e.target.checked,
                            });
                        }}
                        handleRangeChange={value => {
                            handleChange({
                                attribute: TrackAttributesOptions.Energy,
                                value,
                            });
                        }}
                        max={1}
                        min={0}
                        step={0.1}
                    />
                </li>
                <li>
                    <TrackAttributeRange
                        title="Instrumentalness"
                        defaultValue={target_instrumentalness.value}
                        disabled={!target_instrumentalness.active}
                        handleActiveChange={e => {
                            handleChange({
                                attribute:
                                    TrackAttributesOptions.Instrumentalness,
                                active: e.target.checked,
                            });
                        }}
                        handleRangeChange={value => {
                            handleChange({
                                attribute:
                                    TrackAttributesOptions.Instrumentalness,
                                value,
                            });
                        }}
                        max={1}
                        min={0}
                        step={0.1}
                    />
                </li>
                <li>
                    <TrackAttributeRange
                        title="Popularity"
                        defaultValue={target_popularity.value}
                        disabled={!target_popularity.active}
                        handleActiveChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Popularity,
                                active: e.target.checked,
                            });
                        }}
                        handleRangeChange={value => {
                            handleChange({
                                attribute: TrackAttributesOptions.Popularity,
                                value,
                            });
                        }}
                        max={100}
                        min={0}
                        step={1}
                    />
                </li>
                <li>
                    <TrackAttributeRange
                        title="Positiveness"
                        defaultValue={target_valence.value}
                        disabled={!target_valence.active}
                        handleActiveChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Valence,
                                active: e.target.checked,
                            });
                        }}
                        handleRangeChange={value => {
                            handleChange({
                                attribute: TrackAttributesOptions.Valence,
                                value,
                            });
                        }}
                        max={1}
                        min={0}
                        step={0.1}
                    />
                </li>
                <li>
                    <TrackAttributeRange
                        title="BPM"
                        defaultValue={target_tempo.value}
                        disabled={!target_tempo.active}
                        handleActiveChange={e => {
                            handleChange({
                                attribute: TrackAttributesOptions.Tempo,
                                active: e.target.checked,
                            });
                        }}
                        handleRangeChange={value => {
                            handleChange({
                                attribute: TrackAttributesOptions.Tempo,
                                value,
                            });
                        }}
                        max={400}
                        min={0}
                        step={1}
                    />
                </li>
            </ul>
        </StyledTuneTrackAttributes>
    );
};

export default TuneTrackAttributes;
