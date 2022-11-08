import {Box, Button, MenuItem, Select, styled, Typography} from "@mui/material";

export const SideMenuInner = styled(Box)({
    border: '1px solid #CFCFCF',
    width: '100%',
    padding: '20px',
    borderRadius: '5px'
});
export const FiltersTitle = styled(Typography)({
    paddingBottom: '10px',
    fontSize: '25px'
});

export const ResetFilters = styled(Button)({
    fontSize: '15px',
    textTransform: 'none',
    width: '100%',
    background: 'black'
});

export const MenuSubtitle = styled(Typography)({
    fontSize: '15px',
    paddingTop: '10px',
    paddingBottom: '10px'
});
export const SelectItem = styled(MenuItem)({
    fontSize: '15px'
});
export const SelectList = styled(Select)({
    fontSize: '15px',
});