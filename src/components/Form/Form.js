import React, { useContext } from "react";
import { ContextReservation } from "../../context/Context";
import classNames from "classnames";
import { Formik, Field } from "formik";
import Container from "../../common/Container/Container";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.scss";

const Form = ({ btnVariant }) => {
  const [context, setContext] = useContext(ContextReservation);

  const reservationAccepted = context.email !== "";

  const firstStageClasses = classNames("form__container", {
    "form__container--hide": reservationAccepted,
  });
  const succesStageClasses = classNames("form__success", {
    "form__success--active": reservationAccepted,
  });

  const currentDate = new Date();

  return (
    <Container customClass="form" role="form">
      <Typography variant="h2" customClass="form__title">
        {reservationAccepted ? "WE CAN'T WAIT FOR YOU" : "BOOK A TABLE"}
      </Typography>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          date: currentDate,
          time: "",
          guest: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "This filed is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (values.name && !/^([a-zA-Z ]){2,30}$/i.test(values.name)) {
            errors.name = "Invalid name";
          }
          if (values.phone && !/\d{9}/.test(values.phone)) {
            errors.phone = "Invalid number e.g. 750200100";
          }
          if (!values.date) {
            errors.date = "Select date appointment";
          } else if (values.date) {
            if (values.date <= currentDate) {
              errors.date = "Select a date from the coming days";
            }
          }
          if (!values.time) {
            errors.time = "Select time appointment";
          }
          if (!values.guest) {
            errors.guest = "Select your table";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setContext(values);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className={firstStageClasses}>
            <Container customClass="form__input">
              <label name="name" className="form__label">
                Name
                <Field
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Name"
                />
              </label>
              <span className="form__validation">
                {errors.name && touched.name && errors.name}
              </span>
            </Container>
            <Container customClass="form__input">
              <label name="email" className="form__label">
                Email
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
              </label>
              <span className="form__validation">
                {errors.email && touched.email && errors.email}
              </span>
            </Container>
            <Container customClass="form__input">
              <label name="time" className="form__label">
                Phone
                <Field
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="Number"
                />
              </label>
              <span className="form__validation">
                {errors.phone && touched.phone && errors.phone}
              </span>
            </Container>
            <Container customClass="form__input">
              <label name="time" className="form__label">
                Time
                <Field component="select" name="time">
                  <option value="" disabled>
                    Select time appointment
                  </option>
                  <option value="12:00pm">12:00pm</option>
                  <option value="01:00pm">01:00pm</option>
                  <option value="02:00pm">02:00pm</option>
                  <option value="03:00pm">03:00pm</option>
                  <option value="06:00pm">06:00pm</option>
                  <option value="07:00pm">07:00pm</option>
                  <option value="08:00pm">08:00pm</option>
                  <option value="09:00pm">09:00pm</option>
                  <option value="10:00pm">10:00pm</option>
                </Field>
              </label>
              <span className="form__validation">
                {errors.time && touched.time && errors.time}
              </span>
            </Container>
            <Container customClass="form__input">
              <label name="guest" className="form__label">
                Guest
                <Field component="select" name="guest">
                  <option value="" disabled>
                    Select table
                  </option>
                  <option value="2">2 guests</option>
                  <option value="4">4 guests</option>
                  <option value="6">6 guests</option>
                  <option value="8">8 guests</option>
                </Field>
              </label>
              <span className="form__validation">
                {errors.guest && touched.guest && errors.guest}
              </span>
            </Container>
            <Container customClass="form__input">
              <label name="date" className="form__label">
                Date
                <DatePicker
                  selected={values.date}
                  dateFormat="d MMMM yyyy"
                  className="form-control"
                  name="startDate"
                  onChange={(date) => setFieldValue("date", date)}
                />
              </label>
              <span className="form__validation">
                {errors.date && touched.date && errors.date}
              </span>
            </Container>
            <Button
              name="Appointment"
              type="submit"
              disabled={isSubmitting}
              variant={btnVariant ? btnVariant : "primary"}
              customClass="form__button"
            />
          </form>
        )}
      </Formik>
      <Container customClass={succesStageClasses}>
        <Typography variant="p" customClass="form__description">
          {reservationAccepted &&
            `Your table for ${
              context.guest
            } quests will be ready ${context.date.toLocaleDateString(
              "en-GB"
            )} at ${context.time} `}
        </Typography>
        <Typography variant="p" customClass="form__description" align="center">
          See you!
        </Typography>
      </Container>
    </Container>
  );
};

export default Form;
