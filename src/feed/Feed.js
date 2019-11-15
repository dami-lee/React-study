import React from 'react';
import CommentBox from './CommentBox';
import FeedBox from './FeedBox';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                {
                    id: 0,
                    name: '펭수',
                    time: '2019.11.11',
                    comment: '안녕하세요.',
                    like: 10
                },
                {
                    id: 1,
                    name: '뽀로로',
                    time: '2019.11.12',
                    comment: '반갑습니다.',
                    like: 5
                },
                {
                    id: 2,
                    name: '어벤져스',
                    time: '2019.11.13',
                    comment: '제 이름은',
                    like: 0
                },
                {
                    id: 3,
                    name: '홍길동',
                    time: '2019.11.14',
                    comment: '홍길동입니다.',
                    like: 8
                }
            ]
        }
    }

    renderCommentBox = commentObj => {
        return (
            <FeedBox
                key={commentObj.id}
                like={commentObj.like}>
                <CommentBox
                    name={commentObj.name}
                    time={commentObj.time}
                    comment={commentObj.comment}/>
            </FeedBox>
        )
    }

    render() {
        const { comments } = this.state;
        const {
            renderCommentBox
        } = this;

        return (
            <div>
                {
                    comments.map(commentObj =>
                        renderCommentBox(commentObj)
                    )
                }
            </div>
        )
    }
}

export default Feed;