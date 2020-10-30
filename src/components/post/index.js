import React from 'react'
import { usePost } from '../../talons/usePost'
import { useParams } from "react-router-dom";
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import classes from './postDetails.css';
import { Title, Meta } from '@magento/venia-ui/lib/components/Head';
import BreadCrumb from '../breadcrumb/index';
import SearchBlog from '../searchBlog';
import CateTree from '../cateTree';
import TagList from '../tagList';
import TopicList from '../topicList';
import SidebarPosts from '../sidebarPosts';
import RichContent from '@magento/venia-ui/lib/components/RichContent';
import BlogPostInfo from '../blogPostInfo';
import RelatedPosts from './relatedPosts';
import SharingBlock from '../sharingBlock';

const Post = props => {
    const { postUrl = "" } = useParams();
    const talonProps = usePost({ postUrl });
    if (!postUrl)
        return '';
    const {
        resultData,
        resultLoading
    } = talonProps
    if (resultLoading)
        return <LoadingIndicator />

    if (!resultData || !resultData.mpBlogPosts || !resultData.mpBlogPosts.items || !resultData.mpBlogPosts.items[0])
        return 'Cannot find item';

    const postData = resultData.mpBlogPosts.items[0];
    return (
        <div className={classes.root}>
            <Title>{postData.meta_title ? postData.meta_title : postData.name}</Title>
            <Meta name="description" content={postData.meta_description} />
            <Meta name="keywords" content={postData.meta_keywords} />
            <Meta name="robots" content={postData.meta_robots} />
            <BreadCrumb items={
                [
                    {
                        label: 'Blog',
                        path: '/blog.html'
                    },
                    {
                        label: postData.name,
                    }
                ]
            }
            />
            <h1>{postData.name}</h1>
            <div className={classes.blogDetailsRoot}>
                <div className={classes.blogDetailsContent}>
                    {!!postData.image &&
                        <img src={`/media/mageplaza/blog/post/${postData.image}`} alt="post image" className={classes.blogpostImage} />
                    }
                    <RichContent classes={{ root: classes.blogPostRichContent }} html={postData.post_content} />
                    <div className={classes.blogDetailsPostInfo}>
                        <BlogPostInfo item={postData} classes={classes} />
                    </div>
                    <SharingBlock classes={classes} />
                    {!!(postData && postData.posts && postData.posts.items && postData.posts.items.length) &&
                        <div className={`${classes.relatedPosts} ${classes.detailsSection}`}>
                            <div className={classes.sectionHeader}>
                                {`Related Posts`}
                            </div>
                            <div className={classes.sectionContent}>
                                <RelatedPosts classes={classes} items={postData.posts.items} />
                            </div>
                        </div>
                    }
                    {!!(postData && postData.products && postData.products.items && postData.products.items.length) &&
                        <div className={`${classes.relatedPosts} ${classes.detailsSection}`}>
                            <div className={classes.sectionHeader}>
                                {`Related Products`}
                            </div>
                            <div className={classes.sectionContent}>
                                <div className={classes.relatedProductSlide}>
                                    {
                                        postData.products.items.map(productItem => {
                                            return (
                                                <div className={classes.relatedProductSlideItem}>
                                                    <div>{productItem.sku}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className={classes.blogSidebar}>
                    <SearchBlog />
                    <SidebarPosts />
                    <CateTree />
                    <TopicList />
                    <TagList />
                </div>
            </div>
        </div >
    )
}

export default Post