<script>
  $(document).ready(function(){
    // Fade in the navbarcontainer on page load
    $('.navbarcontainer').animate({'opacity':'1'}, 1000);

    // Optional: If you want to fade out on scroll away, you can use this
    $(window).scroll(function() {
      var top_of_element = $('.navbarcontainer').offset().top;
      var top_of_window = $(window).scrollTop();
      
      if(top_of_window > top_of_element)
      {$('.navbarcontainer').animate({'opacity':'0'}, 500);} 
      else 
      {$('.navbarcontainer').animate({'opacity':'1'}, 500);}
    });
    });
</script>