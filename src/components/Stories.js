import { useState } from "react";
import { stories, users } from "../data";
import StoryViewer from "./StoryViewer";

export default function Stories() {
    const [active, setActive] = useState(null);
    const [seenStories, setSeenStories] = useState([]);

    const handleStoryClick = (s) => {
        setActive(s);
        if (!seenStories.includes(s.id)) {
            setSeenStories([...seenStories, s.id]);
        }
    };

    return (
        <>
            <div className="stories">
                {stories.map(s => {
                    const user = users.find(u => u.id === s.userId);
                    const isSeen = seenStories.includes(s.id);
                    return (
                        <div key={s.id} className={`story ${isSeen ? "seen" : ""}`} onClick={() => handleStoryClick(s)}>
                            <div className="story-img-wrapper">
                                <img src={user.profilePic} alt={user.username} />
                            </div>
                            <span className="story-username">{user.username}</span>
                        </div>
                    );
                })}
            </div>

            {active && <StoryViewer story={active} onClose={() => setActive(null)} />}
        </>
    );
}
