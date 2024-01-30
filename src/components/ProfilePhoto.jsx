
export default function ProfilePhoto(props) {
    return (
        <div className={`w-[68px] h-[68px] relative border-4 rounded-full border-white ${props.className ? props.className : ""}`}>
            <img src={props.src} alt="" />
            <div className="absolute right-0.5 top-0.5 w-3 h-3 border border-white bg-green-600 rounded-full"></div>
        </div>
    )
}