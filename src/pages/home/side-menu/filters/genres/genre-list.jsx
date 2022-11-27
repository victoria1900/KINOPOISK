import React from 'react';
import {genresList} from "../../../../../core/data/genres-list";
import {CheckboxesList} from "./styled";
import GenreItem from "./genre-item";

const GenreList = () => {
    return (
        <CheckboxesList>
            {genresList.map((checkbox) => <GenreItem key={checkbox.id} checkbox={checkbox}/>)}
        </CheckboxesList>
    );
};

export default GenreList;