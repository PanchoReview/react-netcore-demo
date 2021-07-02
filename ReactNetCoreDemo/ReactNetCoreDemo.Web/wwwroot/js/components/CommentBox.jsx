﻿function CommentBox(props) {
    const [comments, setComments] = React.useState(props.initialData)
    React.useEffect(() => {
        window.setInterval(
            () => loadCommentsFromServer(),
            props.pollInterval,
        );
    }, [])

    const loadCommentsFromServer = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', props.url, true);
        xhr.onload = () => {
            const xhrData = JSON.parse(xhr.responseText);
            setComments(xhrData)
        };
        xhr.send();
    }

    const handleCommentSubmit = comment => {
        const commentsInternal = comments;
        // Optimistically set an id on the new comment. It will be replaced by an
        // id generated by the server. In a production application you would likely
        // use a more robust system for ID generation.
        comment.id = commentsInternal.length + 1;
        const newComments = commentsInternal.concat([comment]);
        setComments(newComments);

        const data = new FormData();
        data.append('Author', comment.author);
        data.append('Text', comment.text);

        const xhr = new XMLHttpRequest();
        xhr.open('post', props.submitUrl, true);
        xhr.onload = () => loadCommentsFromServer();
        xhr.send(data);
    }

    return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={comments} />
            <CommentForm onCommentSubmit={handleCommentSubmit} />
        </div>
    );

}

function createRemarkable() {
    var remarkable =
        'undefined' != typeof global && global.Remarkable
            ? global.Remarkable
            : window.Remarkable;

    return new remarkable();
}