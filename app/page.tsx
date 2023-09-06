import {Title} from "@/components/resume/title";
import {Links} from "@/components/resume/links";
import {Skill} from "@/components/resume/skill";
import {Experience} from "@/components/resume/experience";

export default function Home() {
	return (
		<div>
			<Title />
			<Links />
			<Skill />
			<Experience />
		</div>

	);
}
