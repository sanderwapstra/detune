import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { typography } from '../../styles/typography';

const StyledForm = styled.form`
    margin-bottom: 60px;
`;

const StyledFormGroup = styled.div``;

const StyledFormLabel = styled.label`
    display: block;
    margin-bottom: 20px;

    ${map(typography.h3, (fontSize: string) => `font-size: ${fontSize};`)};
`;

const StyledFormHelpText = styled.div`
    font-size: 18px;
    margin-bottom: 24px;
    margin-top: -8px;
`;

const StyledFormControl = styled.input`
    display: block;
    width: 100%;
    background-color: #000;
    border: 1px solid #3b484d;
    border-radius: 8px;
    font-size: 24px;
    line-height: 1.25;
    padding: 20px 36px;
    color: #fff;
`;

const StyledFormActions = styled.div``;

const StyledFormError = styled.div``;

const StyledFormSuccess = styled.div``;

export {
    StyledForm,
    StyledFormGroup,
    StyledFormLabel,
    StyledFormHelpText,
    StyledFormControl,
    StyledFormActions,
    StyledFormError,
    StyledFormSuccess,
};
