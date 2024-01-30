export default function ReadMore(props) {
    return (
        <a href={props.to} className="inline-flex items-center font-medium gap-2 text-blue-600">
            Read more
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10.64L5.5 6.13998L1 1.63998" stroke="#2D9AFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
    )
}