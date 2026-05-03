'use client'

import { UpdateProfile } from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';


const MyProfile = () => {

    const { data: session, isPending } = authClient.useSession();
    // console.log(isPending, 'pending');
    const user = session?.user;
    // console.log(user);  

    return (
        <div className="card bg-base-100 w-100 mx-auto mt-10 shadow-sm">
            <figure>
                <Image className='w-96'                
                src={user?.image} alt={user?.name} height={30} width={30}></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user?.name}</h2>
                <p>{user?.email}</p>
                <div className="card-actions justify-end">
                   <UpdateProfile/>                    
                </div>
            </div>
        </div>
    );
};

export default MyProfile;