import React, {useState} from 'react';
import {Tab} from "@mui/material";
import {TabContext, TabList} from "@mui/lab";
import {DetailsMovieBox, TabsInner} from "./styled";
import MovieTabDescription from "./movie-tab-description/movie-tab-description";

const MovieInfoTabs = ({currentMovie}) => {
    const [tabValue, setTabValue] = useState('1');

    return (
        <DetailsMovieBox>
            <TabContext value={tabValue}>
                <TabsInner>
                    <TabList onChange={(event, newValue) => setTabValue(newValue)} aria-label="lab API tabs example">
                        <Tab label="Details" value="1"/>
                        <Tab label="Video" value="2" disabled={true}/>
                        <Tab label="Actors" value="3" disabled={true}/>
                    </TabList>
                </TabsInner>
                <MovieTabDescription currentMovie={currentMovie}/>
            </TabContext>
        </DetailsMovieBox>
    );
};

export default MovieInfoTabs;