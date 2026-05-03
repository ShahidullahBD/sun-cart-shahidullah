import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = ({ user }) => {

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        })
    }
    
    return (
        <div>
            {user ? "" :
                <button onClick={handleGoogleLogin}
                    className="btn text-orange-500 text-[18px]">Login by <FcGoogle />
                </button>
            }
        </div>
    );
};

export default SocialLogin;