export const genreSelect = (movieList, genreList) => {
    const isEmpty = genreList.length === 0;
    if (isEmpty) return movieList;

    return movieList.filter((item) => {
        const itemGenres = item.genre_ids;
        if (intersect(genreList, itemGenres).length > 0) return item;
    });
};
export const intersect = function (arr1, arr2) {
    return arr1.filter(function (n) {
        return arr2.indexOf(n) !== -1;
    });
};
