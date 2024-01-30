const list = [
    'Javascript',
    'React',
    'Redux',
    'Jquery',
    'Sass/Scss',
    'Tailwind',
    'Bootstrap',
    'Strapi',
    'Sanity',
    'Wordpress',
    'Webflow',
    'Elementor',
]
export default function SkillList() {
    return (
        <ul className="flex flex-wrap gap-x-2 gap-y-3">
            {
                list.map((item, index) => (
                    <li
                        key={index}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-gray-400 bg-white shadow-md"
                    >
                        {item}
                    </li>
                ))
            }
        </ul>
    )
}