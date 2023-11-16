import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {    //арг: список постов, способ сортировки
    const sortedPosts = useMemo(() => {
        if(sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])); //сортировка выбранным способом
        }
        
        return posts;
      }, [sort, posts])

      return sortedPosts;
}


export const usePosts = (posts, sort, query) => {   //арг: список постов, способ сортировки, поисковой запрос
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query));
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}