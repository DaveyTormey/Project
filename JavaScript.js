<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
</script>
