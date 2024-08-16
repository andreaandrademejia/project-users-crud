import { useForm } from "react-hook-form";

const FormUser = () => {

 const { handleSubmit, register, reset} = useForm();

const submit = (data) => {
	createUser(data);
	reset({
		email: '',
    password: '',
    first_Name: '',
    last_Name: '',
    birthday: '',
    image_url: '',
	});
};

	return (
		<div>
‌<form onSubmit={handleSubmit(submit)}>
‌			<label>
‌          <span>Email</span>
​  <input
​    type="email"
​    {...register('email', {
​      maxLength: {
​        value: 50,
​        message: 'The maximum number of characters is 50',
​      },
​      required: 'This field is required',
​    })}
​  />
​  <p>{errors.email?.message}</p>
‌        </label>
‌					<span>Password</span>
‌					<input type="password"
‌					{...register('password', {
‌              maxLength: {
‌                value: 20,
‌                message: 'The maximum number of characters is 20',
‌              },
‌              required: 'This field is required',
‌            })}
              />
‌          <p>{errors.password?.message}</p>
‌				</labe>
				<label>
					<span>First Name</span>
					<input type="text" />
					{...register('first_name', {
              maxLength: {
                value: 15,
                message: 'The maximum number of characters is 15',
              },
              required: 'This field is required',
            })}
          />
          <p>{errors.first_name?.message}</p>
				</label>
				<label>
					<span>Last Name</span>
					<input type="text" />
					{...register('last_name', {
              maxLength: {
                value: 15,
                message: 'The maximum number of characters is 15',
              },
              required: 'This field is required',
            })}
          <p>{errors.last_name?.message}</p>
				</label>
				<label>
          <span>Birthday</span>
          <input
            type="date"
            {...register('birthday', {
              maxLength: {
                value: 10,
                message: 'The maximum number of characters is 10',
              },
              required: 'This field is required',
            })}
          />
          <p>{errors.birthday?.message}</p>
        </label>
				<label>
					<span>Image Url</span>
					<input type="text" />
					{...register('image_url', {
              maxLength: {
                value: 70,
                message: 'The maximum number of characters is 70',
              },
              required: 'This field is required',
            })}
          <p>{errors.image_url?.message}</p>
				</label>
        <button>Submit</button>
			</form>
		</div>
	);
};

export default FormUser;