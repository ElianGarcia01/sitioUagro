import React from 'react';

const VideoPage = () => {
    const videos = [
        { id: 1, title: 'Himno Uagro', url: 'https://www.youtube-nocookie.com/embed/JPu5pngMpbk' },
        { id: 2, title: 'Exámen de admision 2018 ', url: 'https://www.youtube-nocookie.com/embed/JFxGUHnSYHg' },
        { id: 3, title: 'Video ', url: 'https://www.youtube-nocookie.com/embed/JPu5pngMpbk' }
    ];

    return (
        <div className="flex flex-col">
            <div className='flex flex-col justify-center mt-2'>
                <h1 className="text-2xl text-center font-normal mb-4 self-center">VIDEOS</h1>
                <h2 className="text-xl text-center font-normal mb-4 self-end mr-36">Videos Relacionados</h2>
            </div>

            <div className='flex'>
                {/* Video Principal */}
                <div className="flex-1 w-2/3 px-4 shadow-2xl">
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube-nocookie.com/embed/53nOQoK96Xc"  // Video de ejemplo
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-2xl"
                    ></iframe>
                    <h3 className="text-md mt-2 font-bold">Credencial de estudiantes</h3>

                </div>

                {/* Lista de Videos Lateral */}
                <div className="w-1/3 px-4">                    <ul>
                    {videos.map((video) => (
                        <li key={video.id} className="mb-3">
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                <iframe
                                    width="100%"
                                    height="200"
                                    src={video.url}  // Video de ejemplo
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-2xl"
                                ></iframe>
                                <h3 className="text-md mt-5">{video.title}</h3>
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default VideoPage