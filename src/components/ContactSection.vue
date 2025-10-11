<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">立即咨询，开启您的科研之旅</h2>
      <p class="section-description">
        如果您对我们的服务感兴趣，或有任何关于毕业设计、CCF/SCI论文辅导的需求，欢迎随时扫描下方二维码添加我们的官方联系方式进行一对一咨询。我们承诺对您的所有咨询内容保密，并期待与您交流。
      </p>
      <div class="qr-code-wrapper">
        <img src="@/assets/qr-code.jpg" alt="联系二维码">
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.contact-section {
  padding: 5rem 0;
  background-color: #f9fafb;
  text-align: center;
}
.section-title { font-family: 'Montserrat', sans-serif; font-size: 2.5rem; font-weight: 800; color: #1f2937; }
.section-description { 
  max-width: 700px; 
  margin: 1rem auto 0; 
  color: #4b5563; 
  font-size: 1.1rem;
  line-height: 1.8;
}
.qr-code-wrapper {
  margin-top: 2.5rem;
  display: inline-block; /* 让 wrapper 包裹图片，便于居中和加样式 */
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.qr-code-wrapper img {
  width: 280px; /* 控制二维码的显示大小 */
  height: 280px;
  display: block;
}
</style>