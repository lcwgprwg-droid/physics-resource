import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// 1. 引入公式插件
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	integrations: [
		starlight({
			title: '高中物理资源库',
			defaultLocale: 'zh-cn',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
			},
			// 2. 配置侧边栏 (这里我们规划好了未来的栏目)
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
				'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
			],
		}),
	],
	markdown: {
		// 4. 启用 Markdown 插件
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});