class CommentList extends React.Component {
    render() {
        const commentNodes = this.props.data.map(comment => (
            <CommentFunctional author={comment.author} key={comment.id}>
                {comment.text}
            </CommentFunctional>
        ));
        return <div className="commentList">{commentNodes}</div>;
    }
}
