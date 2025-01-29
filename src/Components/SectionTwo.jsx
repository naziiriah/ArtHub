const SectionTwo = () => {
    return(
        <div className="w-full h-96 bg-green-background">
            <div className="w-full h-6"></div>
            <div className="w-11/12 mx-auto  text-white">
                <h2 className="text-center font-bold text-3xl text-white">ArtLynk in Numbers</h2>
                <p className="text-center text-white">Explore the vibrant impact of our platform, connecting artists, and art lovers <br/> worldwide.</p>
                <div className="flex justify-between w-11/12 mx-auto mt-36">
                    <div className="text-center font-bold">
                       <h2 className="font-bold text-3xl text-emerald-500">10,000+ </h2> <br/>
                        <h3 className="text-xl font-bold">Artworks Sold</h3>
                        <p className="text-md font-normal">A thriving marketplace for creativity</p>
                    </div>
                    <div className="text-center font-bold">
                        <   h2 className="font-bold text-3xl text-emerald-500">5,000+ </h2> <br/>
                        <h3 className="text-xl font-bold">Artists engaged</h3>
                        <p className="text-md font-normal">Empowering Nigerian creators</p>
                    </div>
                    <div className="text-center font-bold">
                        <h2 className="font-bold text-3xl text-emerald-500">500+ </h2> <br/>
                        <h3 className="text-xl font-bold">Countries Reached</h3>
                        <p className="text-md font-normal">Bridging cultures through art</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo