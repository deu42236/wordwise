//sidebar/navbar worki
function hideSidebar() {
    const sidebar =document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  
  function showSidebar() {
    const sidebar =document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }


//darkmode
  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
  
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      themeSwitcher.checked = true;
    }
  
    // Detect OS preference if no saved preference
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add('dark');
      themeSwitcher.checked = true;
    }
  
    // Handle toggle switch
    themeSwitcher.addEventListener('change', function() {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', this.checked ? 'dark' : 'light');
      console.log("aah, its worki")
    });
  });


  url = "https://deu42236.github.io/wordwise/slovnik.html#"
   //copylink from /slovnik.html
  function clipboardLink(val) {
    text = url+val
    navigator.clipboard.writeText(text)
  } 