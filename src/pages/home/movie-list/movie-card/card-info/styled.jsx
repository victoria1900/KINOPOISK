import {Box,  CardActions, Grid, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const ButtonDetail = styled(Link)({
    color: 'black',
    textDecoration: 'none',
    padding: '10px',
    width: '100%',
    borderRadius: 'inherit'
});
export const DetailContainer = styled(CardActions)({
    borderTop: '1px solid #CFCFCF',
    padding: '0px'
});
export const MovieTitle = styled(Typography)({
    paddingTop: '15px'
});
export const CardDesc = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});
export const CardBox = styled(Box)({
    display: 'flex'
});