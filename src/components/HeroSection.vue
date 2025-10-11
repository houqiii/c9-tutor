<template>
  <section class="hero-section">
    <div class="container hero-content">
      <h1 class="hero-title">
        <span class="gradient-text">顶尖学术背景</span>
        <br>
        值得信赖的科研引路人
      </h1>
      <p class="hero-subtitle">
        我们是一支由C9联盟高校计算机方向的硕博研究生组成的学术辅导团队，致力于为您提供高质量、个性化的毕业设计与论文发表指导服务。
      </p>
      
      <div class="showcase-box">
        <h2 class="showcase-title">部分成果展示 (Selected Publications)</h2>
        <div class="image-wrapper">
          <img src="@/assets/accept.png" alt="论文录用邮件" class="showcase-image">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 6rem 0;
  text-align: center;
}
.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.2;
}
.gradient-text {
  background: linear-gradient(to right, #2563eb, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.hero-subtitle {
  margin-top: 1.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.8;
}
.showcase-box {
  margin-top: 4rem;
}
.showcase-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
}
.image-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.showcase-image {
  border-radius: 0.75rem;
  width: 100%;
}
/* 响应式 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>