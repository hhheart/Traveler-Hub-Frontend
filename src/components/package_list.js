import React from 'react';

const PackageList = () =>{
    return (
        <div>
            <div>
                hello
            </div>
            <div className="alert alert-primary" role="alert">
                This is a primary alert with Give it a click if you like.
            </div>
            <img  alt='bunny' src={require('../static/images/polebunny.gif')}/>
        </div>
    )
}

export default PackageList;