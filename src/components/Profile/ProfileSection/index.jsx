import "./profileSection.css"

export default function ProfileSection(props) {
  return (
    <div className="profileSection">
      {props.children}
    </div>
  )
}