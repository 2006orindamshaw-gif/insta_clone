import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { posts } from "./data";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Suggestions from "./components/Suggestions";
import BottomNav from "./components/BottomNav";
import "./index.css";
import { Box } from "@mui/material";

function AppContent() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${dark ? "dark-mode" : ""}`}>
      {/* 1. Sidebar (Fixed Left) - Hidden on mobile */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Sidebar />
      </Box>

      {/* 2. Main Content Area */}
      <Box component="main" sx={{
        flexGrow: 1,
        marginLeft: { xs: 0, md: '72px', lg: '245px' },
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '5px 0 60px 0', sm: '10px 0 60px 0', md: '20px 0' },
        transition: 'margin-left 0.3s ease',
        width: '100%'
      }}>
        <Box sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '100%', md: '470px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: { xs: 0, sm: 1, md: 0 }
        }}>
          <Stories />

          <div className="posts-container">
            {posts.map(p => (
              <Post key={p.id} post={p} />
            ))}
          </div>
        </Box>

        {/* 3. Suggestions (Right) */}
        <Box sx={{ ml: 4, display: { xs: 'none', lg: 'block' } }}>
          <Suggestions />
        </Box>
      </Box>

      {/* 4. Bottom Navigation (Mobile Only) */}
      <BottomNav />

      {/* Theme Toggle */}
      <Box sx={{ position: 'fixed', bottom: { xs: 70, md: 20 }, right: 20, zIndex: 1000 }}>
        <button onClick={toggleTheme} style={{
          background: 'var(--bg-color)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-color)',
          padding: '8px 12px',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </Box>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
