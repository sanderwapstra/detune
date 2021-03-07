import styled from 'styled-components';

const StyledTuneTrackAttributes = styled.div`
    .range {
        display: flex;
        align-items: center;
        height: 40px;
        background: linear-gradient(
            90deg,
            #87fa5f 0%,
            #87fa5f 25%,
            #87fa5f 50%,
            #fcbb13 75%,
            #ff3e13 100%
        );
        padding: 0 12px;
        overflow: hidden;

        &--is-disabled {
            background: #667780;

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
        border: 4px solid #fff;
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
            background-color: #14181a;
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

export default StyledTuneTrackAttributes;
