
/*Potential middleware to be used if date and time are needed*/
module.exports = {
  dateTimeObject: date =>{
    var dt = new Date();
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
}

