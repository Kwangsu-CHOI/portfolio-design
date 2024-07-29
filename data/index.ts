export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Experience", link: "#testimonials" },
	{ name: "Education", link: "#education" },
];

export const gridItems = [
	{
		id: 1,
		title:
			"I always prioritise communication with colleagues and with clients to ensure the best outcome for both parties.",
		description:
			"Confident use of both verbal and written mediums; actively participated in group projects and work discussions. My proposed sales strategies triggered to dramatic growth during the COVID period and have significantly contributed to growing sales by an average of 10% over the past two years.",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full opacity-50",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm fluent in Korean and English",
		description:
			"Deliver technical/marketing matters effectively to the teammates in Korea and Japan for designing and publishing digital contents.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-70",
		imgClassName: "",
		titleClassName: "justify-start z-70",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My Skills",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently focusing on NextJs",
		description:
			"I always have passion to be a developer. I spend a lot of time studying and developing ReactJs based web applications.",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Expense Tracker",
		des: "Track your income and expense for better budgeting. Full stack app using React, React-Query, Prisma, Tailwind.",
		img: "/p1.svg",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/prisma.png", "/c.svg"],
		link: "https://expense-tracker-steel-three.vercel.app",
		sort: "FULL STACK",
	},
	{
		id: 2,
		title: "Workspace",
		des: "AI integrated Block based note App. Seamless real-time collaboration with others! Full stack app using NextJs, Firebase, Tailwind.",
		img: "/p2.svg",
		iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/firebase.svg", "/c.svg"],
		link: "https://myworkspace-five.vercel.app",
		sort: "FULL STACK",
	},
	{
		id: 3,
		title: "Static-Blog",
		des: "Static blog app with NextJs, Markdown, ContentLayer, Tailwind.",
		img: "/p3.svg",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/markdown.svg", "/c.svg"],
		link: "/ui.aiimg.com",
		sort: "FRONT END",
	},
	{
		id: 4,
		title: "Ecommerce App",
		des: "Ecoomerce application with Admin dashboard. Manage items through admin panel.",
		img: "/p4.svg",
		iconLists: [
			"/next.svg",
			"/tail.svg",
			"/ts.svg",
			"/prisma.svg",
			"/gsap.svg",
		],
		link: "https://ecom-store-liart.vercel.app/",
		sort: "FULL STACK",
	},
];

export const testimonials = [
	{
		quote:
			"Kwangsu always works responsibly and efficiently. I was very impressed by his time management skill. He never lose the quality of outcomes while handling multiple project simutaneously. He is always showing us his professionalism, promptness, and dedication to us in any circumstance. His enthusiasm and positive attitude help our team to focus on work effectively and make us stand out. If you're looking for anyone who gives positive synergy to the team, Kwangsu will be the ideal one.",
		name: "Sungjong Choi",
		title: "Director of SJC Cooperation",
	},
	{
		quote:
			"He always finished task in time. His translation job was very impressive as the quality of job was even better than job done by our subcontractor. One thing I was very surprised about was that he did not hesitate to raise questions about the ongoing project, which is not easy to do in Korean company culture.",
		name: "Jiyong Kim",
		title: "Main producer of STICKs interactive",
	},
];

export const companies = [
	{
		id: 1,
		name: "cloudinary",
		img: "/cloud.svg",
		nameImg: "/cloudName.svg",
	},
	{
		id: 2,
		name: "appwrite",
		img: "/app.svg",
		nameImg: "/appName.svg",
	},
	{
		id: 3,
		name: "HOSTINGER",
		img: "/host.svg",
		nameImg: "/hostName.svg",
	},
	{
		id: 4,
		name: "stream",
		img: "/s.svg",
		nameImg: "/streamName.svg",
	},
	{
		id: 5,
		name: "docker.",
		img: "/dock.svg",
		nameImg: "/dockerName.svg",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Frontend Engineer Intern",
		desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
		drawerTitle: "test title 1",
		drawerDesc: "test desc 1",
	},
	{
		id: 2,
		title: "Mobile App Dev - JSM Tech",
		desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
		drawerTitle: "test title 2",
		drawerDesc: "test desc 2",
	},
	{
		id: 3,
		title: "Freelance App Dev Project",
		desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp3.svg",
		drawerTitle: "test title 3",
		drawerDesc: "test desc3",
	},
	{
		id: 4,
		title: "Lead Frontend Developer",
		desc: "Developed and maintained user-facing features using modern frontend technologies.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
		drawerTitle: "test title 4",
		drawerDesc: "test desc4",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
	},
	{
		id: 2,
		img: "/twit.svg",
	},
	{
		id: 3,
		img: "/link.svg",
	},
];
