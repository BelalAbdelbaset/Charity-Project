<script setup>
import { ref, computed } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDarkMode, toggleTheme } = useTheme()

const galleryItems = [
    {
        id: 1,
        title: 'حفل توزيع المساعدات',
        image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop&q=60',
        category: 'فعاليات'
    },
    {
        id: 2,
        title: 'مشروع إطعام المحتاجين',
        image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop&q=60',
        category: 'مشاريع'
    },
    {
        id: 3,
        title: 'زيارة دار الأيتام',
        image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&auto=format&fit=crop&q=60',
        category: 'زيارات'
    },
    {
        id: 4,
        title: 'حملة التبرع بالدم',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60',
        category: 'فعاليات'
    },
    {
        id: 5,
        title: 'مشروع التعليم',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60',
        category: 'مشاريع'
    },
    {
        id: 6,
        title: 'توزيع السلال الغذائية',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=60',
        category: 'مشاريع'
    }
]

const categories = ['الكل', 'فعاليات', 'مشاريع', 'زيارات']
const selectedCategory = ref('الكل')

const filteredItems = computed(() => {
    if (selectedCategory.value === 'الكل') return galleryItems
    return galleryItems.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
    <div class="gallery">
        <div class="container py-5">
            <div class="d-flex justify-content-between align-items-center mb-5">
                <div class="text-center flex-grow-1">
                    <h1 class="display-4 fw-bold mb-3">معرض الصور</h1>
                    <p class="lead text-muted">شاهد صور فعالياتنا ومشاريعنا الخيرية</p>
                </div>
                <button class="btn theme-toggle" @click="toggleTheme">
                    <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
                </button>
            </div>

            <!-- Category Filter -->
            <div class="text-center mb-5">
                <div class="btn-group filter-buttons" role="group">
                    <button v-for="category in categories" :key="category" class="btn"
                        :class="selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'"
                        @click="selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>

            <!-- Gallery Grid -->
            <div class="row g-4">
                <div class="col-md-4" v-for="item in filteredItems" :key="item.id">
                    <div class="gallery-item">
                        <img :src="item.image" :alt="item.title" class="img-fluid">
                        <div class="gallery-overlay">
                            <div class="overlay-content">
                                <h5 class="mb-2">{{ item.title }}</h5>
                                <span class="badge bg-primary">{{ item.category }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    --bg-color: #f8f9fa;
    --text-color: #212529;
    --card-bg: #ffffff;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --overlay-gradient: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
}

[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #f8f9fa;
    --card-bg: #2d2d2d;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    --overlay-gradient: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
}

.gallery {
    background-color: var(--bg-color);
    min-height: 100vh;
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: var(--card-shadow);
    aspect-ratio: 1;
    cursor: pointer;
    background-color: var(--card-bg);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--overlay-gradient);
    color: white;
    padding: 2rem 1.5rem 1.5rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.overlay-content {
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.gallery-item:hover .overlay-content {
    transform: translateY(0);
}

.gallery-overlay h5 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
}

.badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    font-weight: 500;
}

.filter-buttons {
    gap: 0.5rem;
}

.filter-buttons .btn {
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.filter-buttons .btn:hover {
    transform: translateY(-2px);
}

.theme-toggle {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--card-bg);
    border: none;
    box-shadow: var(--card-shadow);
    color: var(--text-color);
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    transform: scale(1.1);
}

.theme-toggle i {
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    .gallery-item {
        aspect-ratio: 4/3;
    }

    .filter-buttons {
        flex-wrap: wrap;
        justify-content: center;
    }

    .filter-buttons .btn {
        margin: 0.25rem;
    }
}
</style>
