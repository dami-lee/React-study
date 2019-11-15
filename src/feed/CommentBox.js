import React from 'react';
import faker from 'faker';

const CommentBox = () => {
    return (
        <div className="comment-box">
            <img src={faker.image.avatar()} alt={faker.name.firstName()} />
            {faker.name.firstName()}
            2019.11.11
            안녕하세요.
            <div className="ui labeled button" tabindex="0">
                <div className="ui red button">
                    <i className="heart icon"></i>
                    Like
                </div>
                <a className="ui basic red left pointing label">0</a>
            </div>
        </div>
    )
}

export default CommentBox;