$('#clickme').click(function() {

var name = $('#name').val();

$('h1').text('Hello, '+name+'!');

$('#name').val('');
});
