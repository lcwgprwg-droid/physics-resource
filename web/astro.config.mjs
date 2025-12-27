import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	integrations: [
		starlight({
			title: '高中物理资源库',
			defaultLocale: 'zh-cn',
			locales: { root: { label: '简体中文', lang: 'zh-CN' } },
			credits: false, // 隐藏底部广告
			customCss: ['katex/dist/katex.min.css'], // 公式样式
			
			// --- 侧边栏结构重构 ---
			sidebar: [
				{
					label: '📚 资源共建',
					items: [
						{ label: '📤 上传资源', link: '/upload/' }, // 新增上传入口
					],
				},
				{
					label: '📖 电子课本',
					items: [
						{ label: '必修一', link: '/textbooks/bixiu1/' },
						{ label: '必修二', link: '/textbooks/bixiu2/' },
						{ label: '必修三', link: '/textbooks/bixiu3/' },
					],
				},
				{
					label: '🖥️ PPT 课件',
					items: [
						{ label: '高一课件', link: '/ppts/grade1/' },
						{ label: '高二课件', link: '/ppts/grade2/' },
					],
				},
				{
					label: '📝 教学设计',
					items: [
						{ label: '优秀教案', link: '/designs/best/' },
					],
				},
				{
					label: '🧮 典型题库',
					items: [
						{ label: '力学典型题', link: '/questions/mechanics/' },
						{ label: '电磁学典型题', link: '/questions/electromagnetism/' },
					],
				},
				{
					label: '🚀 试卷真题',
					items: [
						{ label: '历年高考', link: '/papers/gaokao/' },
						{ label: '名校模拟', link: '/papers/mock/' },
					],
				},
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});