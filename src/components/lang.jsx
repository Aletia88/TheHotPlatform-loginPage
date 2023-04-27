import React from 'react'
import {Dropdown} from 'semantic-ui-react';

const languageOptions = [
    {
        key: 'English', 
        text:'English', 
        value: 'English'
    },
    {
        key: 'French', 
        text:'French', 
        value: 'French'
    },
    {
        key: 'Italian', 
        text:'Italian', 
        value: 'Italian'
    }
];

const LanguageDropdown = () => (
    <Dropdown
      inline
      options={languageOptions}
      defaultValue={friendOptions[0].value}
    
    />
);

export default LanguageDropdown;