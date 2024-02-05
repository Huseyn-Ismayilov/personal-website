export default function ListItem(props) {
    return (
        <div className="flex gap-4 relative attbc0">
            <div className="w-10 h-10 shrink-0">
                <img src={props.image} alt="" />
            </div>
            <div className="grow">
                <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold">{props.title}</h3>
                    <span className="text-gray-400">{props.date}</span>
                </div>
                <h5 className="text-sm text-gray-400 font-medium">{props.corporate}</h5>
            </div>
            <div className="line absolute left-0 -right-[100px] bottom-0 h-[1px] border-b border-b-gray-200"></div>
        </div>
    )
}