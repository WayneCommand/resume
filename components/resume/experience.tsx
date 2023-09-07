import {subtitle, title} from "@/components/primitives";
import {Progress} from "@nextui-org/progress";
import { profileConfig } from "@/config/profile";

function ExperienceBlock(experience: any) {
    return (
        <div key={experience.title}>
            <div className="flex gap-20 pt-6 items-end text-center justify-center">
                <h2 className="text-xl font-semibold">{experience.title}</h2>
                <p className="text-md">{experience.subtitle}</p>
            </div>
            <hr/>
            <div>
                <p className="mx-5 mt-1 text-md indent-unit-xl antialiased">{experience.description}</p>
            </div>
            { experience.projects?.map( (proj: any) => ExperienceItem(proj)) }
        </div>
    )
}

function ExperienceItem(proj: any) {
    return (
        <div key={proj.name}>
            <div><p className="mx-20 pt-4 text-x font-medium">{proj.name}</p></div>
            <div className="text-md mx-5 pl-3 pt-0">
                <span className="font-medium">介绍: </span><span className="ml-2 indent-4">{proj.text}</span><br/>
                <span className="font-medium">关键技术点: </span><span className="ml-2 indent-4">{proj.point}</span>
            </div>
        </div>

    );
}



export const Experience = () => {


    return (
        <section className="flex flex-col gap-4 pt-8 md:pt-10">
            <div className="mod w-max">
                <h2 className={subtitle()}>项目经验 & 工作</h2>
                <Progress size="sm" aria-label="pb" value={100}/>
            </div>

            <div className="inline-block">
                { profileConfig.experience.map(exp => ExperienceBlock(exp)) }
            </div>
        </section>
    );
}