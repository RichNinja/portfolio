// Prove JS is wired (and avoid inline <script>)
// Keeps the DOM clean and makes caching simpler.
document.getElementById('year').textContent = new Date().getFullYear();
