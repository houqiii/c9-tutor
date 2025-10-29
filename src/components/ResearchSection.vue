<template>
  <section class="research-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">研究方向</h2>
      </div>
      <div class="content-grid">
        <!-- 本科阶段 -->
        <div class="column">
          <h3 class="column-title blue">本科阶段</h3>
          <div class="topic-group">
            <h4>一、基础算法与模型</h4>
            <p>预测算法、推荐算法、大模型应用、知识图谱</p>
          </div>
          <div class="topic-group">
            <h4>二、数据分析与处理</h4>
            <p>情感分析、舆情监测、交叉学科数据分析可视化</p>
          </div>
          <div class="topic-group">
            <h4>三、系统与应用开发</h4>
            <p>Python Django框架系统、Java SpringBoot框架系统、APP、微信小程序开发、网页前后端、WEB应用开发</p>
          </div>
          <div class="topic-group">
            <h4>四、其他</h4>
            <p>爬虫、机器学习、深度学习、机器视觉、联邦学习、多模态检测与处理（图像识别、图像分类、语音识别、视频检测等）</p>
          </div>
        </div>

        <!-- 硕博与注意事项 -->
        <div class="column">
          <h3 class="column-title green">硕士阶段</h3>
          <div class="topic-group single-line">
            <p>硕士方向详谈</p>
          </div>

          <h3 class="column-title red attention-title">注意事项</h3>
          <div class="topic-group">
            <p>1、不接手硬件交互相关项目，缺乏实验环境</p>
            <p>2、鸿蒙系统相关开发不接</p>
            <p>3、可以分阶段、走平台交易，交付前会录制视频展示</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.research-section {
  background-color: #f9fafb; /* 和 ProofSection 一样的浅灰色背景 */
  padding: 5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937; /* 和其他标题一样的深灰色 */
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.column-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  color: #111827;
}

/* 标题前方的彩色方块，颜色与网站主色调统一 */
.column-title::before {
  content: '';
  width: 12px;
  height: 24px;
  display: inline-block;
  margin-right: 1rem;
  border-radius: 4px;
}

.column-title.blue::before { background-color: #2563eb; } /* 主题蓝 */
.column-title.green::before { background-color: #16a34a; } /* 绿色用于区分 */
.column-title.red::before { background-color: #dc2626; }  /* 红色用于警示 */

.topic-group {
  margin-bottom: 2rem;
  padding-left: 2.5rem; /* 内容左缩进，对齐标题 */
  border-left: 2px solid #e5e7eb; /* 左侧增加一条分割线，增加层次感 */
}

.topic-group:last-child {
  margin-bottom: 0;
}

.topic-group h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 0.75rem;
}

.topic-group p {
  line-height: 1.8;
  color: #4b5563;
}

.attention-title {
  margin-top: 3rem;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr; /* 在小屏幕上变成单列 */
    gap: 4rem;
  }
}
</style>