function SliderManager() {

}

SliderManager.Activate = function() {
    $("#owl-demo").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade"
  });
}