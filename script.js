$(document).ready(function() {
  const data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'];

  $('#autocomplete-input').on('input', function() {
      const value = $(this).val();
      $('#autocomplete-results').empty();

      if (value) {
          const matchedData = $.grep(data, function(item) {
              return item.includes(value);
          });

          $.each(matchedData, function(index, item) {
              const div = $('<div>').text(item);
              $('#autocomplete-results').append(div);
          });

          $('#autocomplete-results').show();
      } else {
          $('#autocomplete-results').hide();
      }
  });

  $(document).on('click', function(event) {
      if ($(event.target).attr('id') !== 'autocomplete-input') {
          $('#autocomplete-results').hide();
      }
  });
});
