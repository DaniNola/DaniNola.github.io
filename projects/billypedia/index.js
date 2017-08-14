/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('.quote').css('color', 'black').css('font-style', 'italic');
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        // uncomment this to inspect all available data; delete when done //
        //console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        
        let topRated = data.discography.topRated;
        //start at #list-top-rated
        //add li tags
        //add titles to li tags
        //we have access at data.discography.topRated
        //loop over topRated array
        //add topRated titles to a li tag
        //append li tags to list-top-rated
        
        _.forEach(topRated, function(recording, i, a) {
            var $li = $('<li>');
            $li.text(recording.title);
            $('#list-top-rated').append($li);
            $li.appendTo($('#list-top-rated'));
        });
        
        //create section recordings below top rated in sidebar
        //create a list of recordings to add to this section, styled
        
        let $generalHeader = $('<h2>')
            .attr('id', 'general-header')
            .text("Other Recordings")
            .appendTo($('#sidebar'));
        
        let recordings = data.discography.recordings;
        var $recSection = $('<section>')
            .attr('id', 'section-recordings')
            .appendTo($('#sidebar'));
            
        _.forEach(recordings, function(recording, i, a) {
            var $li = $('<li>');
            $li.text(recording.title);
            $li.css('margin-left', '20px');
            $('#section-recordings').append($li);
            $li.appendTo($('#section-recordings'));
        });
        
        let topAlbumCover = data.discography.topRated[0]['art'];
        $('<img>').attr('src', topAlbumCover)
            .prependTo($('#list-top-rated'))
            //$('img').css('margin-left', '20px');
        
        let otherAlbumCover = data.discography.recordings[0]['art'];
        $('<img>').attr('src', otherAlbumCover)
            .prependTo($('#section-recordings'));
            
            //TODO 7
        const images = data.images.billy;
        
        let clickCount = 0;
        
        $('#image-billy').on('click', function(event) {
            // console.log(event);
            // _.forEach(images, function(url, i, a) {
            //     console.log(url);
            //     $('#image-billy').attr('src', url);
            // });
            
            // let elem = $(event.currentTarget);
            // let i = elem.attr('i');
            // if (i > data.images.billy.length-1) {
            //     let src = data.images.billy[i++];
            //     elem.fadeOut('fast', function() {
            //         $('#image-billy').attr('src', "images/billy/billy")
            //     })
            // }
            
            clickCount += 1;
            
            let currentEvent = $(event.currentTarget);
            
            if (clickCount < images.length) {
                currentEvent.fadeOut('fast', function () {
                    $('#image-billy').attr('src', images[clickCount]);    
                }).fadeIn('fast');
            } else {
                clickCount = 0;
                currentEvent.fadeOut('fast', function () {
                    $('#image-billy').attr('src', images[clickCount]);    
                }).fadeIn('fast');
            }
        });
        
               // TODO 8
        
        $('.top-rated-click-list').on('click', function(event) {
            let currentEvent = $(event.currentTarget);
            currentEvent.fadeOut('fast', function() {
                $('#top-rated-art').attr('src', topRatedArtSelector[currentEvent.attr('id')].art);
            }).fadeIn('fast');
        })
            
        $('.general-recording-click-list').on('click', function(event) {
            let currentEvent = $(event.currentTarget);
            currentEvent.fadeOut('fast', function() {
                $('#general-art').attr('src', artSelector[currentEvent.attr('id')].art);
            }).fadeIn('fast');
        })
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


