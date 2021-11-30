import React, { useContext } from "react";
import { ContextReservation } from "../../context/Context";
import classNames from "classnames";
import { Formik, Field } from "formik";
import Container from "../../common/Container/Container";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";
import DatePicker from "react-datepicker";
import { initialValues, validate, formOptions } from "./optionsForm";
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

  const renderOptions = (options) =>
    options.map((option, index) => (
      <option
        value={index !== 0 ? option : ""}
        disabled={index === 0 && true}
        key={index}
      >
        {option}
      </option>
    ));
  return (
    <Container customClass="form" role="form">
      <Typography variant="h2" customClass="form__title">
        {reservationAccepted ? "WE CAN'T WAIT FOR YOU" : "BOOK A TABLE"}
      </Typography>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
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
            {formOptions.typetext.map((input) => {
              const { name, placeholder } = input;
              return (
                <Container customClass="form__input" key={name}>
                  <label name={name} className="form__label">
                    {placeholder}
                    <Field
                      type="text"
                      name={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={
                        name === "name"
                          ? values.name
                          : name === "email"
                          ? values.email
                          : values.phone
                      }
                      placeholder={placeholder}
                    />
                  </label>
                  <span className="form__validation">
                    {name === "name"
                      ? errors.name && touched.name && errors.name
                      : name === "email"
                      ? errors.email && touched.email && errors.email
                      : errors.phone && touched.phone && errors.phone}
                  </span>
                </Container>
              );
            })}
            {formOptions.typeSelect.map((select) => {
              const { name, placeholder, values } = select;
              return (
                <Container customClass="form__input" key={name}>
                  <label name="guest" className="form__label">
                    {placeholder}
                    <Field component="select" name={name}>
                      {renderOptions(values)}
                    </Field>
                  </label>
                  <span className="form__validation">
                    {name === "time"
                      ? errors.time && touched.time && errors.time
                      : errors.guest && touched.guest && errors.guest}
                  </span>
                </Container>
              );
            })}
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
