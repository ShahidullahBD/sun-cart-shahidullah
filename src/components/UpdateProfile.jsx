"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function UpdateProfile() {

    const UpdateProfile = async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log(name, image);

        await authClient.updateUser({
            name,
            image
        })
    }

    return (
        <Modal>
            <Button variant="secondary">Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header className="text-center">
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={UpdateProfile}
                                    className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Photo</Label>
                                        <Input placeholder="Enter your phto URL" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary" className={'text-red-500'}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close" className={'bg-orange-500 text-white px-5'}>Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}