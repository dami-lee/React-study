import React from 'react';
import faker from 'faker';

const CommentBox = () => {
    return (
        <div className="comment-box">
            <img src={faker.image.avatar()} alt={faker.name.firstName()} />
            {faker.name.firstName()}
            2019.11.11
            안녕하세요.
        </div>
    )
}

export default CommentBox;