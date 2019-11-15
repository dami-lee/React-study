import React from 'react';
import faker from 'faker';

const CommentBox = props => {
    return (
        <div className="comment-box">
            <img src={faker.image.avatar()} alt={props.name} />
            {props.name}
            {props.date}
            {props.comment}
        </div>
    )
}

export default CommentBox;