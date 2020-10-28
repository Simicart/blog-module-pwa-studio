import React from 'react';
import { Link } from '@magento/venia-drivers';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { Calendar as CalendarIc, User as AuthorIc, Eye as EyeIc } from 'react-feather';

const calenderIcon = <Icon src={CalendarIc} attrs={{ width: 13 }} />;
const authorIcon = <Icon src={AuthorIc} attrs={{ width: 13 }} />;
const eyeIcon = <Icon src={EyeIc} attrs={{ width: 13 }} />;

const BlogListingItem = props => {
    const { classes, item } = props;
    console.log(item)
    const {
        name,
        url_key,
        publish_date,
        categories,
        author_name,
        author_url_key,
        view_count,
        short_description
    } = item;
    return (
        <div className={classes.blogpostItem}>
            <h2>
                <Link to={`/blog/post/${url_key}.html`}>
                    {name}
                </Link>
            </h2>
            <div className={classes.blogpostInfo}>
                <span className={classes.calendarIcon}>
                    {calenderIcon}
                </span>
                <span className={classes.calendarData}>
                    {publish_date}
                </span>
                {
                    (categories && categories.items && categories.items.length) ?
                        <React.Fragment>
                            | <span className={classes.categoryData}>
                                {`Post In`} {
                                    categories.items.map(
                                        (categoryItem, index) =>
                                            <React.Fragment>
                                                <Link to={`/blog/category/${categoryItem.url_key}.html`}>
                                                    {categoryItem.name}
                                                </Link>
                                                {(index < (categories.items.length - 1)) ? ',' : ''}
                                            </React.Fragment>
                                    )
                                }
                            </span>
                        </React.Fragment>
                        :
                        ''
                } |
                <span className={classes.authorIcon}>
                    {authorIcon}
                </span>
                <span className={classes.authorName}>
                    <Link to={`/blog/category/${author_url_key}.html`}>
                        {author_name}
                    </Link>
                </span> |
                <span className={classes.eyeIcon}>
                    {eyeIcon}
                </span>
                <span className={classes.viewCount}>{view_count}</span>
            </div>
            <div className={classes.blogpostDescription}>
                {short_description}
            </div>
            <Link to={`/blog/post/${url_key}.html`}>
                <div className={classes.readMore}>
                    {'Read More'}
                </div>
            </Link>
        </div>
    )
}

export default BlogListingItem