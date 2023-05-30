import React from 'react';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';

const UploadButton = ({ name, onChange, disabled }) => {
  let input;
  return (
    <React.Fragment>
      <Button
        onClick={(e) => {
          e.preventDefault();
          input.click();
        }}
        disabled={disabled}
        variant='contained'
        color='secondary'
        endIcon={<PublishIcon />}
      >
        {name}
      </Button>

      <input
        ref={(element) => (input = element)}
        hidden
        onChange={(e) => {
          e.preventDefault();
          onChange(e);
        }}
        type='file'
      />
    </React.Fragment>
  );
};
export default UploadButton;
