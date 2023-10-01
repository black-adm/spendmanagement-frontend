import Head from "./head";

export default function Login() {
    return (
        <>
            <Head />
            <div className="bg-white min-h-screen flex flex-col lg:flex-row">

                <div className="hidden lg:flex flex-col justify-between bg-yellow-300 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                    <div className="flex items-center justify-start space-x-3">
                        <span className="bg-black rounded-full w-8 h-8"></span>
                        <a href="#" className="font-medium text-xl">Brand</a>
                    </div>
                    <div className="space-y-5">
                        <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new experiences</h1>
                        <p className="text-lg">You do not have an account?</p>
                        <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Create account here</button>
                    </div>
                    <p className="font-medium">© 2022 Company</p>
                </div>

                {/* Login */}
                <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex lg:hidden justify-between items-center w-full py-4">
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black rounded-full w-6 h-6"></span>
                            <a href="#" className="font-medium text-lg">Brand</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Not a member? </span>
                            <a href="#" className="underline font-medium text-blue-700">
                                Sign up now
                            </a>
                        </div>
                    </div>
                    {/* Login box */}
                    <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                        <div className="flex flex-col space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
                            <p className="text-md md:text-xl">Sign up or log in to place the order, no password required!</p>
                        </div>
                        <div className="flex flex-col max-w-md space-y-5">
                            <input type="text" placeholder="Username" className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-font-normal" />
                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Confirm with email</button>
                            <div className="flex justify-center items-center">
                                <span className="w-full border border-black"></span>
                                <span className="px-4">Or</span>
                                <span className="w-full border border-black"></span>
                            </div>
                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                <span className="absolute left-4">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                                        <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349871 C3.20071885,21.1798349 7.26787885,24 12,24 C15.2638183,24 18.2056092,21.9477122 19.5625743,18.4816371 L16.0407269,18.0125889 Z" />
                                        <path fill="#FBBC05" d="M1.23999023,6.65002441 C0.439980469,8.42996742 0,10.4270728 0,12 C0,13.5729272 0.439980469,15.5700326 1.23999023,17.3499756 L5.27698177,14.2678769 L9.56257431,16.4816371 L12,12.9875327 L16.0407269,18.0125889 L20.2870455,16.2874559 C21.3857095,13.6927195 22,10.8727913 22,12 C22,10.4270728 21.3857095,8.69271947 20.2870455,6.28745587 L16.0407269,4.01258888 L12,9.01258888 L9.56257431,5.48163713 L5.27698177,7.2678769 L1.23999023,6.65002441 Z" />
                                    </svg>
                                </span>
                                <span className="flex-auto text-center font-medium">Sign in with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}