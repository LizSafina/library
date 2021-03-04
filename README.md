# library
The Odin Project curriculum.

This project took me almost 5 days. Considering that I dedicated 6-7 hours daily, it's a lot.
The hardest part I got stuck with was "readBtn". For displaying the library on the page I chose to use a table.
Was updating all the values from the form's inputs, directly to innerHTML using template strings.
Which made manipulatin a "readBtn" not as easy as I thougth it would be. I believe the problem was that by the time,
I was trying to assess it, it hadn't yet existed in the DOM.

function render deletes all the created table rows, and then pulls everything from the storage and adds all the books from scratch.

