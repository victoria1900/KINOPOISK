import React from 'react';
import {CardContent, Typography} from "@mui/material";
import {ButtonDetail, CardBox, CardDesc, DetailContainer, MovieTitle} from "./styled";
import CardIcons from "../../../../../core/utils/card-icons";
import {useNavigate} from "react-router-dom";

const CardInfo = ({movie}) => {
    const navigate = useNavigate();
    return (
        <CardDesc item md={6}>
            <CardContent>
                <CardBox>
                    <Typography>Рейтинг: {movie.vote_average}</Typography>
                    <CardIcons movie={movie}/>
                </CardBox>
                <MovieTitle>{movie.title}</MovieTitle>
            </CardContent>
            <DetailContainer>
                <ButtonDetail to={`movie/${movie.id}`}
                              onClick={() => navigate(`movie/${movie.id}`)}>Подробнее</ButtonDetail>
            </DetailContainer>
        </CardDesc>
    );
};

export default CardInfo;