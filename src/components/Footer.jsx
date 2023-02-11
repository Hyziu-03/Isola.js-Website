export default function Footer(props) {
  const { text } = props;

  return (
    <footer className="footer">
      <p className="text">{text}</p>
    </footer>
  )
}
