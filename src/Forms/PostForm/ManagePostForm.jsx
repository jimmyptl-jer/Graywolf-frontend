import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import ImageUploadSection from "./ImageUploadSection";
import { useEffect } from "react";
import CategorySection from "./CategorySection";




const ManagePostForm = ({ onSave, isLoading, hotel }) => {
  const formMethods = useForm();

  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataJson) => {
    const formData = new FormData();


    formData.append("title", formDataJson.title);
    formData.append("author", formDataJson.author);
    formData.append("description", formDataJson.description);

    formDataJson.facilities.forEach((category, index) => {
      formData.append(`category[${index}]`, category);
    });

    //
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });
  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <DetailsSection />
        <CategorySection />
        <ImageUploadSection />
        <span className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 rounded text-white p-2 font-bold hover:bg-blue-400 text-lg"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManagePostForm;