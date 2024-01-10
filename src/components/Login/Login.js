import { ReactComponent as LogoPic } from '../../assests/SVG/loginpic.svg';
import useInput from '../../hooks/useInput/use-input';
const Login = () => {
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValueValid: isEmailValid,
    reset: emailReset,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== '' && value.includes('@') && value.includes('.'));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValueValid: isPasswordValid,
    reset: passwordReset,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== '' && value.trim().length > 8);

  const loginReq = async (info) => {
    const response = await fetch("http://localhost:4001/api/v1/ologin",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
    })

    const result = await response.json();

    return result;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!isEmailValid && !isPasswordValid) {
      return;
    }

    const userInfo = {
        "email": enteredEmail,
        "password": enteredPassword
    }

    const response = loginReq(userInfo);
    console.log(response);
    emailReset();
    passwordReset();
  };

  return (
    <section className="login">
      <div className="login__title-group">
        <LogoPic className="login__pic" />
        <h1 className="heading-primary login__title">login to canteen</h1>
        <p className="login__sub-title">
          Don't have an existing account?
          <span>
            <a href="/">Create</a>
          </span>
        </p>
      </div>
      <form onSubmit={onSubmitHandler} className="login__form">
        <div className="login__form-group">
          <input
            className={emailHasError ?"input--error u-margin-bottom-small" :"input u-margin-bottom-small"}
            type="email"
            placeholder="email"
            required
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <input
            className={passwordHasError ?"input--error u-margin-bottom" :"input u-margin-bottom"}
            type="password"
            placeholder="password"
            required
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          <button className="button button--primary u-margin-right u-margin-left u-margin-bottom-small">
            login
          </button>
          <button className="button button--white u-margin-right u-margin-left">
            back
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
