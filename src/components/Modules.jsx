import Jokes from "../icons/Jokes";
import Navigator from "../icons/Navigator";
import Tools from "../icons/Tools";

export default function Modules(props) {
    const { subheading } = props;

    return (
        <>
            <h2 className="subheading" tabIndex={0}>{subheading}</h2>
            <article className="icons">
                <section className="icon" tabIndex={0}>
                    <Navigator />
                    <span className="title">Navigator</span>
                </section>
                <section className="icon" tabIndex={0}>
                    <Tools />
                    <span className="title">Tools</span>
                </section>
                <section className="icon" tabIndex={0}>
                    <Jokes />
                    <span className="title">Jokes</span>
                </section>
            </article>
        </>
    )
}
