export default function showAditionalInfo(
  users,
  ageArr,
  genderArr,
  celArr,
  cityArr,
  countryArr,
  stateArr
) {
  users.forEach((user) => {
    ageArr.push(user.dob.age);
    genderArr.push(user.gender);
    celArr.push(user.cell);
    cityArr.push(user.location.city);
    countryArr.push(user.location.country);
    stateArr.push(user.location.state);
  });
}
