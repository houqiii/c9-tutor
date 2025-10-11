<template>
  <section class="proof-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">全程透明，真实可靠</h2>
        <p class="section-description">我们坚信，信任建立在透明之上。这里展示了我们真实的服务流程与沟通细节。</p>
      </div>

      <!-- 图片轮播 -->
      <div class="carousel-grid">
        <div class="carousel-card">
          <h3>真实有效的沟通记录</h3>
          <Carousel :items-to-show="1" :wrap-around="true">
            <Slide v-for="i in communicationImageCount" :key="`comm-${i}`">
              <img :src="getCommunicationImageUrl(i)" :alt="`沟通截图 ${i}`">
            </Slide>
            <template #addons>
              <Navigation />
              <!-- Pagination 已被删除 -->
            </template>
          </Carousel>
        </div>
        <div class="carousel-card">
          <h3>诚信交易，合作共赢</h3>
            <Carousel :items-to-show="1" :wrap-around="true">
              <Slide v-for="i in paymentImageCount" :key="`pay-${i}`">
                <img :src="getPaymentImageUrl(i)" :alt="`收款记录 ${i}`">
              </Slide>
              <template #addons>
                <Navigation />
                <!-- Pagination 已被删除 -->
              </template>
            </Carousel>
        </div>
      </div>

      <!-- 视频 -->
      <div class="video-area">
         <h3>服务流程与专业辅导展示</h3>
         <div class="main-video">
             <h4>平台担保交易流程</h4>
             <div class="video-wrapper">
                 <iframe :src="platformTradeVideoUrl" title="平台交易明细" frameborder="0" allowfullscreen></iframe>
             </div>
         </div>
         <div class="sub-videos">
             <h4>部分项目讲解答疑展示</h4>
             <div class="sub-videos-grid">
                 <div class="video-wrapper" v-for="(video, index) in qaVideos" :key="index">
                     <iframe :src="video.url" :title="video.title" frameborder="0" allowfullscreen></iframe>
                 </div>
             </div>
         </div>
      </div>
    </div>
  </section>
</template>

<script setup>
 // 这部分脚本和之前一样，无需修改
 import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
 import 'vue3-carousel/dist/carousel.css';
 const communicationImageCount = 19;
 const paymentImageCount = 38;
 const platformTradeVideoUrl = '//player.bilibili.com/player.html?bvid=BV1eJ4czkEWe&page=1';
 const qaVideos = [
   { title: '项目讲解答疑 1', url: '//player.bilibili.com/player.html?bvid=BV1eJ4czkE6Q&page=1' },
   { title: '项目讲解答疑 2', url: '//player.bilibili.com/player.html?bvid=BV1RJ4czkE7w&page=1' },
   { title: '项目讲解答疑 3', url: '//player.bilibili.com/player.html?bvid=BV19J4czkE6d&page=1' },
   { title: '项目讲解答疑 4', url: '//player.bilibili.com/player.html?bvid=BV1RJ4czkEAo&page=1' },
 ];
 const getCommunicationImageUrl = (i) => {
   const number = i.toString().padStart(2, '0'); 
   return new URL(`../assets/communication/comm-${number}.png`, import.meta.url).href;
 };
 const getPaymentImageUrl = (i) => {
   const number = i.toString().padStart(2, '0');
   return new URL(`../assets/payment/pay-${number}.png`, import.meta.url).href;
 };
</script>

<style scoped>
.proof-section {
    background-color: #f9fafb;
    padding: 5rem 0;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
}
.section-header { text-align: center; margin-bottom: 3rem; }
.section-title { font-family: 'Montserrat', sans-serif; font-size: 2.5rem; font-weight: 800; color: #1f2937; }
.section-description { max-width: 600px; margin: 1rem auto 0; color: #4b5563; font-size: 1.1rem; }

.carousel-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.carousel-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    /* ↓↓↓↓↓↓ 这是本次唯一的、但最关键的修正！ ↓↓↓↓↓↓ */
    position: relative; /* 建立一个定位上下文，把分页器关在里面 */
    /* ↑↑↑↑↑↑ 这是本次唯一的、但最关键的修正！ ↑↑↑↑↑↑ */
}

.carousel-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
}

:deep(.carousel__slide) {
    max-height: 400px; 
    display: flex;
    align-items: center;
    justify-content: center;
}
:deep(.carousel__slide img) {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
}

.video-area { margin-top: 5rem; text-align: center; }
.video-area h3 { font-family: 'Montserrat', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 3rem; }
.video-area h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; }

.main-video { margin-bottom: 3rem; }
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.sub-videos-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
}

/* 响应式 */
@media (max-width: 768px) {
    .carousel-grid { grid-template-columns: 1fr; }
    .sub-videos-grid { grid-template-columns: 1fr; }
}

/* 轮播插件样式覆盖 */
:deep(.carousel__prev), :deep(.carousel__next) {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
}
:deep(.carousel__pagination) {
    position: absolute;
    bottom: 1rem; /* 从底部留出 1rem 的距离 */
    left: 0;
    right: 0;
}
:deep(.carousel__pagination-button--active) {
    background-color: #2563eb;
}
</style>