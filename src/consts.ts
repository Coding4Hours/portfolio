import type { IconMap, SocialLink, Site } from "@/types";
import { FaJava } from "react-icons/fa";
import { FileCode, LucideAppWindow, Code } from "lucide-react";
import type { IconType } from "react-icons";
import {
	SiHtml5,
	SiJavascript,
	SiCss3,
	SiAstro,
	SiTailwindcss,
	SiGit,
	SiCloudflare,
	SiNetlify,
	SiUbuntu,
	SiLua,
	SiNodedotjs,
	SiTypescript,
	SiDiscord,
	SiSpotify,
	SiArchlinux,
	SiFishshell,
	SiDocker,
	SiApache,
	SiBrave,
	SiDebian,
	SiDeno,
	SiFastapi,
	SiNeovim,
} from "react-icons/si";

export const iconMap: { [key: string]: IconType } = {
	"mdi:fish": SiFishshell,
	"mdi:language-html5": SiHtml5,
	"mdi:language-javascript": SiJavascript,
	"mdi:language-css3": SiCss3,
	"simple-icons:astro": SiAstro,
	"mdi:tailwind": SiTailwindcss,
	"cib:apache": SiApache,
	"mdi:git": SiGit,
	"cib:cloudflare": SiCloudflare,
	"mdi:fastapi": SiFastapi,
	"cib:netlify": SiNetlify,
	"mdi:docker": SiDocker,
	"mdi:ubuntu": SiUbuntu,
	"mdi:language-lua": SiLua,
	"mdi:nodejs": SiNodedotjs,
	"mdi:discord": SiDiscord,
	"mdi:spotify": SiSpotify,
	"cib:brave": SiBrave,
	"mdi:visual-studio-code": FileCode,
	"mdi:windows": LucideAppWindow,
	"mdi:visual-studio": Code,
	"mdi:language-java": FaJava,
	"mdi:arch": SiArchlinux,
	"mdi:language-typescript": SiTypescript,
	"mdi:neovim": SiNeovim,
	"mdi:deno": SiDeno,
	"mdi:debian": SiDebian,
};
export type Technologies = {
	"Web Development": Category[];
	"Development Tools": Category[];
	"Hosting and Cloud Services": Category[];
	"Operating Systems": Category[];
	"Other Programming Languages and Technologies": Category[];
	"Web Servers": Category[];
	"Other Software": Category[];
	"Python Libraries": Category[];
	"CLI Tools": Category[];
};

export const technologies: Technologies = {
	"Python Libraries": [{ text: "FastApi", logo: "mdi:fastapi" }],
	"Web Development": [
		{ text: "Typescript", logo: "mdi:language-typescript" },
		{ text: "HTML", logo: "mdi:language-html5" },
		{ text: "JavaScript", logo: "mdi:language-javascript" },
		{ text: "CSS", logo: "mdi:language-css3" },
		{ text: "Astro", logo: "simple-icons:astro" },
		{ text: "Tailwind CSS", logo: "mdi:tailwind" },
	],
	"Development Tools": [
		{ text: "Visual Studio Code", logo: "mdi:visual-studio-code" },
		{ text: "Git", logo: "mdi:git" },
		{ text: "Neovim", logo: "mdi:neovim" },
		{ text: "Docker", logo: "mdi:docker" },
	],
	"CLI Tools": [{ text: "Fish", logo: "mdi:fish" }],
	"Hosting and Cloud Services": [
		{ text: "Cloudflare", logo: "cib:cloudflare" },
		{ text: "Netlify", logo: "cib:netlify" },
	],
	"Operating Systems": [
		{ text: "Windows", logo: "mdi:windows" },
		{ text: "Ubuntu", logo: "mdi:ubuntu" },
		{ text: "Arch", logo: "mdi:arch" },
		{ text: "Debian", logo: "mdi:debian" },
	],
	"Other Programming Languages and Technologies": [
		{ text: "Lua", logo: "mdi:language-lua" },
		{ text: "Java", logo: "mdi:language-java" },
		{ text: "Deno", logo: "mdi:deno" },
		{ text: "Node.js", logo: "mdi:nodejs" },
	],
	"Web Servers": [{ text: "Apache", logo: "cib:apache" }],
	"Other Software": [
		{ text: "Discord", logo: "mdi:discord" },
		{ text: "Spotify", logo: "mdi:spotify" },
		{ text: "Brave", logo: "cib:brave" },
	],
};

export const SITE: Site = {
	title: "Coding4Hours",
	description:
		"I'm a Junior Full Stack Developer with a passion for creating web applications. I have experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills. I enjoy collaborating with teams and contributing to projects that make a difference.",
	href: "https://cojocarudavid.me",
	author: "Coding4Hours",
	locale: "en-US",
	location: "United States",
};

export const NAV_LINKS: SocialLink[] = [
	{
		href: "/",
		label: "home",
	},
	{
		href: "/projects",
		label: "projects",
	},
	{
		href: "/blog",
		label: "blog",
	},
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		href: "https://github.com/Coding4Hours?ref=personal-website",
		label: "GitHub",
	},
	{
		href: "mailto:codinghourspoop@gmail.com",
		label: "Email",
	},
	{
		href: "/rss.xml",
		label: "RSS",
	},
	{
		href: "https://buymeacoffee.com/coding4hours",
		label: "BuyMeCoffee",
	},
];

export const ICON_MAP: IconMap = {
	Website: "lucide:globe",
	GitHub: "lucide:github",
	Email: "lucide:mail",
	RSS: "lucide:rss",
	BuyMeCoffee: "line-md:buy-me-a-coffee",
};

export interface Category {
	text: string;
	logo: string;
}
