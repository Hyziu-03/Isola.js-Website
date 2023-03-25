export default function Buttons(props) {
  const { pkg, documentation } = props;

  return (
    <article className="buttons">
      <a href="https://www.npmjs.com/package/isola" target="_blank" rel="noopener noreferrer" className="package link">{pkg}</a>
      <a href="https://github.com/Hyziu-03/Isola.js#readme" target="_blank" rel="noopener noreferrer" className=" documentation link">{documentation}</a>
    </article>
  )
}
