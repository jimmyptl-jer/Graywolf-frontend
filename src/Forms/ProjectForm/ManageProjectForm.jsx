import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import ImageUploadSection from "./ImageUploadSection";
import { useNavigate } from "react-router-dom";


import { useMutation } from 'react-query'
import { useAppContext } from "../../Context/AppContext";
import * as apiClient from '../../http'

const ManageProjectForm = () => {
  const formMethods = useForm();


  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(apiClient.addPost, {
    onSuccess: () => {
      showToast({ message: "Post added successfully", type: "SUCCESS" });
      navigate('/project');
    },
    onError: () => showToast({ message: "Sorry! Something went wrong", type: "ERROR" })
  });


  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("videoLink", data.videoLink);
    formData.append("blogLink", data.blogLink);

    if (data.imageFile[0]) {
      formData.append('imageFile', data.imageFile[0]);
    }

    console.log(data.imageFile[0])

    mutate(formData);
  };

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10 p-4 border border-orange-300 m-10" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <DetailsSection />
        <ImageUploadSection />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-600 rounded text-white p-3 font-bold ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-400"}`}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ManageProjectForm;
