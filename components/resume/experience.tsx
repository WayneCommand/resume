import {subtitle, title} from "@/components/primitives";
import {Link} from "@nextui-org/link";
import NextLink from "next/link";
import {siteConfig} from "@/config/site";
import {button as buttonStyles} from "@nextui-org/theme";
import {GithubIcon} from "@/components/icons";
import {Progress} from "@nextui-org/progress";

export const Experience = () => {


    return (
        <section className="flex flex-col gap-4 py-8 md:py-10">
            <div className="mod w-max">
                <h2 className={subtitle()} >项目经验 & 工作</h2>
                <Progress size="sm" aria-label="pb" value={100} />
            </div>

            <div className="inline-block pt-5">

                <div className="flex gap-3 pt-5 items-center text-center justify-center">
                    <Link
                        isExternal
                        as={NextLink}
                        href={siteConfig.links.docs}
                        className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                    >
                        Documentation
                    </Link>
                    <Link
                        isExternal
                        as={NextLink}
                        className={buttonStyles({ variant: "bordered", radius: "full" })}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20} />
                        GitHub
                    </Link>
                </div>
            </div>
        </section>
    )
}