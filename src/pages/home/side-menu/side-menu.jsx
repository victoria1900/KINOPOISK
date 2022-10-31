import React from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    ButtonGroup
} from "@mui/material";
import Checkboxes from "../../../components/checkboxes";
import CustomPagination from "./pagination/custom-pagination";

const SideMenu = () => {

    return (
        <Box sx={{
            border: '1px solid #CFCFCF',
            width: '100%',
            padding: '20px',
            borderRadius: '5px'
        }}>
            <Typography sx={{
                paddingBottom: '10px',
                fontSize: '25px'
            }}>Фильтры:</Typography>
            <Button sx={{
                fontSize: '15px',
                textTransform: 'none',
                width: '100%',
                background: 'black'
            }} variant='contained' color='primary' size='small'>Сбросить все фильтры</Button>
            <Typography sx={{
                fontSize: '15px',
                paddingTop: '10px',
                paddingBottom: '10px'
            }}>Сортировать по:</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Популярные по убыванию</InputLabel>
                <Select size='small'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age" sx={{fontSize: '15px'}}>
                    <MenuItem value={10} sx={{fontSize: '15px'}}>Ten</MenuItem>
                    <MenuItem value={20} sx={{fontSize: '15px'}}>Twenty</MenuItem>
                    <MenuItem value={30} sx={{fontSize: '15px'}}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Typography sx={{
                fontSize: '15px',
                paddingTop: '15px',
                paddingBottom: '10px'
            }}>Год релиза:</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">2020</InputLabel>
                <Select size='small'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age" sx={{fontSize: '15px'}}>
                    <MenuItem value={10} sx={{fontSize: '15px'}}>Ten</MenuItem>
                    <MenuItem value={20} sx={{fontSize: '15px'}}>Twenty</MenuItem>
                    <MenuItem value={30} sx={{fontSize: '15px'}}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Checkboxes/>
            <CustomPagination/>
        </Box>
    );
};

export default SideMenu;