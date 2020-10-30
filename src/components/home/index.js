import React from 'react'
import BreadCrumb from '../breadcrumb/index';
import classes from './home.css';
import BlogListing from '../blogListing/index'
import SearchBlog from '../searchBlog'
import CateTree from '../cateTree'
import TagList from '../tagList'
import TopicList from '../topicList'
import SidebarPosts from '../sidebarPosts'


const Home = props => {
    return (
        <div className={classes.mainCtn}>
            <BreadCrumb items={
                [
                    {
                        label: 'Blog'
                    }
                ]
            }
            />
            <h1>{`Blog`}</h1>
            <div className={classes.blogRoot}>
                <div className={classes.blogListing}>
                    <BlogListing classes={classes} />
                </div>
                <div className={classes.blogSidebar}>
                    <SearchBlog />
                    <SidebarPosts />
                    <CateTree />
                    <TopicList />
                    <TagList />
                </div>
            </div>
        </div>
    )
}

export default Home