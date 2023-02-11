export default function Author(props) {
    const { subheading, paragraphs } = props;

    return (
        <article className="author">
            <h2 className="subheading" tabIndex={0}>{subheading}</h2>
            <section className="explanation">
                <img src="" alt="" />
                <p className="text">{paragraphs[0]}</p>
                <p className="text">{paragraphs[1]}</p>
            </section>
        </article>
    )
}
