// Gestire, prima al passaggio del mouse (come la versione online)
//  e poi con il click, l'apertura delle 3
// dropdown associate alle voci: "Abbonamenti", "Chi Siamo" e "Aiuto".
// Consiglio: il focus dell'esercizio è la parte JS/jQuery,
//  non è necessario il menu sia responsive.

$(document).ready(function () {

  $(".parent-dropdown").mouseenter(function() {
    $(this).children(".activeDropdown").show();
  });

  $(".parent-dropdown").mouseleave(function() {
    $(this).children(".activeDropdown").hide();
  });
 //  $('#abbonamenti').mouseenter (function() {
 //     $('#abbonamenti-dropdown').show(function() {
 //     $('.activeDropdown').removeClass('activeDropdown').hide();
 //     $('#abbonamenti-dropdown').addClass('activeDropdown');
 //   });
 // });
 //
 //  $('#chi_siamo').mouseenter(function() {
 //     $('#chi_siamo-dropdown').show(function() {
 //     $('.activeDropdown').removeClass('activeDropdown').hide();
 //     $('#chi_siamo-dropdown').addClass('activeDropdown');
 //   });
 // });
 //
 //  $('#aiuto').mouseenter(function() {
 //    $('#aiuto-dropdown').show(function() {
 //    $('.activeDropdown').removeClass('activeDropdown').hide();
 //    $('#aiuto-dropdown').addClass('activeDropdown');
 //   });
 // });

});
// $("#abbonamenti").click( function(){
//   $(this).sibiling("#abbonamenti").children("#chi_siamo-dropdown").remove('activeDropdown');
//   $(this).children("#chi_siamo-dropdown").toggleclass('activeDropdown');
// })
