import "./LinkButton.css"

export default function LinkButton(props) {
  return (
    <div className="container-links">
      <a
        className="links"
        href={props.href}
        target="_blank">
        {props.children}
      </a>
    </div>
  )
}