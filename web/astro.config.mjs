import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
			sidebar: [
				{
					label: '必修一',
					items: [
						// 这里暂时留空，或者放一个示例
						{ label: '开始学习', link: '/guides/example/' },
					],
				},
			],
		}),
	],
});