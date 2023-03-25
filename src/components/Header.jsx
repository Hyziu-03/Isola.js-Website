export default function Header(props) {
    const { heading, subheader } = props;

    return (
        <header className="header">
            <a className="link" href="/">
                <h1 className="heading" tabIndex={0}>{heading}</h1>
            </a>
            <p className="subheader">{subheader}</p>
        </header>
    )
}
