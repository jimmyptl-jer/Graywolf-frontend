import { useFormContext } from "react-hook-form";

const ImagesSection = () => {
  const {
    register,
    watch,
  } = useFormContext();

  const existingImageUrls = watch("imageUrls");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>

      <input
        type="file"
        multiple
        accept="image/*"
        className="w-full text-gray-700 font-normal"
        {...register("imageFiles", {
          validate: (imageFiles) => {
            const totalLength =
              imageFiles.length + (existingImageUrls?.length || 0);

            if (totalLength === 0) {
              return "At least one image should be added";
            }

            if (totalLength > 6) {
              return "Total number of images cannot be more than 6";
            }

            return true;
          },
        })}
      />
    </div>
  );
};

export default ImagesSection;