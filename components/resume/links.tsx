import {Button, ButtonGroup} from "@nextui-org/button";
import {FaConnectdevelop} from 'react-icons/fa';
import {BsPhoneVibrateFill, BsWechat, BsFillEnvelopeFill} from 'react-icons/bs'
import { profileConfig } from "@/config/profile";

const ICONS = {
    "FaConnectdevelop": <FaConnectdevelop size="md"/>,
    "BsPhoneVibrateFill": <BsPhoneVibrateFill size="md" />,
    "BsWechat": <BsWechat size="md" />,
    "BsFillEnvelopeFill": <BsFillEnvelopeFill size="md" />

}

function Link(title: string, text: string, icon: string) {
    return (
        // @ts-ignore
        <Button color="default" variant="light" startContent={ICONS[icon]}>
            {title + ": " + text}
        </Button>
    )
}

function LinkLine(link: any) {
    return (
        <div className="inline-block max-w-screen-md text-center justify-center">
            {link.map((item: { title: string; text: string; icon: string }) => Link(item.title, item.text, item.icon))}
        </div>
    );
}

export const Links = () => {

    return (
        <section className="flex flex-col items-center justify-center pt-8 md:pt-10">
            { profileConfig.links.map(line => LinkLine(line)) }
        </section>
    )
}