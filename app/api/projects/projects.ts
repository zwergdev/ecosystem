export type Project = {
	name: string
	image: string
	sector: 'Wallet' | 'Media' | 'NFT' | 'DeFi' | 'Marketplace'
	rating: 'Low' | 'Middle' | 'High'
	socials: {
		twitter: `https://${string}`
		discord?: `https://${string}`
		medium?: `https://${string}`
		gitbook?: `https://${string}`
		site?: `https://${string}`
		zealy?: `https://${string}`
	}
	desc?: string
}
export const projects: Project[] = [
	{
		name: 'SuiGlobal',
		image: '/img/projects/suiglobal.jpg',
		sector: 'Media',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/SuiGlobal',
			discord: 'https://discord.com/invite/suiglobalofficial',
			site: 'https://suiglobal.com/',
			gitbook: 'https://fischermingo.gitbook.io/aptomingos-whitepaper/',
			zealy: 'https://zealy.io/c/suiglobal/questboard',
			medium: 'https://suiglobal.medium.com/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Aptomingos',
		image: '/img/projects/aptomingos.jpg',
		sector: 'NFT',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/Aptomingos',
			discord: 'https://discord.gg/CxhJMXrjAW',
			site: 'https://aptomingos.io/',
			gitbook: 'https://fischermingo.gitbook.io/aptomingos-whitepaper/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Coin98',
		image: '/img/projects/coin98.jpg',
		sector: 'Wallet',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/coin98_wallet',
			discord: 'https://discord.com/invite/ytkeARXYu9',
			site: 'https://coin98.com/',
			gitbook: 'https://docs.coin98.com/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Sui Ecosystem',
		image: '/img/projects/suiecosystem.jpg',
		sector: 'Media',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/SuiEcosystem',
			discord: 'https://discord.com/invite/suiecosystem',
			site: 'https://suiecosystem.top/',
			zealy: 'https://zealy.io/c/suiecosystem/questboard'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Aptonauts',
		image: '/img/projects/aptonauts.jpg',
		sector: 'NFT',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/Aptonauts_NFT',
			discord: 'https://discord.com/invite/GjU9F9qBbN'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Araya Finance',
		image: '/img/projects/araya.jpg',
		sector: 'DeFi',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/ArayaFinance',
			discord: 'https://discord.com/invite/QP3UqGDkuD'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'BlueMove',
		image: '/img/projects/bluemove.jpg',
		sector: 'Marketplace',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/BlueMove_OA',
			discord: 'https://discord.com/invite/bluemove',
			site: 'https://bluemove.net/',
			gitbook: 'https://docs.bluemove.net/docs/welcome-to-bluemove'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Capybaras',
		image: '/img/projects/capybaras.jpg',
		sector: 'NFT',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/SuiNetwork',
			discord: 'https://discord.com/invite/sui',
			site: 'https://sui.io/',
			gitbook: 'https://github.com/MystenLabs/sui/blob/main/doc/paper/sui.pdf'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Clutchy',
		image: '/img/projects/clutchy.jpg',
		sector: 'Marketplace',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/Clutchy_io',
			discord: 'https://discord.com/invite/clutchyNFT',
			site: 'https://clutchy.io/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Ethos',
		image: '/img/projects/ethos.jpg',
		sector: 'Wallet',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/EthosWalletXYZ',
			discord: 'https://discord.com/invite/ethoswallet',
			site: 'https://ethoswallet.xyz/',
			gitbook: 'https://docs.ethoswallet.xyz/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Fewcha Wallet',
		image: '/img/projects/fewchawallet.jpg',
		sector: 'Wallet',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/FewchaWallet',
			discord: 'https://discord.com/invite/fewcha',
			site: 'https://fewcha.app/',
			gitbook: 'https://docs.fewcha.app/',
			medium: 'https://medium.com/@fewchawallet'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'funnyybuns',
		image: '/img/projects/funnyybuns.jpg',
		sector: 'NFT',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/funnyybuns',
			discord: 'https://discord.com/invite/funnyybuns',
			site: 'https://funnyybuns.com/',
			medium: 'https://medium.com/@funnyybuns'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Pontem Network',
		image: '/img/projects/pontem.jpg',
		sector: 'DeFi',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/PontemNetwork',
			discord: 'https://discord.com/invite/44QgPFHYqs',
			site: 'https://pontem.network/',
			medium: 'https://pontem.medium.com/',
			gitbook: 'https://docs.pontem.network/00.-about-pontem/about'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Souffl3',
		image: '/img/projects/souffl3.jpg',
		sector: 'Marketplace',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/nft_souffl3',
			discord: 'https://discord.com/invite/souffl3',
			site: 'https://souffl3.com/',
			gitbook: 'https://github.com/ENJOY-LAB/souffl3-docs'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Suiet',
		image: '/img/projects/suiet.jpg',
		sector: 'Wallet',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/suiet_wallet',
			discord: 'https://discord.com/invite/XQspMzXNXu',
			site: 'https://suiet.app/',
			gitbook: 'https://github.com/suiet',
			medium: 'https://medium.com/@suiet_wallet'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Suipunks',
		image: '/img/projects/suipunks.jpg',
		sector: 'NFT',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/theSuiPunks',
			discord: 'https://discord.com/invite/suipunks',
			site: 'https://suipunks.xyz/',
			zealy: 'https://zealy.io/c/thesuipunks/questboard'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Wizard Land',
		image: '/img/projects/wizardland.jpg',
		sector: 'NFT',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/WizardLandSui',
			discord: 'https://discord.com/invite/wizardlandsui',
			site: 'https://wizardlandsui.com/',
			zealy: 'https://zealy.io/c/wizardlandsui-nft/questboard',
			gitbook: 'https://wizardland.gitbook.io/welcome/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Mover',
		image: '/img/projects/mover.jpg',
		sector: 'DeFi',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/moverxyz',
			site: 'https://mov3r.xyz/',
			medium: 'https://moverxyz.medium.com/',
			gitbook: 'https://github.com/mov3r'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Ditto',
		image: '/img/projects/ditto.jpg',
		sector: 'DeFi',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/Ditto_Finance',
			discord: 'https://discord.com/invite/ditto-fi',
			medium: 'https://medium.com/@dittoprotocol',
			site: 'https://www.dittofinance.io/',
			gitbook: 'https://dittofinance.gitbook.io/docs/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Tortuga',
		image: '/img/projects/tortuga.jpg',
		sector: 'DeFi',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/TortugaFinance',
			discord: 'https://discord.com/invite/tortuga-finance',
			site: 'https://tortuga.finance/',
			gitbook: 'https://docs.tortuga.finance/product-docs/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Martian',
		image: '/img/projects/martian.jpg',
		sector: 'Wallet',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/martian_wallet',
			discord: 'https://discord.com/invite/martian-wallet',
			medium: 'https://medium.com/@martian-wallet',
			site: 'https://martianwallet.xyz/',
			gitbook: 'https://docs.martianwallet.xyz/docs/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Blur',
		image: '/img/projects/blur.jpg',
		sector: 'Marketplace',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/blur_io',
			discord: 'https://discord.com/invite/blurdao',
			site: 'https://blur.io/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Topaz',
		image: '/img/projects/topaz.jpg',
		sector: 'Marketplace',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/TopazMarket',
			discord: 'https://discord.com/invite/SWVxuJkFSH',
			site: 'https://www.topaz.so/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Incrypted',
		image: '/img/projects/incrypted.jpg',
		sector: 'Media',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/incrypted',
			discord: 'https://discord.com/invite/SWVxuJkFSH',
			site: 'https://incrypted.com/'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Zwerg',
		image: '/img/projects/zwerg.jpg',
		sector: 'Media',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/zwergdev',
			gitbook: 'https://github.com/zwergdev'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	},
	{
		name: 'Whale',
		image: '/img/projects/whale.jpg',
		sector: 'Media',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/SuiWhale',
			discord: 'https://discord.com/invite/E32JG3f4gv'
		},
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consequuntur, delectus enim eos eum facilis fugit harum hic magnam numquam officiis perspiciatis qui quia reiciendis repudiandae ullam velit.'
	}
]
