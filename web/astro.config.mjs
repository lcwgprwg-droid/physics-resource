import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '高中物理资源库',
			defaultLocale: 'zh-cn',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			
			// --- 修复重点：使用最原始稳定的社交链接写法 ---
			social: {
				github: 'https://github.com/',
			},

			// 隐藏底部广告
			credits: false,

			// 侧边栏菜单
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
			// 公式样式
			customCss: [
				'katex/dist/katex.min.css',
			],
		}),
	],
	// Markdown 公式插件
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});