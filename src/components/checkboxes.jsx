import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {checkboxesList} from "../data/checkboxes-list";
import {CheckboxesList} from "./styled";

const Checkboxes = () => {
    return (
        <CheckboxesList>
            {checkboxesList.map((checkbox) =>
                <FormControlLabel key={checkbox.id} id={checkbox.id} control={<Checkbox/>} label={checkbox.name}/>)}
        </CheckboxesList>
    );
};

export default Checkboxes;