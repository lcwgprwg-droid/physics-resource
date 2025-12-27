import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// 1. 引入公式插件
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	integrations: [
		starlight({
			title: '高中物理资源库', // 网站主标题
			defaultLocale: 'zh-cn',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
			},
			
			// 1. 自定义 Logo (这里我们用一个物理图标代替图片，最省事)
			logo: {
				src: './src/assets/houston.webp', // 暂时用默认图片，或者你可以删掉这就只显示文字
				replacesTitle: false, // 设置为 true 则隐藏文字标题
			},

			// --- 修正点 1：公告栏配置 ---
			announcement: {
				content: '📢 <strong>最新通知：</strong> 必修一《第一章》课件已更新，欢迎下载！',
			},
			// --- 修正点 2：隐藏底部广告 ---
			credits: false,

			// 3. 社交链接 (把 GitHub 换成你的邮箱，方便学生联系)
			
			sidebar: [
				{
					label: '必修一',
					items: [
						{ label: '第一章：运动的描述', link: '/bixiu1/chap1/' },
						{ label: '第二章：匀变速直线运动', link: '/bixiu1/chap2/' },
					],
				},
				{
					label: '必修二',
					items: [
						{ label: '第五章：抛体运动', link: '/bixiu2/chap5/' },
					],
				},
				{
					label: '试卷真题',
					items: [
						{ label: '2024年高考试卷', link: '/papers/2024-gaokao/' },
					],
				},
			],
			// 3. 开启公式支持 CSS
			customCss: [
				'katex/dist/katex.min.css',
			],
		}),
	],
	markdown: {
		// 4. 启用 Markdown 插件
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});