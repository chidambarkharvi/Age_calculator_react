import React, { useEffect, useState } from "react";

function Dob() {
  const [dob, setdob] = useState("");
  const [age, setage] = useState("");
  const [month, setmonth] = useState("");
  const [day, setday] = useState("");

  // let curday = date.getDay();

  // let birthday = birthdate.getDay();

  useEffect(() => {
    let date = new Date();
    let birthdate = new Date(dob);
    let curyear = date.getFullYear();
    let curmonth = 1 + date.getMonth();
    let birthyear = birthdate.getFullYear();
    let birthmonth = 1 + birthdate.getMonth();
    if (birthdate > date) {
      console.log("greater");
      alert("enter valid date");
    } else {
      console.log("error");

      // let month = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 31];

      // console.log("curdate", date.getFullYear());
      // console.log("birthdate", birthdate.getFullYear());
      // console.log("curdate", date.getMonth());
      // console.log("birthdate", birthdate.getMonth());
      // console.log("curdate", date.getDay());
      // console.log("birthdate", birthdate.getDay());

      if (birthdate > date) {
        alert("please select valid date");
        date = date + month[curmonth - 1];
        curmonth = curmonth - 1;
      }
      if (birthmonth > curmonth) {
        curmonth = curmonth + 12;

        curyear = curyear - 1;
      }

      let agee = curyear - birthyear;
      // let dayy = curday - birthday;

      let months = curmonth - birthmonth;
      setage(agee);
      setmonth(months);
      // setday(dayy);
    }
  }, [dob]);
  const enterDate = (event) => {
    const val = event.target.value;
    console.log(val);
    setdob(val);
  };

  return (
    <div style={{ paddingTop: "90px" }}>
      Enter your Date of Birth :{" "}
      <input
        type="date"
        onChange={enterDate}
        placeholder="enter your birthday"
      />
      {dob ? <p>DOB :- {dob}</p> : null}
      {dob ? (
        <p>
          age is :- {age} years {month} month
          {/* {day < 0 ? -day : day} days{" "} */}
        </p>
      ) : null}
    </div>
  );
}

export default Dob;
