'use client'

import {Button, ButtonGroup} from "@nextui-org/button";
import {FaConnectdevelop} from 'react-icons/fa';
import {BsPhoneVibrateFill, BsWechat, BsFillEnvelopeFill, BsFillMortarboardFill, BsGithub} from 'react-icons/bs'
import { profileConfig } from "@/config/profile";

const ICONS = {
    "FaConnectdevelop": <FaConnectdevelop size="1.5rem"/>,
    "BsPhoneVibrateFill": <BsPhoneVibrateFill size="1.5rem" />,
    "BsWechat": <BsWechat size="1.5rem" />,
    "BsFillEnvelopeFill": <BsFillEnvelopeFill size="1.5rem" />,
    "BsFillMortarboardFill": <BsFillMortarboardFill size="1.5rem" />,
    "BsGithub": <BsGithub size="1.5rem" />

}

function Link(title: string, text: string, icon: string) {
    return (
        // @ts-ignore
        <Button key={text} color="default" variant="light" startContent={ICONS[icon]}>
            <strong>{title}: </strong> {text}
        </Button>
    )
}

function LinkLine(link: any) {
    return (
        <div key={link} className="inline-block max-w-screen-md text-center justify-center">
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