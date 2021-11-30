export const formOptions = {
  typetext: [
    {
      name: "name",
      placeholder: "Name",
    },
    {
      name: "email",
      placeholder: "Email",
    },
    {
      name: "phone",
      placeholder: "Phone",
    },
  ],
  typeSelect: [
    {
      name: "time",
      placeholder: "Time",
      values: [
        "Select time appointment",
        "04:00pm",
        "05:00pm",
        "06:00pm",
        "07:00pm",
        "08:00pm",
        "09:00pm",
        "10:00pm",
      ],
    },
    {
      name: "guest",
      placeholder: "Guest",
      values: ["Select table", "2 guests", "4 guests", "6 guests", "8 guests"],
    },
  ],
  typeDate: {
    name: "date",
    placeholder: "Date",
    format: "d MMMM yyyy",
  },
};

export const currentDate = new Date();

export const initialValues = {
  email: "",
  name: "",
  phone: "",
  date: currentDate,
  time: "",
  guest: "",
};

export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "This filed is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
};
