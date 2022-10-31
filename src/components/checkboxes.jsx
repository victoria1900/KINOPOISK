import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {checkboxesList} from "../data/checkboxes-list";

const Checkboxes = () => {
    const checkbox = checkboxesList.map((checkbox)=>
        <FormControlLabel key={checkbox.id} id={checkbox.id} control={<Checkbox />} label={checkbox.name}/>
    )

    return (
        <FormGroup sx={{paddingTop: '10px'}}>
            {checkbox}
        </FormGroup>
    );
};

export default Checkboxes;