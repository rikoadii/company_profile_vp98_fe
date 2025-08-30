import ScrollAnimationWrapper from './ScrollAnimationWrapper';

export default function HeaderSection({ title, subtitle }){
    return (
        <ScrollAnimationWrapper animationType="scroll-fade-in">
            <div className="items-center text-center mb-10">
                <h1 className="text-4xl font-bold text-neutral mb-1">{title}</h1>
                <h3 className="text-lg font-semibold text-neutral">{subtitle}</h3>
            </div>
        </ScrollAnimationWrapper>
    )
}