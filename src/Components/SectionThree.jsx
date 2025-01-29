const SectionThree = () => {
    return(
        <div className="w-full h-full bg-white-bg">
            <div className="w-full h-20"></div>
            <div className="w-11/12 mx-auto">
                <div>
                    <h1 className="capitalize text-6xl font-bold text-dep-gre">featured artworks</h1>
                    <p className="text-dep-gre">Browse through our selection of captivating pieces that define the essence of creativity.</p>
                </div>
            </div>
            <div className="w-full h-12"></div>
            <div className="flex justify-around ">
                <div className="w-48 h-48 bg-abstract-bg bg-contain rounded-lg text-white">
                    <h2 className="capitalize text-white text-center font-bold mt-24">abstract fusion</h2>
                </div>
                <div className="w-48 h-48 bg-photography-bg bg-cover bg-no-repeat rounded-lg text-white">
                    <h2 className="capitalize text-white text-center font-bold mt-24">Photography</h2>
                </div>
                <div className="w-48 h-48 bg-digital-bg bg-cover rounded-lg text-white">
                    <h2 className="capitalize text-white text-center font-bold mt-24">digital art</h2>
                </div>
                <div className="w-48 h-48 bg-sculptural-bg bg-cover rounded-lg text-white">
                    <h2 className="capitalize text-white text-center font-bold mt-24">Sculptural Elegance</h2>
                </div>
                <div className="w-48 h-48 bg-modern-bg bg-cover rounded-lg text-white">
                    <h2 className="capitalize text-white text-center font-bold mt-24">modern art</h2>
                </div>
            </div>
            <div className="w-full h-20"></div>
        </div>
    )
}

export default SectionThree;