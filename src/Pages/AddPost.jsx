import { useMutation } from "react-query";
import { useAppContext } from "../Context/AppContext";
import * as apiClient from "../http";
import { useNavigate } from "react-router-dom";
import ManagePostForm from "../Forms/PostForm/ManagePostForm";
const AddPost = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(apiClient, {
    onSuccess: () => {
      showToast({ message: "Post Saved", type: "SUCCESS" });
      navigate("/");
    },
    onError: () => {
      showToast({ message: "Failed to save post.", type: "ERROR" });
    },
  });

  const handleSave = (post) => {
    mutate(post);
  };

  return <ManagePostForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddPost;