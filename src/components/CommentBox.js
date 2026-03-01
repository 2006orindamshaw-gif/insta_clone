import { useState } from "react";
import { users } from "../data";

export default function CommentBox({ post, onAddComment }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAddComment(text);
            setText("");
        }
    };

    return (
        <form className="comment-input-container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a comment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" disabled={!text.trim()}>Post</button>
        </form>
    );
}
