/* global $ */
/* global _ */

$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
console.log("stuff is here");
$.getJSON('data/product.json', function(products) {
    
 
 	
	//<---------------------------NAV BAR--------------------------->//
let $searchBar = $('<div>');
    $searchBar.attr('id', 'search-bar');
    $searchBar.addClass('search-bar');
    $searchBar.appendTo('nav');
    
let $search = $('<select>') 
    .attr('id', 'type')
    $search.appendTo($searchBar)

let $searchAll = $('<option>')
    .attr('id', 'searchAll')
    .attr('value', 'all')
    .text('All')
    .appendTo($search)

let $searchPhone = $('<option>')
    .attr('id', 'searchPhone')
    .attr('value', 'phone')
    .text('Phone')
    .appendTo($search)
    
let $searchCase = $('<option>')
    .attr('id', 'searchCase')
    .attr('value', 'case')
    .text('Case')
    .appendTo($search)
    
    
//<------------------------MODAL--------------->



let $modal = $("<div>");
    $modal.addClass("modal");
    $modal.attr("id", "modal");
    $modal.appendTo('body');
    
let $modalDialog = $('<div>')
    $modalDialog.addClass('modal-dialog')
    $modalDialog.appendTo($modal)

let $modalContent = $("<div>");
    $modalContent.addClass("modal-content");
    $modalContent.attr("id", "modal-content");
    $modalContent.appendTo($modalDialog);
    
let $modalButton = $('<button>');
    $modalButton.addClass('close');
    $modalButton.text("IM A BUTTON")
    $modalButton.attr('type','button');
    $modalButton.attr('data-toggle', "modal");
    $modalButton.attr('data-target', "#modal")
    $modalButton.appendTo($modalContent);
    
let $modalHeader = $('<h3>')
    $modalHeader.attr('id', 'modal-header')
    $modalHeader.addClass('modal-header')
    $modalHeader.appendTo($modalContent);
    
    
    ////////////////
    // <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#modal">Open Modal</button>
    
    
    
    
    
    

/////////////////////////////////////////



    


    
    
    
    //<---------------------------On The Page Below Here---------------------------------->//
    
    
	
let $allContents = $('<div>')
    .attr('id', 'allContents');
    $('main').append($allContents);
let allProducts = products;
let imageLink = '/projects/product-project/img/product/';
let imageThumb = '/projects/product-project/img/product/thumbs/';

let $searchBox = $('<form>')
    .attr('id', "query1")
    .appendTo($searchBar)
    
    
    
//----------------------------------------------------------------
let $searchBoxInput = $("<input>")
    .attr({'id': 'query',
        'type': 'text',
        'name': 'query'
    })
    .appendTo($searchBox);
//-----------------------------------------------------------------



let $searchBoxButton = $("<input>")
    .attr({'id': 'search',
        'type': 'submit',
        'value': 'Submit'
    })
    .appendTo($searchBox);    
 




//<---------------------------------------------------------------------------------------->//

let populatePage = function(inputValue) {
    
    
    _.forEach(allProducts, function(section, i) {
        
        let pickle = allProducts[i].desc.toLowerCase();
        let chicken = allProducts[i].availableColors;
        let lowerCaseChicken = [];
        
        _.forEach(chicken, function(e, i, c){
            lowerCaseChicken.push(e.toLowerCase())
        });
        
        
        if(inputValue.toLowerCase() === "all" || _.contains(pickle.toString().split(" "), inputValue) || _.contains(lowerCaseChicken, inputValue) || _.contains(allProducts[i], inputValue)) {
    
    let $allSections = $('<section>');
        $allSections.addClass('product-exists' +"-"+ (products[i].type));
        $allSections.addClass('product');
        $allSections.attr('id', i);
    
    let $productStock = $('<h6>');
        $productStock.addClass('productStock');
        $productStock.attr('id', 'productStock');
        $productStock.text((products[i].stock) + " left in stock!" );
        $allSections.append($productStock);
        
        
    let $productDesc = $('<h5>');
        $productDesc.text((products[i].desc));
        $productDesc.attr('id', 'product-description');
        $productDesc.addClass('product-description');
        $allSections.append($productDesc);
        
    let $productDescPop = $('<h5>');
        $productDescPop.text("DESCRIPTION: " + (products[i].desc));
        $productDescPop.addClass('product-description-pop');
        //$allSections.append($productDescPop);    
        
    let $productImages = $('<img>');
        $productImages.attr('src', imageThumb.concat(products[i].image));
        $productImages.addClass('product-img');
        $productImages.addClass("thumbImages");
        $allSections.append($productImages);
        
    let $productType = $('<h5>');
        $productType.text("TYPE: " + (products[i].type).toUpperCase());
        //$allSections.append($productType);
        
    let $productPrice = $('<h5>')
        $productPrice.text("PRICE: $" + (products[i].price))
        //$allSections.append($productPrice)
        
    let $productColor = $('<h5>')
        $productColor.text("COLOR: " + (products[i].color))
        //$allSections.append($productColor)   
//};;
        
    ///////////////ADDED FRI//////////////////////
    
    let $phonePopUp = $('<div>')
        $phonePopUp.prependTo($allSections)
    
    $allSections.on('click', function(event){
        $('.popup').empty();
        
        
    let $popUpDiv = $('<div>')
        $popUpDiv.addClass('popup')
        $popUpDiv.prependTo($('body'));
        $popUpDiv.append($productType);
        $popUpDiv.append($productColor);
        $popUpDiv.append($productPrice);
        $popUpDiv.append($productDescPop);



 let $closeButton = $('<button>')
        $closeButton.addClass('closeButton')
        $closeButton.attr('id', 'closeButton')
        $closeButton.text('close')
        $closeButton.on('click', function(event){
        $('.popup').empty();
        });
        
        
        
        
        $popUpDiv.append($closeButton)
    });
    
        


    
    $('#allContents').append($allSections);
        
            
        };
});
  
    
};
    
                
           
populatePage('all');



$('#type').change(function(){
  $('#allContents').empty();
  if($(this).val() === 'all') {
    
    populatePage('all');  
      
  }else if($(this).val() === 'phone') {
    
     populatePage('phone');
     
  }else if($(this).val() === "case") {
  
      populatePage('case');
  }
 });

// ----------------------------------END SECTIONS---------------------------//


$('#search').on('click', function(event){
    $('#allContents').empty();
    event.preventDefault();
  populatePage($('#query')[0].value);

});


//<--------------------------------------SEARCH INPUT BOX------------------------------------------->

// $('#search').on('click', function(event){
//     var abc = ($('#product-description')[0]);
//     console.log(typeof(abc));
//     console.log(abc);
//     var xyz = ($('#query')[0].value);
//     console.log(typeof(xyz));
//     console.log(xyz);
    
//     _.contains()
    
//     $('#allContents').empty();
//     event.preventDefault();
//     if(abc.indexof(xyz) >= -1) {
//          console.log('hi');}
//     //  populatePage($('#query')[0].value);   
//     // }
//     // else{
//     //     return "NO";
//     // }

// });


    
    // $('<ul>')
    
    // // function populatePage(products) {
    // //     $('#product-list').empty();
    // // };
    
    // _.forEach(products, function(product, i, a) {
    //     var $prod = $('<li>');
    //     $prod.text(product.desc);
    //     $prod.appendTo($('#container'));
    //     const $mainImage = $('<img>')
    //         .attr('src', '/projects/product-project/img/product/' + product.image);
    //     const $thumbImage = $('<img>')
    //         .attr('src', '/projects/product-project/img/product/thumbs/' + product.image);
    //     $thumbImage.prependTo($prod);
        
    //     //create modal to display product details when user clicks on product
        
    //     //     .attr('id', 'modal')
    //     //     .appendTo($prod);
    //     var $modOverlay = $('<div>')
    //         .attr('id', 'overlay')
    //         .css({
    //         'position': 'fixed',
    //         'top': '0',
    //         'left': '0',
    //         'width': '100%',
    //         'height': '100%',
    //         'background': '#000',
    //         'opacity': '0.5',
    //         'filter': 'alpha(opacity=50)'
    //     }
        
    //         )
    //     var $modProd = $('<div>')
    //         .attr('id', 'modal')
    //         .css({
    //             'position': 'absolute',
    //             'background': 'url(tint20.png) 0 0 repeat',
    //             'background': 'rgba(0,0,0,0.2)',
    //             'border-radius': '14px',
    //             'padding': '8px'
    //         })
        
    //     var $modContent = $('<div')
    //         .attr('id', 'content')
    //         .css({
    //             'border-radius': '8px',
    //             'background': '#fff',
    //             'padding': '20px'
    //     })
    //     var $modClose = $('<a>') 
    //         .attr("href","#")
    //         .attr('id', 'href="#"')
    //         .text('close')
    //         .css({
    //             'position': 'absolute',
    //             'background': 'url(close.png) 0 0 no-repeat',
    //             'width': '24px',
    //             'height': '27px',
    //             'display': 'block',
    //             'text-indent': '-9999px',
    //             'top': '-7px',
    //             'right': '-7px'
    //     })
    //     var $hopeItWorks = (function(){
    //         var hopeItWorks = {},
    //         $modOverlay,
    //         $modProd,
    //         $modContent,
    //         $modClose;
        
    //     hopeItWorks.center = function () {
    //         var top, left;
    //         top = Math.max($(window).height() - $modProd.outerHeight(), 0) / 2;
    //         left = Math.max($(window).width() - $modProd.outerWidth(), 0) / 2;

    //         $modProd.css({
    //             top:top + $(window).scrollTop(), 
    //             left:left + $(window).scrollLeft()
    //         });
    //         };
        
    //     hopeItWorks.open = function (settings) {
    //         $modContent.empty()
    //         .append(settings.modContent);

    //         $modProd.css({
    //             width: settings.width || 'auto', 
    //             height: settings.height || 'auto'
    //         })
            
    //         hopeItWorks.center();
    //         $(window).bind('resize.modProd', hopeItWorks.center);

    //         $modProd.show();
    //         $modOverlay.show();
    //         };
        
    //     hopeItWorks.close = function () {
    //         $modProd.hide();
    //         $modOverlay.hide();
    //         $modContent.empty();
    //         $(window).unbind('resize.modProd');
    //         };
            
        
  
    //     $(window).bind('resize.modal', hopeItWorks.center);

    //     $modProd.show();
    //     $modOverlay.show();
    //     };
        
    //     $modProd.hide();
    //     $modOverlay.hide();
    //     $modProd.append($modContent, $modClose);
        
    //     $prod.append($modOverlay, $modProd);

        
    //     return hopeItWorks;
    //     }());
            
            
            
            
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
    });
    

})




	// ALL YOUR CODE GOES ABOVE HERE //
});