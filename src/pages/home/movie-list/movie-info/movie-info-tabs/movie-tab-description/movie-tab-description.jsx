import React from 'react';
import {TabPanel} from "@mui/lab";
import {Grid} from "@mui/material";
import {TabParagraph, TabParagraphBold, TabsContainer} from "./styled";

const MovieTabDescription = ({currentMovie}) => {
    return (
        <>
            <TabPanel value="1">
                <TabsContainer>
                    <Grid item md={4}>
                        <TabParagraphBold>Original title</TabParagraphBold>
                        <TabParagraphBold>Status</TabParagraphBold>
                        <TabParagraphBold>Release date</TabParagraphBold>
                        <TabParagraphBold>Original language</TabParagraphBold>
                    </Grid>
                    <Grid item md={8}>
                        <TabParagraph>{currentMovie.original_title}</TabParagraph>
                        <TabParagraph>Released</TabParagraph>
                        <TabParagraph>{currentMovie.release_date}</TabParagraph>
                        <TabParagraph>{currentMovie.original_language}</TabParagraph>
                    </Grid>
                </TabsContainer>
            </TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3"></TabPanel>
        </>
    );
};

export default MovieTabDescription;