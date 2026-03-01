import { useState } from "react";
import { users, currentUser } from "../data";
import CommentBox from "./CommentBox";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton, Avatar, Typography, Box } from "@mui/material";

export default function Post({ post }) {
    const user = users.find(u => u.id === post.userId);

    // In a real app, likes/comments would trigger Firestore updates 
    const [likes, setLikes] = useState(post.likes || []);
    const [comments, setComments] = useState(post.comments || []);
    const [isLiked, setIsLiked] = useState(post.likes.includes("me"));
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes.filter(l => l !== "me"));
        } else {
            setLikes([...likes, "me"]);
        }
        setIsLiked(!isLiked);
    };

    const handleAddComment = (text) => {
        setComments([...comments, { id: Date.now(), userId: "me", text }]);
    };

    return (
        <div className="post">
            <div className="post-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar src={user.profilePic} alt="" sx={{ width: 32, height: 32 }} />
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'var(--text-color)' }}>
                                {user.username}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'var(--secondary-text)' }}>
                                • {post.timestamp}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: '#0095f6',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    ml: 1,
                                    fontSize: '14px',
                                    '&:hover': { color: 'var(--text-color)' }
                                }}
                            >
                                • Following
                            </Typography>
                        </Box>
                        <Typography variant="caption" sx={{ color: 'var(--secondary-text)', fontSize: '12px' }}>
                            {user.followersCount.toLocaleString()} followers
                        </Typography>
                    </Box>
                </Box>
                <IconButton size="small" sx={{ color: 'var(--text-color)' }}>
                    <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>•••</Box>
                </IconButton>
            </div>
            <img src={post.media} className="post-media" onDoubleClick={handleLike} alt="" />
            <div className="post-footer">
                <Box className="post-actions" sx={{ display: 'flex', gap: 1 }}>
                    <IconButton onClick={handleLike} sx={{ color: isLiked ? "red" : "inherit", p: 1 }}>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton sx={{ p: 1 }}>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton sx={{ p: 1 }}>
                        <SendIcon sx={{ transform: 'rotate(-20deg)' }} />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton onClick={() => setIsBookmarked(!isBookmarked)} sx={{ p: 1, color: 'var(--text-color)' }}>
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Box>

                {/* Liked by with avatars */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, px: 1 }}>
                    <Box sx={{ display: 'flex', mr: 1 }}>
                        {post.likes.slice(0, 3).map((l, idx) => {
                            const lu = users.find(u => u.username === l) || users[idx];
                            return (
                                <Avatar
                                    key={idx}
                                    src={lu?.profilePic}
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        border: '2px solid var(--bg-color)',
                                        ml: idx === 0 ? 0 : -1
                                    }}
                                />
                            );
                        })}
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 600 }}>
                        {likes.length} likes
                    </Typography>
                </Box>

                <div className="caption" style={{ padding: '0 8px' }}>
                    <Typography variant="body2" component="span" sx={{ fontWeight: 'bold', mr: 1, color: 'var(--text-color)' }}>
                        {user.username}
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ color: 'var(--text-color)' }}>
                        {post.caption}
                    </Typography>
                </div>

                <div className="comments-list" style={{ padding: '0 8px', marginTop: '10px' }}>
                    {comments.map(c => {
                        const cu = users.find(u => u.id === c.userId) || currentUser;
                        return (
                            <Box key={c.id} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, gap: 1 }}>
                                <Avatar src={cu.profilePic} sx={{ width: 24, height: 24, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="body2" component="span" sx={{ fontWeight: 'bold', mr: 1, color: 'var(--text-color)' }}>
                                        {cu.username}
                                    </Typography>
                                    <Typography variant="body2" component="span" sx={{ color: 'var(--text-color)' }}>
                                        {c.text}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </div>
                <CommentBox post={post} onAddComment={handleAddComment} />
            </div>
        </div>
    );
}
