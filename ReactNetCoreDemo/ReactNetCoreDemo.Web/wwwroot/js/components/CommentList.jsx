function CommentList(props) {
    const commentNodes = props.data.map(comment => (
        <Comment author={comment.author} key={comment.id}>
            {comment.text}
        </Comment>
    ));

    return <div className="commentList">{commentNodes}</div>;
}
