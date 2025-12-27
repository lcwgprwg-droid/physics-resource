---
title: 必修第一册 (人教版)
description: 核心教材 · 高清扫描版
---

import { Icon } from '@astrojs/starlight/components';

<!-- 🟢 核心逻辑区：所见即所得 -->
<div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">

  <!-- 1. 状态栏：告诉用户当前预览的是什么 -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
    <span style="font-weight: bold; color: #374151; display: flex; align-items: center; gap: 6px;">
      👁️ 当前预览版本：v1.0 (demo.pdf)
    </span>
    <span style="font-size: 0.9em; color: #6b7280;">文件大小：15MB</span>
  </div>

  <!-- 2. 预览窗口 (加载 public/files/demo.pdf) -->
  <div style="border: 1px solid #d1d5db; border-radius: 8px; overflow: hidden; height: 600px; background: white;">
    <embed 
      src="/files/demo.pdf" 
      type="application/pdf" 
      width="100%" 
      height="100%" 
    />
  </div>

  <!-- 3. 操作栏：下载当前版本 / 上传新版本 -->
  <div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
    
    <!-- 下载按钮：下载的就是上面预览的同一个文件 -->
    <a href="/files/demo.pdf" download="高中物理必修一_v1.0.pdf" 
       style="flex: 2; background-color: #2563eb; color: white; text-decoration: none; padding: 12px; border-radius: 8px; text-align: center; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px;">
       📥 下载此文档
    </a>

    <!-- 上传按钮：逻辑是“补充/更新” -->
    <a href="https://docs.qq.com/form/page/你的腾讯文档ID" target="_blank"
       style="flex: 1; background-color: #059669; color: white; text-decoration: none; padding: 12px; border-radius: 8px; text-align: center; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px;">
       📤 上传更清晰的版本
    </a>
  </div>

  <!-- 4. 逻辑说明 -->
  <p style="margin-top: 10px; font-size: 0.85em; color: #6b7280; text-align: center;">
    * 预览加载失败？请点击左侧按钮直接下载查看。
  </p>

</div>

---

### 📑 章节快速导航
- [第一章：运动的描述](/bixiu1/chap1/)
- [第二章：匀变速直线运动](/bixiu1/chap2/)