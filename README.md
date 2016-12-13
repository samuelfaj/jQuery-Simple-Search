# jQuery-Simple-Search
Allows you to, easily, implement a search system in DOM.

## Usage
Create a input (which will be used to search items) with the class **.simple-search** and **data-loop** with the list of elements to search.

	<html>
	<head></head>
	<body>
		<input type="text" class="simple-search" data-loop="table tr" placeholder="Search..."> 
		<button>Search</button>
		<table>
			<tr><td>Item 1</td></tr>
			<tr><td>Item 2</td></tr>
			<tr><td>Item 3</td></tr>
			<tr><td>Item 4</td></tr>
			<tr><td>Item 5</td></tr>
			<tr><td>Item 6</td></tr>
			<tr><td>Item 7</td></tr>
		</table>
	</body>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="jQuery.simple.search.js"></script>
	</html>
  
It'll search in all "table tr" and fadein thoose who have the value wrote on input.


## Example
![Example]
(http://i64.tinypic.com/2r23zfs.gif)
