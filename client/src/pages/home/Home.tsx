import { FaArrowDown } from 'react-icons/fa';
// import useDocumentMetadata from '@hooks/useDocumentMetadata';

const Home = () => {
    const handleScroll = () => {
        // Scroll to the section with the specified ID
        const section = document.getElementById('discover-features');
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    // useDocumentMetadata('HomePage', 'This is the main page.');

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-gray-800 dark:text-white">
                    A gentle introduction to the Central Processing Unit and Assembly language
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
                    Based on (and in support of) the complementary Educational CPU Visual Simulator
                </p>
                <a
                    href="#discover-features"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg"
                    onClick={handleScroll}
                >
                    Discover <FaArrowDown className="inline-block ml-2" />
                </a>
            </div>
        </>
    );
}

export default Home;