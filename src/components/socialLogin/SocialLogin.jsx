import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

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
                    className="btn text-orange-500 text-[18px]">Login by <FaGoogle />
                </button>
            }
        </div>
    );
};

export default SocialLogin;