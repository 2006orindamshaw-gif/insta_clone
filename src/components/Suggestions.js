import React from 'react';
import { users, currentUser } from '../data';
import { Box, Avatar, Typography, Button, Stack } from '@mui/material';

const SuggestedUser = ({ user }) => {
    const [isFollowing, setIsFollowing] = React.useState(false);
    const [followerCount, setFollowerCount] = React.useState(user.followersCount);

    const handleFollowToggle = () => {
        if (isFollowing) {
            setFollowerCount(followerCount - 1);
        } else {
            setFollowerCount(followerCount + 1);
        }
        setIsFollowing(!isFollowing);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={user.profilePic} sx={{ width: 32, height: 32 }} />
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '14px', color: 'var(--text-color)' }}>
                        {user.username}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--secondary-text)', fontSize: '12px' }}>
                        {followerCount.toLocaleString()} followers
                    </Typography>
                </Box>
            </Stack>
            <Button
                variant="text"
                size="small"
                onClick={handleFollowToggle}
                sx={{
                    fontWeight: 'bold',
                    textTransform: 'none',
                    color: isFollowing ? 'var(--text-color)' : '#0095f6',
                    fontSize: '12px',
                    '&:hover': { backgroundColor: 'transparent' }
                }}
            >
                {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
        </Box>
    );
};

const Suggestions = () => {
    const mainSuggestions = users.slice(0, 5);

    return (
        <Box sx={{
            width: '320px',
            padding: '20px 0',
            display: { xs: 'none', lg: 'block' },
            position: 'sticky',
            top: '20px'
        }}>
            {/* Current User */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={currentUser.profilePic} sx={{ width: 56, height: 56 }} />
                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'var(--text-color)' }}>{currentUser.username}</Typography>
                        <Typography variant="body2" sx={{ color: 'var(--secondary-text)', fontSize: '12px' }}>{currentUser.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'var(--secondary-text)', fontSize: '11px' }}>
                            {currentUser.followersCount.toLocaleString()} followers
                        </Typography>
                    </Box>
                </Stack>
                <Button variant="text" size="small" sx={{ fontWeight: 'bold', textTransform: 'none', color: '#0095f6' }}>
                    Switch
                </Button>
            </Box>

            {/* Suggested Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'var(--secondary-text)' }}>
                    Suggestions for you
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 'bold', cursor: 'pointer', color: 'var(--text-color)' }}>
                    See All
                </Typography>
            </Box>

            {/* Suggested Users List */}
            <Stack spacing={2}>
                {mainSuggestions.map((user) => (
                    <SuggestedUser key={user.id} user={user} />
                ))}
            </Stack>

            <Box sx={{ mt: 4 }}>
                <Typography variant="caption" sx={{ fontSize: '12px', color: 'var(--secondary-text)' }}>
                    About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified
                </Typography>
                <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'var(--secondary-text)' }}>
                    © 2026 INSTALITE FROM META
                </Typography>
            </Box>
        </Box>
    );
};

export default Suggestions;
