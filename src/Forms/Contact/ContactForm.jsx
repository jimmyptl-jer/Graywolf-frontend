import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../../http";
import { useAppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(apiClient.contact, {
    onSuccess: () => {
      showToast({ message: "Message Sent", type: "SUCCESS" });
      navigate("/");
    },
    onError: () =>
      showToast({ message: "Sorry! Something went wrong", type: "ERROR" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    mutate(data);
  });

  return (
    <form
      className="space-y-6  text-white rounded-lg shadow-md"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-bold text-orange-300">Contact Me</h2>
      <p>
        Reach out for collaboration, new projects, or just to say hello. I'd
        love to hear from you!
      </p>

      {/* Name Input */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-orange-300"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-orange-300"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Subject Input */}
      <div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-orange-300"
          {...register("subject", { required: "This field is required" })}
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject.message}</span>
        )}
      </div>

      {/* Message Input */}
      <div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-orange-300"
          {...register("message", { required: "This field is required" })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-orange-300 text-black py-3 rounded font-semibold hover:bg-orange-500 transition duration-300"
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
