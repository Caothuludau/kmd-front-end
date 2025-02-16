// src/components/BestSelling.tsx
const BestSelling = () => {
    return (
        <div className="flex items-center justify-between px-12 py-8">
            <img
                src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/463411336_536448049127725_6678810520317545512_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG9TCaJM-1cH_jZAtV3ku8OuSGj8mmD09-5IaPyaYPT315EVs4US8ag3VEuLqfrOopb4NLFoMQEj7v_5bSqbnjg&_nc_ohc=4LSDIQOQhpEQ7kNvgF45e_t&_nc_oc=AdjN52VkXMnNsfxYIVGArENHPqeO6pXK6MQa6gm2Mpim5dEHPF0XXkJGSYVSydeGAPY&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AxhaVTHhwAXQwQD0rIC_zBD&oh=00_AYCq3DyOP-BN8xBv42ZA1FyLV_GkbZ_Z-oiS4qEjH-9UsA&oe=67B7924B"
                alt="Best-Selling Wine"
                className="w-1/2 rounded-lg"
            />
            <div className="w-1/2 px-8">
                <h2 className="text-3xl font-bold">Our Best-Selling Wine</h2>
                <p className="mt-4 text-lg">
                    Experience the richness and elegance of Khu Mo’s best-selling wine.
                    Handcrafted with perfection from the finest vineyards.
                </p>
            </div>
        </div>
    );
};

export default BestSelling;
