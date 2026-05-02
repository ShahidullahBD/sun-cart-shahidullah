import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h1 className="text-7xl font-bold text-primary">404</h1>
                    <h2 className="card-title text-2xl mt-2">Page Not Found</h2>
                    <p className="text-base-content/70">
                        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                    </p>

                    <div className="card-actions mt-6">
                        <Link href={'/'}>
                            <button className="btn btn-outline">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFoundPage;