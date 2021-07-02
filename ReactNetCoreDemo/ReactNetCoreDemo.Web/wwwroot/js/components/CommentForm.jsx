function CommentForm(props) {  

    const [formData, setFormData] = React.useState({ author: '', text: '' })

    const handleAuthorChange = e => {        
        console.log("updating author " + e.target.value)
        setFormData({ ...formData, author: e.target.value })
    }

    const handleTextChange = e => {
        console.log("updating text " + e.target.value)
        setFormData({ ...formData, text: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const author = formData.author.trim();
        const text = formData.text.trim();
        if (!text || !author) {
            return;
        }
        props.onCommentSubmit({ author: author, text: text });
        setFormData({ author: '', text: '' })

    }

    return (
        <form className="commentForm" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={formData.author}
                onChange={handleAuthorChange}
            />
            <input
                type="text"
                placeholder="Say something..."
                value={formData.text}
                onChange={handleTextChange}
            />
            <input type="submit" value="Post" />
        </form>
    );


}