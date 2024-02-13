export default function ListItem(props) {
    return (
        <div className="flex gap-4 relative attbc0">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                <img src={props.image} alt="" />
            </div>
            <div className="grow">
                <div className="flex justify-between">
                    <h3 className="text-base font-bold whitespace-pre-wrap">{props.title}</h3>
                    <span className="block text-xs text-gray-400 whitespace-nowrap mt-1">{props.date}</span>
                </div>
                <h5 className="text-sm text-gray-400 font-medium">{props.corporate}</h5>

                {props.accomplishments &&
                    <ul className="list-disc ps-4 mt-2">
                        {props.accomplishments.map((item, index) => (
                            <li
                                key={index}
                                className="text-gray-400 text-xs pb-1"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                }

            </div>
            <div className="line absolute left-0 -right-[100px] bottom-0 h-[1px] border-b border-gray-200"></div>
        </div >
    )
}