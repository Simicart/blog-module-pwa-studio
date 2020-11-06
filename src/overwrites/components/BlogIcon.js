import React from 'react';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { PenTool as PenToolIcon } from 'react-feather';
import { resourceUrl, useHistory } from '@magento/venia-drivers';
import classes from './blogicon.css';
import { FormattedMessage, useIntl } from 'react-intl';
import { Util } from '@magento/peregrine';
const { BrowserPersistence } = Util;
const storage = new BrowserPersistence();

const BlogIcon = () => {
    const history = useHistory();
    const { formatMessage } = useIntl();

    const simiBlogConfiguration = storage.getItem('simiBlogConfiguration');
    if (simiBlogConfiguration && simiBlogConfiguration.general && simiBlogConfiguration.general.toplinks) {
        return (
            <button
                aria-label={formatMessage({
                    id: 'blog.bloglabel',
                    defaultMessage: 'Blog'
                })}
                className={classes.root}
                onClick={() => history.push(resourceUrl('/blog.html'))}
            >
                <Icon src={PenToolIcon} />
                <span className={classes.label}>
                    <FormattedMessage id={'Blog'} />
                </span>
            </button>
        )
    }
    
    return ''
}
export default BlogIcon