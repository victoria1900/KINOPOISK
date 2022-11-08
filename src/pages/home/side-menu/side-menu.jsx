import React from 'react';
import {
    FormControl,
    InputLabel,
} from "@mui/material";
import Checkboxes from "../../../components/checkboxes";
import CustomPagination from "./pagination/custom-pagination";
import {FiltersTitle, ResetFilters, SelectItem, SideMenuInner, MenuSubtitle, SelectList} from "./styled";

const SideMenu = () => {
    return (
        <SideMenuInner>
            <FiltersTitle>Фильтры:</FiltersTitle>
            <ResetFilters variant='contained' color='primary' size='small'>Сбросить все фильтры</ResetFilters>
            <MenuSubtitle>Сортировать по:</MenuSubtitle>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Популярные по убыванию</InputLabel>
                <SelectList size='small' labelId="demo-simple-select-label" id="demo-simple-select">
                    <SelectItem>Ten</SelectItem>
                    <SelectItem>Twenty</SelectItem>
                    <SelectItem>Thirty</SelectItem>
                </SelectList>
            </FormControl>
            <MenuSubtitle>Год релиза:</MenuSubtitle>
            <FormControl fullWidth>
                <SelectList size='small' labelId="demo-simple-select-label" id="demo-simple-select">
                    <SelectItem>2020</SelectItem>
                    <SelectItem>2019</SelectItem>
                    <SelectItem>2018</SelectItem>
                    <SelectItem>2017</SelectItem>
                </SelectList>
            </FormControl>
            <Checkboxes/>
            <CustomPagination/>
        </SideMenuInner>
    );
};

export default SideMenu;