import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import instance from "~/api";
import { User } from "~/interfaces/User";

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6),
});
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(userSchema),
  });
  const onSubmit = (user: User) => {
    console.log(user);
    (async () => {
      const { data } = await instance.post("/register", user);
      if (data.user) {
        const isConfirm = confirm("Dang ky thanh cong, sang trang dang nhap");
        if (isConfirm) {
          navigate("/login");
        }
      }
    })();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <h2>Register</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
