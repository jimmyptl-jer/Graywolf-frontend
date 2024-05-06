import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as apiClient from '../../http'
import { useAppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'

const ContactForm = () => {
  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(apiClient.contact, {
    onSuccess: () => {
      showToast({ message: "Message Sent ", type: "SUCCESS" });
      navigate('/');
    },
    onError: () => showToast({ message: "Sorry! Something went wrong", type: "ERROR" })

  })
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    mutate(data)
  })

  return (
    <form className='flex flex-col gap-5 p-8 text-white shadow-lg' onSubmit={onSubmit}>
      <h2 className='text-3xl font-bold mb-4 text-center'>Let's Connect</h2>

      <p className="text-lg mb-6 text-center">
        Feel free to reach out if you're interested in working together, being friends, or discussing the best coffee spots!
      </p>
      <p className='text-center'>You can also email me at <a href="mailto:jimmyptl46@gmail.com" className="font-semibold border-b">jimmyptl46@gmail.com</a>.</p>

      <label className="text-sm flex-1">
        Name
        <input
          type='text'
          className="border-b border-white w-full py-1 px-3 font-normal text-white bg-transparent focus:outline-none focus:border-purple-500"
          {...register("name", { required: "This field is required" })} />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <label className="text-sm flex-1">
        Email
        <input
          type='email'
          className="border-b border-white w-full py-1 px-3 font-normal text-white bg-transparent focus:outline-none focus:border-purple-500"
          {...register("email", { required: "This field is required" })} />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className=" text-sm flex-1">
        Subject
        <input
          type='text'
          className="border-b border-white w-full py-1 px-3 font-normal text-white bg-transparent focus:outline-none focus:border-purple-500"
          {...register("subject", { required: "This field is required" })} />
        {errors.subject && (
          <span className="text-red-500">{errors.subject.message}</span>
        )}
      </label>

      <label className="text-sm flex-1">
        Message
        <textarea
          className="border-b border-white w-full py-1 px-3 font-normal text-white bg-transparent focus:outline-none focus:border-purple-500"
          rows="4"
          {...register("message", { required: "This field is required" })}></textarea>
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </label>

      <Button type='submit' gradientDuoTone='purpleToPink' className="self-start mt-4">
        {isLoading ? "Sending..." : 'Send'}
      </Button>
    </form>
  )
}

export default ContactForm
