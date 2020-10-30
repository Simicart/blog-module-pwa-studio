import React from 'react';
import classes from './tagList.css'
import { GET_BLOG_TAGS } from '../../talons/Blog.gql'
import { useQuery } from '@apollo/client';
import { Link } from '@magento/venia-drivers';

const TagList = () => {
    const {
        data: tagListData
    } = useQuery(GET_BLOG_TAGS)

    if (tagListData && tagListData.mpBlogTags && tagListData.mpBlogTags.items) {
        const tagItems = tagListData.mpBlogTags.items;
        const maxFontSize = 26;
        let postNumber = 1;
        tagItems.map(tagItem => {
            try {
                const itemPostNum = tagItem.posts.items.length;;
                postNumber += parseInt(itemPostNum)
            } catch (err) {

            }
        });
        return (
            <div className={classes.tagListRoot}>
                <div className={classes.tagListHeader}>{`Tags`}</div>
                <div className={classes.tagItems}>
                    {tagItems.map(tagItem => {
                        let tagFontSize = 10;
                        try {
                            tagFontSize = maxFontSize * parseInt(tagItem.posts.items.length) / postNumber;
                            tagFontSize = (Math.ceil(tagFontSize) + 8);
                        } catch (err) {

                        }
                        return (
                            <Link className={classes.tagItem} to={`/blog/tag/${tagItem.url_key}.html`} style={{ fontSize: tagFontSize }} key={tagItem.name}>
                                {tagItem.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
    return ''
}
export default TagList