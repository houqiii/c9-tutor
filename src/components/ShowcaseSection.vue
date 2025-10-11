<template>
  <section class="showcase-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">专业交付，成果斐然</h2>
        <p class="section-description">我们注重每一个项目的细节与交付质量，以下是部分项目的概览与交付实例。</p>
      </div>

      <div class="showcase-content">
        <h3>2025年度项目概览</h3>
        <div class="overview-image-wrapper">
          <img src="@/assets/项目总览.png" alt="项目总览">
        </div>
        
        <h3 class="delivery-title">部分项目交付视频实例</h3>
        <div class="delivery-videos-grid">
          <div class="video-wrapper" v-for="(video, index) in deliveryVideos" :key="index">
            <iframe :src="video.url" :title="video.title" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 请在这里配置您的4个交付视频链接
const deliveryVideos = [
  { title: '交付视频 1', url: '//player.bilibili.com/player.html?bvid=BV1RJ4czkEgn&page=1' },
  { title: '交付视频 2', url: '//player.bilibili.com/player.html?bvid=BV1RJ4czkEg2&page=1' },
  { title: '交付视频 3', url: '//player.bilibili.com/player.html?bvid=BV1VJ4czCEZr&page=1' },
  { title: '交付视频 4', url: '//player.bilibili.com/player.html?bvid=BV1eJ4czkEFf&page=1' },
];
</script>

<style scoped>
.showcase-section {
  padding: 5rem 0;
}
.section-header { text-align: center; margin-bottom: 3rem; }
.section-title { font-family: 'Montserrat', sans-serif; font-size: 2.5rem; font-weight: 800; color: #1f2937; }
.section-description { max-width: 600px; margin: 1rem auto 0; color: #4b5563; font-size: 1.1rem; }

.showcase-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #111827;
}
.overview-image-wrapper {
  max-width: 1000px; 
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  overflow: hidden;
}
.overview-image-wrapper img {
  width: 100%;
  display: block;
}

.delivery-title {
  margin-top: 4rem;
}

/* ↓↓↓↓↓↓ 核心改动在这里 ↓↓↓↓↓↓ */
.delivery-videos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 默认就是 2x2 布局 */
  gap: 1.5rem;
  max-width: 1100px; /* 可以给一个最大宽度让布局更好看 */
  margin: 0 auto;
}
/* ↑↑↑↑↑↑ 核心改动在这里 ↑↑↑↑↑↑ */

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* ↓↓↓↓↓↓ 简化的响应式规则 ↓↓↓↓↓↓ */
@media (max-width: 768px) {
  .delivery-videos-grid {
    grid-template-columns: 1fr; /* 在小屏幕上，变成一行1个 */
  }
}
/* ↑↑↑↑↑↑ 简化的响应式规则 ↑↑↑↑↑↑ */
</style>