import {Box, Button, CardActions, Grid, IconButton, styled, Typography} from "@mui/material";

export const ButtonDetail = styled(Button)({
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

export const CardButton = styled(IconButton)({
    paddingTop: '0px',
    paddingBottom: '0px'
});