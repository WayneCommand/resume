import {subtitle, title} from "@/components/primitives";
import {Progress} from "@nextui-org/progress";
import {Code} from "@nextui-org/code";
import { profileConfig } from "@/config/profile";

function SkillItem(title: string, text: string) {
    let items = text.split(",");
    return (
        <div>
            <strong>{title}: </strong>
            {items.map(it => <Code color="default" className="ml-3 mt-2" key={it}>{it}</Code>)}
        </div>
    );
}

export const Skill = () => {

    return (
        <section className="flex flex-col gap-4 pt-8 md:pt-10">
            <div className="mod w-max">
                <h2 className={subtitle()}>个人介绍 & 技能</h2>
                <Progress size="sm" aria-label="pb" value={100}/>
            </div>
            <div className="flex pt-5 items-center justify-center">
                <div className="gap-3 w-[95%] items-center text-left justify-center">
                    {profileConfig.introduce.map(item => <p className="tracking-wide leading-relaxed" key={item}>{item}</p>)}
                </div>
            </div>
            <div className="flex pt-5 items-center justify-center">
                <div className="gap-3 w-[95%] items-center text-left justify-center">
                    {profileConfig.skill.map(item => SkillItem(item.title, item.text))}
                </div>
            </div>
        </section>
    );
}