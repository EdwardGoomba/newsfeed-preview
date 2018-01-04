const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event) {

  if ($(':checked').length === 0) {
    event.preventDefault();
    alert('Please check the box to allow pdf downloads');
  }
});
