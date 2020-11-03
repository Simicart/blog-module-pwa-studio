import React, { useMemo } from 'react'
import classes from './sidebarPosts.css'
import { useSidebarPosts } from '../../talons/useSidebarPosts'
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import { Link } from '@magento/venia-drivers';

const PostItem = props => {
    const {
        name,
        image,
        publish_date,
        url_key
    } = props.item;
    return (
        <div className={classes.sidebarPostItem}>
            {
                image ? <div className={classes.sidebarPostItemImage} >
                    <img src={`/media/mageplaza/blog/post/resize/400x/${image}`} alt={name} />
                </div> : ''
            }
            <div className={classes.sidebarPostItemInfo}>
                <Link className={classes.sidebarPostItemName} to={`/blog/post/${url_key}.html`}>
                    {name}
                </Link>
                <div className={classes.sidebarPostItemDate}>{publish_date}</div>
            </div>
        </div>
    )
}

const SidebarPosts = props => {
    const {
        tab,
        setTab,
        popData,
        popLoading,
        latestData,
        latestLoading
    } = useSidebarPosts();

    const popPosts = useMemo(() => {
        if (popData && popData.mpBlogPosts && popData.mpBlogPosts.items) {
            return popData.mpBlogPosts.items.map(item => <PostItem item={item} key={item.url_key} />)
        }
        return []
    }, [latestData])

    const latestPosts = useMemo(() => {
        if (latestData && latestData.mpBlogPosts && latestData.mpBlogPosts.items) {
            return latestData.mpBlogPosts.items.map(item => <PostItem item={item} key={item.url_key} />)
        }
        return []
    }, [latestData])


    return (
        <div className={classes.root}>
            <div className={classes.tabsHeaders}>
                <div className={`${classes.tabsHeader} ${tab === 'pop' ? classes.active : classes.inactive}`}
                    onClick={() => setTab('pop')}
                >
                    {`Popular`}
                </div>
                <div className={`${classes.tabsHeader} ${tab === 'latest' ? classes.active : classes.inactive}`}
                    onClick={() => setTab('latest')}
                >
                    {`Latest`}
                </div>
            </div>
            <div className={classes.tabContents}>
                <div className={`${classes.tabContent} ${tab === 'pop' ? classes.active : classes.inactive}`} >
                    {popLoading ? <LoadingIndicator /> : ''}
                    {popPosts}
                </div>
                <div className={`${classes.tabContent} ${tab === 'latest' ? classes.active : classes.inactive}`} >
                    {latestLoading ? <LoadingIndicator /> : ''}
                    {latestPosts}
                </div>
            </div>
        </div>
    )
}

export default SidebarPosts