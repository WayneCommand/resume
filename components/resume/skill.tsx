import {subtitle, title} from "@/components/primitives";
import {Progress} from "@nextui-org/progress";

export const Skill = () => {


    return (
        <section className="flex flex-col gap-4 py-8 md:py-10">
            <div className="mod w-max">
                <h2 className={subtitle()} >个人介绍 & 技能</h2>
                <Progress size="sm" aria-label="pb" value={100} />
            </div>
            <div className="inline-block pt-5">
                <div className="flex gap-3 items-center text-center justify-center">
                    <p>我就这么点屁话</p>
                </div>
            </div>
        </section>
    )
}