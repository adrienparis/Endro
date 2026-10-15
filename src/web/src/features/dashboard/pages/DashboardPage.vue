<script setup lang="ts">
import AppCard from '../components/AppCard.vue'
import { apps } from '../app'
</script>


<template>
    <header class="header">
        <div class="header-content">
            <div class="logo">
                <img src="/icons/tree.svg" alt="" width="80" height="80" />
                <h1>Endro</h1>
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

/* Header */
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

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #6ab47d;
}

.logo h1 {
    font-size: 24px;
    font-weight: 700;
    color: #333;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.user-name {
    font-weight: 600;
    color: #666;
    font-size: 14px;
    padding: 8px 16px;
    background: #f8f9fa;
    border-radius: 20px;
}

.logout-btn {
    padding: 10px 20px;
    background: white;
    color: #007AFF;
    border: 2px solid #007AFF;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s ease;
}

.logout-btn:hover {
    background: #007AFF;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

/* Main Content */
.main-content {
    flex: 1;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px;
    width: 100%;
}

.welcome-section {
    text-align: center;
    margin-bottom: 40px;
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

/* Apps grid */
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