import { ReactComponent as LogoPic } from '../../assests/SVG/loginpic.svg';
import useInput from '../../hooks/useInput/use-input';
import { useRef } from 'react';

const DUMMY_CLG_NAME = ['VCET', 'TCET', 'TPOLY', 'VJTI'];

const Register = () => {
  const selectRef = useRef();

  const {
    value: enteredName,
    hasError: nameHasError,
    isValueValid: isNameValid,
    reset: nameReset,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== '' && value.trim().length > 1);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValueValid: isEmailValid,
    reset: emailReset,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput(
    (value) => value.trim() !== '' && value.includes('@') && value.includes('.')
  );

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValueValid: isPasswordValid,
    reset: passwordReset,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== '' && value.trim().length > 8);

  const {
    value: clgName,
    hasError: clgNameHasError,
    isValueValid: isClgNameValid,
    valueChangeHandler: clgNameChangeHandler,
    blurHandler: clgNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  const RegisterReq = async (info) => {
    const response = await fetch('http://localhost:4001/api/v1/oregister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });

    const result = await response.json();

    return result;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!isNameValid && !isEmailValid && !isPasswordValid) {
      return;
    }
    if (!isClgNameValid) {
      selectRef.current.focus();
      return;
    }
    const userInfo = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      ownerCollegeName: clgName,
      role: 'owner'
    };
    const response = RegisterReq(userInfo);
    console.log(response);
    nameReset();
    emailReset();
    passwordReset();
  };

  return (
    <section className="login">
      <div className="login__title-group login__title-group--reg">
        <LogoPic className="login__pic" />
        <h1 className="heading-primary login__title">Register to canteen</h1>
        <p className="login__sub-title">
          Don't have an existing account?&nbsp;
          <span>
            <a href="/">Create</a>
          </span>
        </p>
      </div>
      <form onSubmit={onSubmitHandler} className="login__form">
        <div className="login__form-group">
          <input
            className={
              nameHasError
                ? 'input--error u-margin-bottom-small'
                : 'input u-margin-bottom-small'
            }
            type="text"
            placeholder="name"
            required
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          <input
            className={
              emailHasError
                ? 'input--error u-margin-bottom-small'
                : 'input u-margin-bottom-small'
            }
            type="email"
            placeholder="email"
            required
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <input
            className={
              passwordHasError
                ? 'input--error u-margin-bottom-small'
                : 'input u-margin-bottom-small'
            }
            type="password"
            placeholder="password"
            required
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          <select
            className={
              clgNameHasError
                ? 'input--error u-margin-bottom'
                : 'input u-margin-bottom'
            }
            name="clg-name"
            onChange={clgNameChangeHandler}
            onBlur={clgNameBlurHandler}
            defaultValue={''}
            ref={selectRef}
          >
            <option disabled value="">
              {' '}
              -- select an option --{' '}
            </option>
            {DUMMY_CLG_NAME.map((clg) => (
              <option value={clg} key={clg}>
                {clg}
              </option>
            ))}
          </select>
          <button className="button button--primary u-margin-right u-margin-left u-margin-bottom">
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

export default Register;
