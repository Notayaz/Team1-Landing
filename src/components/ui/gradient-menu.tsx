import React from "react";
import { IoHomeOutline, IoCodeSlashOutline, IoFlaskOutline, IoBriefcaseOutline } from "react-icons/io5";

const menuItems = [
	{ title: "Home", icon: <IoHomeOutline />, gradientFrom: "#a955ff", gradientTo: "#ea51ff", href: "/" },
	{ title: "Code Translator", icon: <IoCodeSlashOutline />, gradientFrom: "#56CCF2", gradientTo: "#2F80ED", href: "#" },
	{ title: "Virtual Lab", icon: <IoFlaskOutline />, gradientFrom: "#FF9966", gradientTo: "#FF5E62", href: "https://virtual-lab-navy.vercel.app/" },
	{ title: "Career Guidance", icon: <IoBriefcaseOutline />, gradientFrom: "#80FF72", gradientTo: "#7EE8FA", href: "https://carrier-guidaince.vercel.app/" },
];

export default function GradientMenu() {
	return (
		<div className="flex items-center justify-center min-h-[4rem]">
			<ul className="flex gap-4">
				{menuItems.map(({ title, icon, gradientFrom, gradientTo, href }, idx) => (
					<li
						key={idx}
						style={{ ["--gradient-from" as any]: gradientFrom, ["--gradient-to" as any]: gradientTo }}
						className="relative w-[56px] h-[56px] bg-white/5 backdrop-blur rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] group cursor-pointer border border-white/10"
					>
						<a href={href} className="absolute inset-0 rounded-full outline-none focus:ring-2 focus:ring-primary/60">
							<span className="sr-only">{title}</span>
						</a>
						<span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
						<span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>
						<span className="relative z-10 transition-all duration-500 group-hover:scale-0">
							<span className="text-2xl text-gray-200">{icon}</span>
						</span>
						<span className="absolute text-white uppercase tracking-wide text-sm transition-all duration-500 scale-0 group-hover:scale-100">
							{title}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}