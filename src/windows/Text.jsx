import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    // If no data, return null
    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{data.name}</h2>
            </div>

            <div className="bg-white h-full overflow-auto p-8">
                <div className="max-w-3xl mx-auto">
                    {/* Optional Image */}
                    {data.image && (
                        <div className="mb-6">
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-full max-w-md mx-auto rounded-lg shadow-md"
                            />
                        </div>
                    )}

                    {/* Optional Subtitle */}
                    {data.subtitle && (
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            {data.subtitle}
                        </h3>
                    )}

                    {/* Description Paragraphs */}
                    {data.description && data.description.length > 0 && (
                        <div className="space-y-4">
                            {data.description.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-gray-700 leading-relaxed text-base"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
