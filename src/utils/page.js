export const getPagesCount = (totalCount, limit) => {  //возвращает кол-во страниц в зависимости от кол-ва постов
    console.log('page res', Math.ceil(totalCount / limit));
    console.log('bez okr', totalCount / limit);
    console.log('limit', limit);
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    // console.log(result.length);
    // console.log("total pages", typeof(totalPages));
    return result;
}