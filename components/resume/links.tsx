
import {Button, ButtonGroup} from "@nextui-org/button";
import {CameraIcon} from './CameraIcon';

export const Links = () => {


    return (
        <section className="flex flex-col items-center justify-center gap-4 pt-8 md:pt-10">
            <div className="inline-block max-w-screen-md text-center justify-center">
                <Button color="danger" variant="bordered" startContent={<CameraIcon/>}>
                    Delete user
                </Button>
            </div>
        </section>
    )
}