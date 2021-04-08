import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const StyledTrackAttributeRange = styled.div`
    position: relative;
    border: 1px solid ${Colors.grayscale4};
    padding: 20px 32px;
    border-radius: 16px;

    .checkbox {
        position: absolute;
        top: 0;
        left: 16px;
        transform: translateY(-50%);
        background-color: ${Colors.grayscale2};
        padding: 0 16px;

        input {
            position: absolute;
            left: -9999px;

            &:checked + label {
                color: ${Colors.green};

                svg {
                    opacity: 1;
                }
            }

            & + label::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
                background-color: ${Colors.white};
                border-radius: 4px;
                transition: background-color 0.15s ease-in-out;
            }

            &:checked + label::before {
                background-color: ${Colors.green};
            }
        }

        label {
            position: relative;
            font-size: 16px;
            line-height: 1.5;
            padding-left: 32px;
            transition: color 0.15s ease-in-out;

            svg {
                position: absolute;
                top: 50%;
                left: 2px;
                transform: translateY(-50%);
                width: 16px;
                height: 16px;
                fill: ${Colors.grayscale1};
                opacity: 0;
                transition: opacity 0.15s ease-in-out;
            }
        }
    }

    .range {
        display: flex;
        align-items: center;
        height: 40px;
        background: linear-gradient(
            90deg,
            ${Colors.green} 0%,
            ${Colors.green} 25%,
            ${Colors.green} 50%,
            ${Colors.yellow} 75%,
            ${Colors.red} 100%
        );
        padding: 0 12px;
        overflow: hidden;

        &.is-disabled {
            background: ${Colors.grayscale4};

            .range-background-inner {
                border-color: #7a8f99;
                box-shadow: 0 0 0 1px #4f5f66;
            }

            .range-background-center {
                display: none;
            }
        }
    }

    .range-background {
        &:focus {
            outline: none;
        }
    }

    .range-background-inner {
        position: absolute;
        top: 1px;
        left: 1px;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border: 4px solid ${Colors.white};
        border-radius: 4px;
        box-shadow: 0 0 0 1px #ededed;
    }

    .range-background-center {
        width: 4px;
        height: 20px;
        border-radius: 1px;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .range-background-left,
    .range-background-right {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .range-background-left,
    .range-background-right {
        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 16px;
            width: 100vw;
            background-color: ${Colors.grayscale2};
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }
    }

    .range-background-left {
        &::before,
        &::after {
            right: calc(100% - 4px);
        }
    }

    .range-background-right {
        &::before,
        &::after {
            left: calc(100% - 4px);
        }
    }
`;

export { StyledTrackAttributeRange };
