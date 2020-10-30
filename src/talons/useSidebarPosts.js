import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SIDEBAR_BLOG_POSTS } from './Blog.gql';

export const useSidebarPosts = props => {
    const [tab, setTab] = useState('pop');

    const {
        data: popData,
        loading: popLoading
    } = useQuery(GET_SIDEBAR_BLOG_POSTS);

    const {
        data: latestData,
        loading: latestLoading
    } = useQuery(GET_SIDEBAR_BLOG_POSTS)

    return {
        tab,
        setTab,
        popData,
        popLoading,
        latestData,
        latestLoading
    }
}