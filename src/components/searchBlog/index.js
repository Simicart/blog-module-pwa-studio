import React from 'react'
import { useSearchBox } from '../../talons/useSearchBox'
import SearchField from '@magento/venia-ui/lib/components/SearchBar/SearchField';
import { Form } from 'informed';
import classes from './search.css'
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import { Link } from '@magento/venia-drivers';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { Search as SearchIc } from 'react-feather';

const searchIcon = <Icon src={SearchIc} attrs={{ width: 16 }} />;

const SearchBlog = props => {

    const {
        blogData,
        blogLoading,
        query,
        setQuery
    } = useSearchBox()

    let searchResult = [];
    if (blogData && blogData.mpBlogPosts && blogData.mpBlogPosts.items) {
        blogData.mpBlogPosts.items.map(item => {
            const {
                name,
                url_key,
                publish_date,
                image
            } = item;
            searchResult.push(
                <Link className={classes.searchItem} to={`/blog/post/${url_key}.html`}>
                    {image ? <div className={classes.searchItemImage} >
                        <img src={`/media/mageplaza/blog/post/resize/400x/${image}`} alt={name} />
                    </div> : ''}
                    <div className={classes.searchItemInfo}>
                        <div className={classes.searchItemName}>{name}</div>
                        <div className={classes.searchItemDate}>{publish_date}</div>
                    </div>
                </Link>
            )
        })
    }

    return (
        <div className="mpblog-search">
            <Form
                autoComplete="off"
                className={classes.searchForm}
            >
                <div className={classes.searchFieldCtn}>
                    <div className={classes.searchField}>
                        {searchIcon}
                        <input
                            id="blog-search-input-field"
                            type="text"
                            onChange={e => {
                                setTimeout(() => {
                                    if (!blogLoading)
                                        setQuery(document.getElementById('blog-search-input-field').value)
                                }, 2000)
                            }}
                            placeHolder={`Search blogs here...`}
                        />
                    </div>
                </div>
                {(blogLoading || searchResult) ?
                    <div className={classes.autocomplete}>
                        {blogLoading ? <LoadingIndicator /> : searchResult}
                    </div> : ''}
            </Form>
        </div>
    )
}

export default SearchBlog