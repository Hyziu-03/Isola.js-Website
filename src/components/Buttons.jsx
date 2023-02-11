export default function Buttons(props) {
  const { pkg, documentation } = props;

  return (
    <article className="buttons">
      <button className="package">{pkg}</button>
      <button className="documentation">{documentation}</button>
    </article>
  )
}
