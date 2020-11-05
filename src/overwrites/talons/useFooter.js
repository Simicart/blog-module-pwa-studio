import { useQuery } from '@apollo/client';
import { Util } from '@magento/peregrine';
const { BrowserPersistence } = Util;
const storage = new BrowserPersistence();

/**
 *
 * @param {*} props.query the footer data query
 */
export const useFooter = props => {
    const { query } = props;
    const { data } = useQuery(query);
    if (data && data.mpBlogConfigs) {
        storage.setItem('simiBlogConfiguration', data.mpBlogConfigs);
    }
    return {
        copyrightText: data && data.storeConfig && data.storeConfig.copyright
    };
};
