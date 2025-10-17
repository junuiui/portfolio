import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-green-950">
            {/* 프로필 이미지 */}
            <img
                src="/my-photo.jpg"
                alt="My profile"
                className="w-40 h-40 rounded-full shadow-lg mb-6"
            />

            {/* 이름 */}
            <Typewriter
                options={{
                    strings: ["Hi, I am Junui Hong", "Software Developer/Engineer"],
                    autoStart: true,
                    loop: true,
                    pauseFor: 1500,
                    wrapperClassName: "text-2xl md:text-2xl font-bold text-gray-800 dark:text-white tracking-wide",
                    cursorClassName: "text-2xl md:text-2xl font-bold text-gray-800 dark:text-white",
                }}
            />
        </div>
    );
}

