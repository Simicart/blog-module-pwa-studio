import React from 'react'
import classes from './breadCrumb.css';
import { Link } from '@magento/venia-drivers';

const BreadCrumb = props => {
    const { items } = props;
    return (
        < div className={classes.breadCrumb} >
            <Link className={classes.breadCrumbLink} to="/">{`Home`}</Link>
            {
                items.map((item, index) =>
                    <React.Fragment key={index}>
                        <span className={classes.breadCrumbSeparator}>{`/`}</span>
                        {
                            item.path ?
                                <Link className={classes.breadCrumbLink} to={item.path}>{item.label}</Link> :
                                <span className={classes.breadCrumbText}>{item.label}</span>
                        }
                    </React.Fragment>
                )
            }
        </div>
    )
}
export default BreadCrumb