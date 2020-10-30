import React from 'react';
import { useCateTree } from '../../talons/useCateTree'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import classes from './cateTree.css'
import { useHistory } from '@magento/venia-drivers';

const CateTree = props => {
    const { dataCateTree } = useCateTree()
    const history = useHistory();

    if (!dataCateTree || !dataCateTree.length)
        return ''

    return (
        <div className={classes.catetreeRoot}>
            <div className={classes.catetreeHeader}>{`Categories`}</div>
            <DropdownTreeSelect
                className={classes.dropdownSelect}
                keepChildrenOnSearch={true}
                showDropdown="always"
                data={dataCateTree}
                onChange={currentNode => {
                    history.push(`/blog/category/${currentNode.url_key}.html`)
                }}
                keepDropdownActive={true}
            />
        </div>
    )
}
export default CateTree