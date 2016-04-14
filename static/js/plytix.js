/**
* Callback function to fire when picture urls fetch finish
*/

function fn_pictures_loaded(pids){
    for(var ip=0; ip < pids.length; ip++){
        var pid = pids[ip];
        // Get the url of the medium size picture of the product
        var img_url = _pl('get_first_image', pid, 'medium');

        // Update the image src
        var img = $('img.pl-image.' + pid);
        img.attr('src', img_url);
        
        // In this case we have to manually register the product impression
        _pl('track', pid, 'view', 'category');
    }  
}

function fn_all_pictures_loaded(pids){
    for(var ip=0; ip < pids.length; ip++){
        var pid = pids[ip];
        var sizes = ['large', 'medium', 'small'];
        
        for (var i=0; i<sizes.length; i++){
            // Get the url of the medium size picture of the product
            var img_url = _pl('get_first_image', pid, sizes[i]);

            // Update the image src
            var img = $('img.pl-image.' + sizes[i] + '.' + pid);
            img.attr('src', img_url);
        }
        
        // In this case we have to manually register the product impression
        _pl('track', pid, 'view', 'category');
    }  
}


function add_to_cart(el){
    var pid = el.dataset.plId;
    _pl('track', pid, 'addtocart', 1);
};

function remove_from_cart(el){
    var pid = el.dataset.plId;
    _pl('track', pid, 'removefromcart', 1);
}
