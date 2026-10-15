<script setup lang="ts">
    import { computed } from 'vue'
    import type { AppItem } from '../types'

    const props = defineProps<{app: AppItem}>()

</script>

<template>
    <a :href="app.route" class="card" :class="{ disabled: app.statut === 'soon'}">
        <div class="icon">
            <img :src="app.icon" alt="" width="40" height="40" />
        </div>
        <div class="info">
            <h2>{{ app.name }}</h2>
            <p>{{app.description}}</p>
        </div>
        <div class="arrow">→</div>
        <span v-if="app.statut === 'soon'" class="coming-soon">Bientôt</span>
    </a>
</template>

<style scoped>
.card {
    background: white;
    border-radius: 12px;
    padding: 28px;
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    border: 2px solid transparent;
}
.card.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
.card:hover .arrow {
    color: #007AFF;
    transform: translateX(4px);
}
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-color: #007AFF;
}

.card.disabled:hover {
    transform: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-color: transparent;
}
.icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: v-bind('props.app.color');
    color: white;
}

.disabled .icon {
    background: #e0e0e0;
    color: #999;
}
.coming-soon {
    display: inline-block;
    margin-top: 8px;
    padding: 4px 12px;
    background: #FF9500;
    color: white;
    font-size: 11px;
    font-weight: 700;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}


.card:hover .icon {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}


.info {
    flex: 1;
}

.info h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
    margin-bottom: 4px;
}

.info p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
}

.arrow {
    font-size: 24px;
    color: #ccc;
    transition: all 0.2s ease;
}

.card:hover .arrow {
    color: #007AFF;
    transform: translateX(4px);
}

</style>