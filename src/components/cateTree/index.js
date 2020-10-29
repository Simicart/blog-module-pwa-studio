import React from 'react';
import classes from './cateTree.css'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

const data = [
    {
        label: 'search me',
        value: 'searchme',
        children: [
            {
                label: 'search me too',
                value: 'searchmetoo',
                children: [
                    {
                        label: 'No one can get me',
                        value: 'anonymous',
                    },
                ],
            },
        ],
    },
    {
        label: 'search me',
        value: 'searchme',
        children: [
            {
                label: 'search me too',
                value: 'searchmetoo',
                children: [
                    {
                        label: 'No one can get me',
                        value: 'anonymous',
                    },
                ],
            },
        ],
    }
]

const onChange = (currentNode, selectedNodes) => {
    console.log('onChange::', currentNode, selectedNodes)
}
const onAction = (node, action) => {
    console.log('onAction::', action, node)
}
const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
}

const CateTree = props => {
    return (
        <div className={classes.catetreeRoot}>
            <div className={classes.catetreeHeader}>{`Categories`}</div>
            <DropdownTreeSelect
                className={classes.dropdownSelect}
                keepChildrenOnSearch={true}
                showDropdown="always"
                data={data} onChange={onChange}
                onAction={onAction} onNodeToggle={onNodeToggle}
                keepDropdownActive={true}
            />
        </div>
    )
}
export default CateTree