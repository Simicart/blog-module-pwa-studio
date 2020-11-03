import React from 'react';
import { Link } from '@magento/venia-drivers';
import BlogPostInfo from '../blogPostInfo'
import RichText from '@magento/venia-ui/lib/components/RichText'

const BlogListingItem = props => {
    const { classes, item } = props;
    const {
        name,
        url_key,
        short_description,
        image
    } = item;

    return (
        <div className={classes.blogpostItem}>
            {image ? <div className={classes.blogpostItemCol1} >
                <img src={`/media/mageplaza/blog/post/resize/400x/${image}`} alt={name} />
            </div> : ''}
            <div className={classes.blogpostItemCol2} >
                <h2>
                    <Link to={`/blog/post/${url_key}.html`} style={{color: '#1ABC9C'}}>
                        {name}
                    </Link>
                </h2>
                <BlogPostInfo item={item} classes={classes} />
                <div className={classes.blogpostDescription}>
                    <RichText classes={{ root: classes.blogpostDescriptionRichtext }} content={short_description} />
                </div>
                <Link to={`/blog/post/${url_key}.html`}>
                    <div className={classes.readMore}>
                        {'Read More'}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogListingItem