// jshint esversion:6

exports.getDate = function (){
  const today = new Date();
  const options = {
    weekday: "long",
    day:"2-digit",
    month: "long",
    year:"numeric"
  };
  return today.toLocaleDateString("en-US",options);
}

exports.getDay = function (){
  const today = new Date();
  const options = {
    weekday: "long",

  };
  return today.toLocaleDateString("en-US",options);
}
exports.getMonth = function getMonth(){
  const today = new Date();
  const options = {
    month: "long",

  };
  return today.toLocaleDateString("en-US",options);
}
