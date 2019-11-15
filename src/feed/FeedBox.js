import React from 'react';

const FeedBox = props => {
    return (
        <div className="feed-box">
            {props.children}
            
            <div
                className="ui labeled button"
                onClick={
                    () => {
                        props.onClick(props.commentObj.id)
                    }
                }>
                <div className="ui red button">
                    <i className="heart icon"></i>
                    Like
                </div>
                <a className="ui basic red left pointing label">
                    {props.commentObj.like}
                </a>
            </div>
        </div>
    )
}

export default FeedBox;