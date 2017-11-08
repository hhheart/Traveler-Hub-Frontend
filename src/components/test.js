import React from 'react';

import { Link } from 'react-router-dom';

const test = ({match}) => {
    //const {package_item} = props.location.state;
    return (
        <div>
            <div>this is test </div>
            <div>ID: {match.params.name}</div>
            <Link to="/">go back</Link>
        </div>
    )
}

export default test;