import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const require = createRequire(import.meta.url);

const loadFont = (pkgFile: string): ArrayBuffer => {
	const buf = readFileSync(require.resolve(pkgFile));
	return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
};

// Loaded once per build process; reused across every generated image.
const fonts = [
	{
		name: 'Space Grotesk',
		data: loadFont('@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'),
		weight: 700 as const,
		style: 'normal' as const,
	},
	{
		name: 'Space Grotesk',
		data: loadFont('@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff'),
		weight: 500 as const,
		style: 'normal' as const,
	},
	{
		name: 'JetBrains Mono',
		data: loadFont('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff'),
		weight: 500 as const,
		style: 'normal' as const,
	},
];

const WIDTH = 1200;
const HEIGHT = 630;

const ACCENT = '#7c3aed';
const CORAL = '#ff6b5b';
const BG = '#0c0814';

export interface OgOptions {
	/** Small mono label above the title (e.g. category or "Portfolio"). */
	eyebrow?: string;
	/** The main headline. */
	title: string;
	/** Footer line under the rule (defaults to name + role). */
	footer?: string;
}

type El = {
	type: string;
	props: { style: Record<string, unknown>; children?: unknown };
};

const div = (style: Record<string, unknown>, children?: unknown): El => ({
	type: 'div',
	props: { style: { display: 'flex', ...style }, children },
});

const tree = ({ eyebrow = 'davidlondon.dev', title, footer = 'David Londoño · Full-Stack Engineer · Security-Focused' }: OgOptions): El =>
	div(
		{
			width: '100%',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'space-between',
			padding: '72px 80px',
			backgroundColor: BG,
			backgroundImage: `radial-gradient(900px 500px at 110% -10%, ${ACCENT}33, transparent), radial-gradient(700px 500px at -10% 120%, ${CORAL}1f, transparent)`,
			fontFamily: 'Space Grotesk',
		},
		[
			// Top: eyebrow with accent dot
			div({ alignItems: 'center', gap: '16px' }, [
				div({
					width: '14px',
					height: '14px',
					borderRadius: '9999px',
					backgroundColor: CORAL,
				}),
				div(
					{
						color: CORAL,
						fontFamily: 'JetBrains Mono',
						fontSize: '24px',
						fontWeight: 500,
						letterSpacing: '0.12em',
						textTransform: 'uppercase',
					},
					eyebrow,
				),
			]),
			// Middle: title
			div(
				{
					color: '#f4f5fb',
					fontFamily: 'Space Grotesk',
					fontWeight: 700,
					fontSize: title.length > 52 ? '60px' : title.length > 30 ? '76px' : '92px',
					lineHeight: 1.05,
					letterSpacing: '-0.03em',
					maxWidth: '1000px',
				},
				title,
			),
			// Bottom: rule + footer
			div({ flexDirection: 'column', gap: '22px' }, [
				div({
					width: '100%',
					height: '2px',
					backgroundImage: `linear-gradient(90deg, ${ACCENT}, ${CORAL}, transparent)`,
				}),
				div(
					{
						color: '#9aa0b4',
						fontSize: '28px',
						fontWeight: 500,
					},
					footer,
				),
			]),
		],
	);

export async function renderOg(options: OgOptions): Promise<Uint8Array> {
	const svg = await satori(tree(options) as never, {
		width: WIDTH,
		height: HEIGHT,
		fonts,
	});

	const png = new Resvg(svg, {
		fitTo: { mode: 'width', value: WIDTH },
	})
		.render()
		.asPng();

	return new Uint8Array(png);
}
