import {Route, Routes} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found";
import React from 'react';
import MovieInfo from "./pages/home/movie-list/movie-info/movie-info";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/*' element={<NotFound/>}/>
                <Route path='movie/:id' element={<MovieInfo/>}/>
            </Route>
        </Routes>
    );
};

export default App;
