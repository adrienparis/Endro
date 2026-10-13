<script setup lang="ts">
import AppCard from '../components/AppCard.vue'
import { apps } from '../app'
</script>


<template>
    <header class="header">
        <div class="header-content">
            <div class="logo">
                <svg viewBox="0 0 48 48" width="40" height="40">
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#007AFF;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#34C759;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <rect x="4" y="4" width="16" height="16" rx="4" fill="url(#logoGradient)" opacity="0.9"/>
                    <rect x="28" y="4" width="16" height="16" rx="4" fill="#FF9500" opacity="0.9"/>
                    <rect x="4" y="28" width="16" height="16" rx="4" fill="#34C759" opacity="0.9"/>
                    <rect x="28" y="28" width="16" height="16" rx="4" fill="#007AFF" opacity="0.9"/>
                </svg>
                <h1>Gwern</h1>
            </div>
            <div class="user-info">
                <span class="user-name" id="user-name">Utilisateur</span>
                <a href="/oauth/logout" class="logout-btn">Se déconnecter</a>
            </div>
        </div>
    </header>
    <main class="main-content">
        <div class="welcome-section">
            <h2>Donemat</h2>
            <p>Choisissez une application pour commencer.</p>
        </div>
        <div class="grid">
            <AppCard v-for="app in apps" :key="app.name" :app="app"/>
        </div>
    </main>
</template>


<style scoped>


.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 24px;
}

.welcome-section h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #333;
}

.welcome-section p {
    font-size: 16px;
    color: #666;
    font-weight: 500;
}
.main-content {
    flex: 1;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px;
    width: 100%;
}

.header {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>