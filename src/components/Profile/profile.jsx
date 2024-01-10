import Title from "../Title"
import ProfileSection from "./ProfileSection"
import LinkButton from "../LinkButton/LinkButton"
import Avatar from "../../assets/avatar.png"
import "./profile.css"

export default function Profile(props) {
    return (
        <div className="container">
            <img className="avatar" src={Avatar} alt={props.name} />
            <Title>
                {props.name}
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
                <div className="container-links">
                    <div className="links-geral">
                        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
                        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
                    </div>
                </div>
            </ProfileSection>
        </div>
    )
}