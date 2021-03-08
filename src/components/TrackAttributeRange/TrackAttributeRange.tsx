import React, { useEffect, useState } from 'react';
import { StyledTrackAttributeRange } from './TrackAttributeRange.styles';
import { ReactComponent as Check } from '../../static/svg/Check.svg';
import { Range } from 'react-range';

type Props = {
    title: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
    disabled: boolean;
    handleActiveChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRangeChange: (value: number) => void;
};

const TrackAttributeRange: React.FC<Props> = ({
    title,
    min,
    max,
    step,
    defaultValue,
    disabled,
    handleActiveChange,
    handleRangeChange,
}) => {
    const [values, setValues] = useState([defaultValue]);

    useEffect(() => {
        if (values.length) {
            handleRangeChange(values[0]);
        }
    }, [values, handleRangeChange]);

    return (
        <StyledTrackAttributeRange>
            <div className={`container ${disabled ? 'is-disabled' : ''}`}>
                <div className="checkbox">
                    <input
                        id={`checkbox-${title.toLowerCase()}`}
                        type="checkbox"
                        onChange={handleActiveChange}
                    />
                    <label htmlFor={`checkbox-${title.toLowerCase()}`}>
                        <Check />
                        {title}
                    </label>
                </div>

                <div className={`range  ${disabled ? 'is-disabled' : ''}`}>
                    <Range
                        disabled={disabled}
                        values={values}
                        step={step}
                        min={min}
                        max={max}
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
            </div>
        </StyledTrackAttributeRange>
    );
};

export default TrackAttributeRange;
