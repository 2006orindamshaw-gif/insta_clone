export const users = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    username: `user_${i + 1}`,
    name: `User ${i + 1}`,
    profilePic: `https://i.pravatar.cc/150?u=user${i + 1}`,
    followersCount: Math.floor(Math.random() * 5000) + 100,
}));

export const currentUser = {
    id: "me",
    username: "orindam_s",
    name: "Orindam Shaw",
    profilePic: "https://i.pravatar.cc/150?img=12",
    followersCount: 1240,
};

export const stories = users.map((u, i) => ({
    id: i + 1,
    userId: u.id,
    media: `https://picsum.photos/400/600?random=${i + 100}`,
    timestamp: `${Math.floor(Math.random() * 20) + 1}h`,
}));

export const posts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    userId: (i % 14) + 1,
    media: `https://picsum.photos/800/800?random=${i + 500}`,
    likes: ["user_1", "user_2"],
    caption: i % 3 === 0 ? "Enjoying the view! 😍 #blessed" : i % 3 === 1 ? "Work hard, play hard. 💻🚀" : "Weekend energy! 🥂✨",
    timestamp: `${i + 1}h`,
    comments: [
        { id: i * 10 + 1, userId: (i % 5) + 1, text: "Wow, amazing shot!", likes: ["me"] },
        { id: i * 10 + 2, userId: ((i + 1) % 5) + 1, text: "Love this so much!", likes: [] },
    ],
}));
