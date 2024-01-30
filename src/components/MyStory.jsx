import ProfilePhoto from "./ProfilePhoto"
import BlockTitle from "./BlockTitle"
import Block from "./Block"

export default function MyStory() {
    return (
        <Block>
            <ProfilePhoto />
            <BlockTitle to="My story" />
        </Block>
    )
}