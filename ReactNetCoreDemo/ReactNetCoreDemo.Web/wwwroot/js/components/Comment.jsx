function Comment(props) {
    const rawMarkup = () => {
        const md = createRemarkable();
        const rawMarkup = md.render(props.children.toString());
        return { __html: rawMarkup };
    }

    return (
        <div className="comment">
            <h2 className="commentAuthor">{props.author}</h2>
            <span dangerouslySetInnerHTML={rawMarkup()} />
        </div>
    );
}
