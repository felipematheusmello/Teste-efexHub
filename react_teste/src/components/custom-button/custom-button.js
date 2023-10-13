import * as React from 'react';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

export default function SimpleCustomButton({ isVisible, children, onClickButton}) {
  return (
    <Stack spacing={1} direction="row">
        {
            isVisible ?
            <CustomButton onClick={onClickButton}>{children}</CustomButton>
            :
            <CustomButton disabled>{children}</CustomButton>
        }
    </Stack>
  );
}

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(Button)`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  color: white;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  &:hover:not(:disabled) {
    background-color: ${blue[600]};
  }

  &:active:not(:disabled) {
    background-color: ${blue[700]};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;