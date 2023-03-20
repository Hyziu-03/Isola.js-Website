export default function Author(props) {
    const { subheading, paragraphs } = props;

    return (
        <article className="author">
            <h2 className="subheading" tabIndex={0}>{subheading}</h2>
            <section className="explanation">
                <img src="" className="photo" alt="" />
                <section className="text">
                    <p>{paragraphs[0]}</p>
                    <p>{paragraphs[1]}</p>
                </section>
            </section>
        </article>
    )
}
