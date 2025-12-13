import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    // If no data, return null
    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{data.name}</h2>
            </div>

            <div className="bg-white h-full overflow-auto flex items-center justify-center p-8">
                {/* Image Display */}
                {data.imageUrl && (
                    <div className="max-w-full max-h-full">
                        <img
                            src={data.imageUrl}
                            alt={data.name}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
