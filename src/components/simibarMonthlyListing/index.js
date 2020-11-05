import React from 'react'
import classes from './style.css'
import { GET_BLOG_ARCHIVE } from '../../talons/Blog.gql'
import { useQuery } from '@apollo/client';
import { Link } from '@magento/venia-drivers';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { Calendar as CalendarIc } from 'react-feather';

const calendarIcon = <Icon src={CalendarIc} attrs={{ width: 13 }} />;

const SimibarMonthlyListing = props => {
    const {
        data: archiveListData
    } = useQuery(GET_BLOG_ARCHIVE)

    if (archiveListData && archiveListData.mpBlogMonthlyArchive && archiveListData.mpBlogMonthlyArchive.items) {
        const archiveItems = archiveListData.mpBlogMonthlyArchive.items;
        return (
            <div className={classes.listRoot}>
                <div className={classes.listHeader}>{`Topics`}</div>
                <div className={classes.listItems}>
                    {archiveItems.map((archiveItem, index) => {
                        return (
                            <Link className={classes.listItem} to={`/blog/month/${index}.html`} key={archiveItem.label}>
                                {calendarIcon} {archiveItem.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
    return ''
}

export default SimibarMonthlyListing