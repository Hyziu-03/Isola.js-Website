export default function Header(props) {
    const { heading, subheader } = props;

    return (
        <header className="header">
            <h1 className="heading" tabIndex={0}>{heading}</h1>
            <p className="subheader">{subheader}</p>
        </header>
    )
}
