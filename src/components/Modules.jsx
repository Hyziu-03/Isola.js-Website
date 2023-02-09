import Jokes from "../icons/Jokes";
import Navigator from "../icons/Navigator";
import Tools from "../icons/Tools";

export default function Modules() {
    return (
        <section className="modules">
            <h2 className="subheading">What can you find in Isola.js?</h2>
            <section className="icons">
                <div className="navigator">
                    <span className="title">Navigator</span>
                    <Navigator />
                </div>
                <div className="tools">
                    <span className="title">Tools</span>
                    <Tools />
                </div>
                <div className="jokes">
                    <span className="title">Jokes</span>
                    <Jokes />
                </div>
            </section>
        </section>
    )
}
