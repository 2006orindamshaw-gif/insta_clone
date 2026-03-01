import { useEffect, useState } from "react";
import { users } from "../data";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import { Box, Avatar, Typography, IconButton } from "@mui/material";

export default function StoryViewer({ story, onClose }) {
    const user = users.find(u => u.id === story.userId);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [story, onClose]);

    return (
        <div className="story-viewer-overlay">
            <button className="close-viewer" onClick={onClose}>×</button>
            <div className="story-viewer-content">
                <div className="story-progress-container">
                    <div className="story-progress-bar animating"></div>
                </div>

                {/* Header */}
                <Box className="story-header" sx={{ position: 'absolute', top: 16, left: 0, right: 0, zIndex: 20, p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src={user.profilePic} sx={{ width: 32, height: 32, border: '1px solid white' }} />
                        <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 'bold' }}>
                            {user.username}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            • {story.timestamp}
                        </Typography>
                    </Box>
                </Box>

                <img src={story.media} alt="" style={{ width: '100%', flexGrow: 1, objectFit: 'contain', background: '#000' }} />

                {/* Footer / Reply Bar */}
                <Box className="story-footer" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{
                        flexGrow: 1,
                        border: '1px solid rgba(255,255,255,0.5)',
                        borderRadius: '25px',
                        px: 2,
                        py: '6px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <input
                            type="text"
                            placeholder="Send message"
                            className="story-reply-input"
                            style={{
                                background: 'none',
                                border: 'none',
                                outline: 'none',
                                color: 'white',
                                width: '100%',
                                fontSize: '14px'
                            }}
                        />
                    </Box>
                    <IconButton onClick={() => setLiked(!liked)} sx={{ color: liked ? 'red' : 'white', p: 1 }}>
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton sx={{ color: 'white', p: 1 }}>
                        <SendIcon sx={{ transform: 'rotate(-20deg)', mt: -0.5 }} />
                    </IconButton>
                </Box>
            </div>
        </div>
    );
}
