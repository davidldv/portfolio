import type { APIRoute } from 'astro';
import { renderOg } from '../lib/og';

export const GET: APIRoute = async () => {
	const png = await renderOg({
		eyebrow: 'davidlondon.dev',
		title: 'David Londoño',
		footer: 'Software Engineer · Application Security · Full-Stack',
	});

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
