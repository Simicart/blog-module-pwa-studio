import React, { useEffect } from 'react'
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './blogListing.css'
import { useBlogListing } from '../../talons/useBlogListing'
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import BlogListingItem from '../blogListingItem'
import Pagination from '@magento/venia-ui/lib/components/Pagination';

const BlogListing = props => {
    const { filterType, filterValue } = props;
    const classes = mergeClasses(defaultClasses, props.classes);
    const talonProps = useBlogListing({ filterType, filterValue })
    const {
        blogData,
        blogLoading,
        blogError,
        pageControl,
        pageSize,
        setPageSize
    } = talonProps

    useEffect(() => {
        if (blogLoading) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }, [blogLoading]);

    if (blogLoading)
        return <LoadingIndicator />
    if (blogError || !blogData || !blogData.mpBlogPosts)
        return ''
    const { mpBlogPosts } = blogData;
    if (!mpBlogPosts.items || !mpBlogPosts.total_count)
        return <div className={classes.blogEmpty} >{'There are no posts at this moment'}</div>

    return (
        <div className={classes.blogListingCtn} >
            {
                mpBlogPosts.items.map(item =>
                    <BlogListingItem classes={classes} item={item} key={item.post_id} />
                )
            }
            <div className={classes.pagination}>
                <Pagination pageControl={pageControl} />
            </div>
            <div className={classes.pageSize}>
                {`Show `}
                <span className={classes.pageSizeInput}>
                    <select
                        onChange={e => {
                                setPageSize(e.target.value); pageControl.setPage(1)
                            }
                        }
                        value={pageSize}
                    >
                        <option value="5" >5</option>
                        <option value="10" >10</option>
                        <option value="20" >20</option>
                    </select>
                </span>
                {` per page`}
            </div>
        </div>
    )
}
export default BlogListing