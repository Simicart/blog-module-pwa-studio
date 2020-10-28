import React from 'react'
import BreadCrumb from '../breadcrumb/index';
import classes from './home.css';
import BlogListing from '../blogListing/index'

const Home = props => {
    console.log(props)
    return (
        <div className={classes.homeCtn}>
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
                    b
                </div>
            </div>
        </div>
    )
}

export default Home