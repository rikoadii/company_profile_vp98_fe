import useService from "../hooks/useService"; // sesuaikan path hook kamu
import CardService from "./CardService";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function CardGroupService() {
    const { services, loading, error } = useService(); // ambil semua service dari API

    if (loading) {
        return <p className="text-center text-gray-500">Loading services...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (!services || services.length === 0) {
        return <p className="text-center text-gray-500">No services available</p>;
    }

    return (
        <div className="w-full mt-6 sm:mt-8 md:mt-12">
            {/* Responsive Grid Layout */}
            <ScrollAnimationWrapper animationType="scroll-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ScrollAnimationWrapper 
                            key={service.id}
                            animationType="scroll-scale" 
                            delay={index * 0.1}
                        >
                            <CardService
                                title={service.title}
                                secondTitle={service.subtitle}     // subtitle dari API
                                content={service.description}      // description dari API
                            />
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </ScrollAnimationWrapper>
        </div>
    );
}
