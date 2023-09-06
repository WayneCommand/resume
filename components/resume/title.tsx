import {Progress} from "@nextui-org/progress";
import {subtitle, title} from "@/components/primitives";

import { profileConfig } from "@/config/profile";

export const Title = () => {


    return (
        <section className="flex flex-col items-center justify-center gap-4 pt-8 md:pt-10">
            <div className="inline-block w-4/5 text-center justify-center">
                <h1 className={title()}>{profileConfig.name}</h1>
                <div>
                    <Progress size="sm" aria-label="pb" value={100}/>
                </div>
            </div>
        </section>
    )
}