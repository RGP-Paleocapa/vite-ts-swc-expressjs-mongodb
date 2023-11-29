// import useDocumentMetadata from '@hooks/useDocumentMetadata';

const Home = () => {
    // useDocumentMetadata('HomePage', 'This is the main page.');

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-gray-800 dark:text-white">
                    Welcome to Item Manager
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
                    Easily manage your items, add new ones, or remove them.
                </p>
            </div>
        </>
    );
}

export default Home;