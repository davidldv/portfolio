import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { renderOg } from '../../../lib/og';

const categoryLabel: Record<string, string> = {
	htb: 'HTB',
	thm: 'THM',
	bugbounty: 'Bug Bounty',
	appsec: 'AppSec',
	ctf: 'CTF',
	research: 'Research',
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getCollection('writeups', ({ data }) => !data.draft);
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { post },
	}));
};

export const GET: APIRoute = async ({ props }) => {
	const { post } = props as { post: CollectionEntry<'writeups'> };

	const png = await renderOg({
		eyebrow: categoryLabel[post.data.category] ?? 'Writeup',
		title: post.data.title,
		footer: 'David Londoño · Writeups · davidlondon.dev',
	});

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
