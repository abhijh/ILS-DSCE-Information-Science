module.exports = {
bookRegister: function(bookInfo){
  $.ajax({
  type: "POST",
  url: '/api/registerbook/',
  data: JSON.stringify(bookInfo),
  contentType: 'application/json',
  processData: false

});
},
borrowerRegister: function(borrowInfo){
  $.ajax({
  type: "POST",
  url: '/api/registerborrow/',
  data: JSON.stringify(borrowInfo),
  contentType: 'application/json',
  processData: false

});
},
returnBook: function(returnInfo){
  $.ajax({
  type: "POST",
  url: '/api/returnbook/',
  data: JSON.stringify(returnInfo),
  contentType: 'application/json',
  processData: false

});
},
issueBook: function(issueInfo){
  $.ajax({
  type: "POST",
  url: '/api/issuebook/',
  data: JSON.stringify(issueInfo),
  contentType: 'application/json',
  processData: false

});
}
};
