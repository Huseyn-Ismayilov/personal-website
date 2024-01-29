export default function SocialMediaIcon(props) {
    return (
        <a href={props.to} className="inline-block hover:scale-125">
            {props.children}
        </a>
    )
}