
$('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
              '</div>',

             patterns: {
                vimeo: {
                    index: 'vimeo.com/',
                    id: function (url) {
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if (!m || !m[5]) return null;
                        return m[5];
                    },
                    src: '//player.vimeo.com/video/%id%?autoplay=1&volume=10'
                },
                vk: {
                    index: 'vk.com/',
                    id: function (url) { return url; },

                    src: '%id%&autoplay=1&volum=2'
					
                },

                facebook: {
                    index: 'facebook.com/',
                    id: function (url) { return url; },

                    src: '//www.facebook.com/plugins/video.php?href=%id%&show_text=0&autoplay=1'
                }
            }
  
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
  
  
});
