import React from 'react';
import { Link } from '@magento/venia-drivers';
import BlogPostInfo from '../blogPostInfo'
import RichText from '@magento/venia-ui/lib/components/RichText'

const BlogListingItem = props => {
    const { classes, item, simiBlogConfiguration } = props;
    const {
        name,
        url_key,
        short_description,
        image
    } = item;
    let linkColor = '#1ABC9C';
    if (simiBlogConfiguration && simiBlogConfiguration.general && simiBlogConfiguration.general.font_color) {
        linkColor = simiBlogConfiguration.general.font_color;
    }
    return (
        <div className={classes.blogpostItem}>
            {image ? <div className={classes.blogpostItemCol1} >
                <img src={image} alt={name} />
            </div> : ''}
            <div className={classes.blogpostItemCol2} >
                <h2>
                    <Link to={`/blog/post/${url_key}.html`} style={{ color: linkColor }}>
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