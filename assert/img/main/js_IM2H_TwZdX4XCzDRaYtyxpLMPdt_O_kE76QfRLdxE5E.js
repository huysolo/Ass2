(function($) {
  // Vars
  var mobileStatus = false;

  $(document).ready(function() {
    mobileStatus = mobileChecker();
    blogTitleVisibility();
  });

  $(window).resize(function() {
    mobileStatus = mobileChecker();
  });

  function mobileChecker() {
    return $(window).width() <= 780;
  }

  // If on a blog node and blog marquee view is empty, display title view immediately
  function blogTitleVisibility() {
    if ($('body').hasClass('node-type-article')) {
      if ($('.view-blog-detail-marquee').length < 1) {
        $('.view-blog-detail-title').show();
        $('body').addClass('blog-marquee-false');
      }
    }
  }

  // Sticky sub-header functionality
  Drupal.behaviors.stickySubHeader = {
    attach: function () {
      // To use: Add an array that contains the unique body class for the page that should
      // have a sticky sub-header and the div that should become sticky
      var acceptedPages = [
        ['node-type-article', '.view-blog-detail-title']
      ];
      var pageClass, subHeaderElement, subHeaderElTopOffset, subHeaderElHeight, scrollPos, targetPos;
      var pageAccepted = false;
      var stickyStatus = false;
      var savedMobileStatus = mobileStatus;
      var windowContext = $(window);
      var body = $('body');
      // Wait til content is loaded to get proper top offset of sub-header div
      windowContext.load(function() {
        // Check if on any of the acceptedPages
        for (var i = 0; i < acceptedPages.length; i++) {
          pageClass = acceptedPages[i][0];
          if (body.hasClass(pageClass)) {
            pageAccepted = true;
            subHeaderElement = $(acceptedPages[i][1]);
            break;
          }
        }
        // Enable sticky sub-header functionality
        // Do not enable on mobile
        if (pageAccepted) {
          // If not mobile, enable sticky functionality
          if (!mobileStatus) {
           prepSticky();
          }
          // Check window resize in case mobile status changes
          windowContext.resize(function() {
            // If changing from mobile to desktop, enable sticky
            if (savedMobileStatus && !mobileStatus) {
              savedMobileStatus = mobileStatus;
              // Wait for elements to load to offsetTop will be correct
              windowContext.setTimeout(function() {
                prepSticky();
              }, 2000);
            }
            // If changing from desktop to mobile, disable sticky
            else if (!savedMobileStatus && mobileStatus) {
              savedMobileStatus = mobileStatus;
              // Reset sticky
              disableSticky();
            }
          });
        }
      });

      function prepSticky() {
        // Save original position of target before making sticky
        subHeaderElTopOffset = subHeaderElement.offset().top;
        subHeaderElHeight = subHeaderElement.outerHeight();
        scrollPos = windowContext.scrollTop();
        // Adjust when target should become sticky
        targetPos = subHeaderElTopOffset + 140 + subHeaderElHeight;
        // Determine scroll position and call sticky sub-header
        windowContext.scroll(function() {
          scrollPos = windowContext.scrollTop();
          toggleSticky();
          if (scrollPos === 0) {
            subHeaderElTopOffset = subHeaderElement.offset().top;
            targetPos = subHeaderElTopOffset + 140 + subHeaderElHeight;
          }
        });
      }

      function disableSticky() {
        // Special behavior for blog nodes
        if (pageClass === 'node-type-article') {
          if (body.hasClass('blog-marquee-false')) {
            subHeaderElement.parent().height('auto');
          }
          subHeaderElement.find('.page-title').show();
          subHeaderElement.find('.page-title-sticky').hide();
        }
        body.removeClass('sticky-sub-header');
        subHeaderElement.css('margin-top', 0);
      }

      function toggleSticky() {
        if (!mobileStatus && scrollPos >= targetPos && stickyStatus === false) {
          // Enable sticky header
          // Special behavior for blog nodes
          if (pageClass === 'node-type-article') {
            // If marquee does not have an image, set height of marquee area
            // so the page height doesn't jump when .view-blog-detail-title is set to fixed position
            if (body.hasClass('blog-marquee-false')) {
              subHeaderElement.parent().height(subHeaderElHeight);
            }
            subHeaderElement.find('.page-title').hide();
            subHeaderElement.find('.page-title-sticky').show();
            chromeHoverBug();
          }
          // Set margin-top to sub-header element, animate downward from top
          subHeaderElement.css('margin-top', '-' + subHeaderElHeight + 'px');
          body.addClass('sticky-sub-header');
          subHeaderElement.animate({marginTop: 0}, 300, function() {
          });
          stickyStatus = true;
        }
        else if (scrollPos < targetPos && stickyStatus === true) {
          // Disable sticky header
          subHeaderElement.animate({marginTop: '-' + subHeaderElHeight}, 200, function() {
            disableSticky();
          });
          stickyStatus = false;
        }
      }
      // This is a awful hack that semi-resolves a bug in Chrome where, when the header is sticky (position:fixed),
      // the share-buttons pop-up inside that is positioned relative and absolute will not appear
      // on :hover until the window is scrolled.
      function chromeHoverBug() {
        $('.content-share-wrapper').hover(
          function() {
            windowContext.scrollTop(scrollPos - 1);
            windowContext.scrollTop(scrollPos + 1);
          }, function() {
            windowContext.scrollTop(scrollPos + 1);
            windowContext.scrollTop(scrollPos - 1);
          }
        );
      }
    }
  };

  // Blog image gallery modifications to aid in creating large active image centered Flexslider.
  Drupal.behaviors.blogImageGallery = {
    attach: function (context, settings) {
      if ($('body').hasClass('node-type-article')) {
        // If there is an image gallery
        if ($('.blog-gallery-2015').length > 0) {
          $('.blog-gallery-2015').each(function(index) {
            if ($(this).children().length > 0) {
              var windowContext = $(window);
              var windowWidth = windowContext.width();

              // Create gallery obj
              var gallery = new galleryConstructor(index, $(this), settings);

              // Once images are loaded: Calc and set dimensions, margins for slide images
              windowContext.load(function() {
                gallery = slidesSetup(gallery);
                initElevateZoom(gallery);
              });

              // On window resize: Recalc image dimensions, margins
              windowContext.on('resize', function() {
                if (gallery.slideshowInitialized && windowWidth !== undefined) {
                  if (windowContext.width !== windowWidth) {
                    windowWidth = windowContext.width();
                    gallery = slidesSetup(gallery);
                    gallery = resetZoom(gallery);
                  }
                }
              });

              // On Flexslider load: Initiate click on slide to jump to that slide
              gallery.flexSliderEl.bind('start', function(e, slider) {
                gallery.currentSlide = slider.currentSlide + 1;
                gallery.slideshowContainer.find('ul.slides').children('li').each(function(index) {
                  $(this).click(function() {
                    slider.flexAnimate(index);
                  });
                });
              });

              // On Flexslider slide change: Position slide images, update pager counter, update caption
              gallery.flexSliderEl.bind('before', function(e, slider) {
                gallery.currentSlide = slider.animatingTo + 1; // Flexslider is zero indexed
                updatePagerCounter(gallery.slideshowContainer, gallery.currentSlide, gallery.totalSlides);
                changeCaption(gallery.slideshowContainer, gallery.currentSlide);
                markFloatLeftSlides(gallery.slideshowContainer, gallery.currentSlide, gallery.animationDuration);
                positionSlides(gallery);
                initElevateZoom(gallery);
              });
            }
          });
        }
      }

      // Gallery object constructor
      function galleryConstructor(galIndex, slideshowContainer, behaviorSettings) {
        this.galIndex = galIndex;
        this.slideshowContainer = slideshowContainer;
        this.flexSliderEl = slideshowContainer.find('.flexslider_views_slideshow_main');
        this.flexSliderElID = '#' + this.flexSliderEl.attr('id');
        var flexSliderOpts = behaviorSettings.flexslider_views_slideshow[this.flexSliderElID].opts;
        this.animationDuration = flexSliderOpts.animationSpeed;
        this.currentSlide = 1;
        this.totalSlides = 0;
        this.zoomStatus = {};
        this.zoomLoaded = {};
        this.zoomedClass = 'zoomContainer-gallery-' + galIndex;
        this.slideDimensions = {};
        this.captionContainerHeight = 0;
        this.slideshowInitialized = false;
        // Misc setup, only run once on page load
        (function miscSetup(context) {
          // Mark slides that should be floated left
          markFloatLeftSlides(context.slideshowContainer, context.currentSlide, context.animationDuration);
          // Create container div for captions
          context.slideshowContainer.find('.views-slideshow-controls-bottom').prepend('<div class="captions-container"></div>');
          // Count slides, add thumbnail pager images, move captions to bottom of slideshow
          context.slideshowContainer.find('ul.slides > li:not(.clone)').each(function () {
            var slideEl = $(this);
            context.totalSlides++;
            // Move caption fields
            slideEl.find('.views-field-field-caption').appendTo(context.slideshowContainer.find('.captions-container'));
            // // Add images to thumbnail pager because Flexslider module is dumb and won't add any image src's
            // var imageSrc = slideEl.find('.views-field-field-uploaded-image img').attr('src');
            // // Give image a smaller image style
            // imageSrc = imageSrc.replace('/578x_post_detail/','/thumbnail/');
            // context.slideshowContainer.find('.flex-control-thumbs li:eq(' + index + ')').find('img').attr('src', imageSrc);
          });
          // Set height of caption container
          context.slideshowContainer.find('.views-field-field-caption').each(function () {
            var captionHeight = $(this).outerHeight(true);
            if (context.captionContainerHeight < captionHeight) {
              context.captionContainerHeight = captionHeight;
            }
          });
          context.slideshowContainer.find('.captions-container').height(context.captionContainerHeight);
          // Make active slide caption visible
          context.slideshowContainer.find('.views-field-field-caption:nth-child(' + context.currentSlide + ')').addClass('active-caption');
          context.slideshowContainer.find('.views-field-field-caption:not(.active-caption)').addClass('non-active-caption');

          // Pager setup
          // Remove pause button
          context.slideshowContainer.find('.views_slideshow_controls_text_pause').remove();
          // Setup pager counter
          context.slideshowContainer.find('.views-slideshow-controls-text-previous').after('<span class="pager-counter"></span>');
          updatePagerCounter(context.slideshowContainer, context.currentSlide, context.totalSlides);
          // Add thumbnail trigger
          // @temporary @todo - Hide thumbnail functionality for now until it can be completed in future sprints.
          context.slideshowContainer.find('.flex-control-thumbs').remove();
          // context.slideshowContainer.find('.views-slideshow-controls-text-next').after('<span class="thumbnails-trigger"></span>');
          // Thumbnail pager functionality
          context.slideshowContainer.find('.flex-control-thumbs li').each(function() {
            $(context).click(function() {
              markFloatLeftSlides(context.slideshowContainer, context.currentSlide, context.animationDuration);
              positionSlides(context);
            });
          });

          // Mobile tweaks
          if (mobileStatus) {
            // Move pager above captions container
            var controlsContainerEl = context.slideshowContainer.find('.views-slideshow-controls-bottom');
            context.slideshowContainer.find('.views-slideshow-controls-text').prependTo(controlsContainerEl);
          }
        })(this);
      }

      // Call all necessary functions to position and resize slide images
      // Called once on page load and again on window resize
      function slidesSetup(galleryObj) {
        // Set slide dimensions
        // Desktop
        if (!mobileStatus) {
          // Configurable options:
          // Max height and width dimensions
          // slideContainerWidth is actually set via CSS
          galleryObj.activeSlideMaxWidth = 700;
          galleryObj.activeSlideMaxHeight = 600;
          galleryObj.nonActiveSlideMaxHeight = 497;
          galleryObj.defaultSlideXMargin = 70;
          galleryObj.slideContainerWidth = 390;
        }
        // Mobile
        else {
          galleryObj.activeSlideMaxWidth = 300;
          galleryObj.activeSlideMaxHeight = 334;
          galleryObj.nonActiveSlideMaxHeight = 97;
          galleryObj.defaultSlideXMargin = 70;
          galleryObj.slideContainerWidth = 250;
        }
        galleryObj.nonActiveSlideMaxWidth = galleryObj.slideContainerWidth - galleryObj.defaultSlideXMargin;
        // Calculate all slide dimensions
        galleryObj = calcSlideDimensions(galleryObj);
        // Determine height of slideshow
        galleryObj = setSlideshowHeight(galleryObj);
        // Calculate margin-tops of slides
        galleryObj = calcSlidesMargins(galleryObj);
        // Position slides, set width and height
        positionSlides(galleryObj);

        // Reveal gallery if it's not already revealed
        if (!galleryObj.slideshowInitialized) {
          galleryObj.slideshowContainer.addClass('gallery-initialized');
        }
        galleryObj.slideshowInitialized = true;
        return galleryObj;
      }

      // elevateZoom functionality, called on slide change
      function initElevateZoom(galleryObj) {
        // Set all zoom variables to false
        for (var i = 1; i <= galleryObj.totalSlides; i++) {
          galleryObj.zoomStatus[i] = false;
          galleryObj.zoomLoaded[i] = false;
        }
        // Remove all zoomed images
        $('.' + galleryObj.zoomedClass).remove();
        // Disable zoom click events for all images
        galleryObj.slideshowContainer.find('ul.slides > li').off('click.zoom tap.zoom touch.zoom');

        // After slide transition, initiate elevateZoom
        setTimeout(function() {
          galleryObj.slideshowContainer.find('ul.slides > li').each(function(index) {
            var nonZeroIndex = index + 1;
            var imageEl = $(this).find('img');
            // If active slide, load zoomed image but keep hidden until click
            // Note: It's necessary to initiate elevateZoom before click to show event. elevateZoom cannot
            // be triggered by click event because of bug where the zoomed image will not appear until after cursor is moved.
            if (nonZeroIndex === galleryObj.currentSlide) {
              var data = {};
              data.galleryObj = galleryObj;
              data.zoomedID = 'gallery-' + data.galleryObj.galIndex + '-zoom-slide-' + galleryObj.currentSlide;
              data.imageEl = imageEl;
              data.zoomSlideElID =  '#' + data.zoomedID;
              loadZoomedImage(data, false);
              enableZoomClick(data);
            }
            else {
              imageEl.off('click.zoom tap.zoom touch.zoom touchstart.zoom');
            }
          });
        }, galleryObj.animationDuration + 100);
      }

      // Initiates elevateZoom for active slide
      function loadZoomedImage(data, showZoom) {
        var currentSlide = data.galleryObj.currentSlide;
        // If image already has elevateZoom initiated, remove and reinitiate
        if (data.galleryObj.zoomLoaded[currentSlide]) {
          $(data.zoomSlideElID).remove();
        }
        data.imageEl.elevateZoom({
          zoomType: "inner",
          cursor: "crosshair",
          easing: true,
          easingDuration: 100,
          loadingIcon: true,
          onZoomedImageLoaded: function() {
            // Add classes and unique ID
            $('.zoomContainer').each(function() {
              if (!($(this).hasClass('zoom-processed'))) {
                $(this).css('-webkit-transform', '').addClass('zoom-processed ' + data.galleryObj.zoomedClass).attr('id', data.zoomedID);
              }
            });
            data.galleryObj.zoomLoaded[currentSlide] = true;
            // Show zoomed image
            if (showZoom) {
              data.galleryObj.zoomStatus[currentSlide] = true;
              $(data.zoomSlideElID).addClass('show-zoom');
            }
          }
        });
        return data;
      }

      // Callback to enable zoom click
      function enableZoomClick(data) {
        data.imageEl.attr('onClick', '');
        data.imageEl.on('click.zoom tap.zoom touch.zoom touchstart.zoom', data, function(e) {
          // Click event
          e.preventDefault();
          var currentSlide = e.data.galleryObj.currentSlide;
          // If image is not zoomed, show
          if (e.data.galleryObj.zoomStatus[currentSlide] === false) {
            // If image is already loaded, show
            if (e.data.galleryObj.zoomLoaded[currentSlide]) {
              e.data.galleryObj.zoomStatus[currentSlide] = true;
              $(e.data.zoomSlideElID).addClass('show-zoom');
            }
            // Else load image then show
            else {
              e.data = loadZoomedImage(e.data, true);
            }
          }
          // If image is zoomed, hide
          else {
            $(e.data.zoomSlideElID).removeClass('show-zoom');
            e.data.galleryObj.zoomStatus[currentSlide] = false;
          }
        });
      }

      // Completely reset elevateZoom
      function resetZoom(galleryObj) {
        $('.zoomContainer').remove();
        for (var i = 1; i <= galleryObj.totalSlides; i++) {
          galleryObj.zoomStatus[i] = false;
          galleryObj.zoomLoaded[i] = false;
        }
        initElevateZoom(galleryObj);
        return galleryObj;
      }

      // Give class to slides whose images should be floated left, called on slide change
      function markFloatLeftSlides(slideshowContainer, currentSlide, animationDuration) {
        var activeSlideEl = slideshowContainer.find('ul.slides > li:nth-child(' + currentSlide + ')');
        activeSlideEl.addClass('transition-left-slide').removeClass('float-left-slide');
        activeSlideEl.nextAll('li:not(.zoomed-slide)').addClass('float-left-slide');
        setTimeout(function() {
          activeSlideEl.removeClass('transition-left-slide');
          activeSlideEl.prevAll('li').removeClass('transition-left-slide');
          activeSlideEl.nextAll('li').addClass('float-left-slide');
        }, animationDuration);
      }

      // Calc dimensions for each slide image, called on page load or resize
      function calcSlideDimensions(galleryObj) {
        var slideCount = 1;
        galleryObj.slideshowContainer.find('ul.slides').children('li').find('img').one('load', function() {
          var slideImageEl = $(this);
          var slideHeight = slideImageEl.height();
          var slideWidth = slideImageEl.width();
          var activeSlideHeight, activeSlideWidth;
          galleryObj.slideDimensions[slideCount] = {};
          // If this is the active slide
          if (slideImageEl.parents('.flex-active-slide').length > 0) {
            // Determine non-active height
            slideHeight = (galleryObj.nonActiveSlideMaxWidth * slideHeight) / slideWidth;
            slideWidth = galleryObj.nonActiveSlideMaxWidth;
          }
          // Make sure the slideHeight !> non-active max-height
          if (slideHeight > galleryObj.nonActiveSlideMaxHeight) {
            slideWidth = (galleryObj.nonActiveSlideMaxHeight * slideWidth) / slideHeight;
            slideHeight = galleryObj.nonActiveSlideMaxHeight;
          }
          // Based on max-height, calc activeSlideWidth
          activeSlideWidth = (galleryObj.activeSlideMaxHeight * slideWidth) / slideHeight;
          // If activeSlideWidth > max-width, calc activeSlideHeight based on max-width
          if (activeSlideWidth > galleryObj.activeSlideMaxWidth) {
            activeSlideWidth = galleryObj.activeSlideMaxWidth;
          }
          activeSlideHeight = (activeSlideWidth * slideHeight) / slideWidth;
          // Save slide dimensions
          galleryObj.slideDimensions[slideCount].slideWidth = slideWidth;
          galleryObj.slideDimensions[slideCount].slideHeight = slideHeight;
          galleryObj.slideDimensions[slideCount].activeSlideWidth = activeSlideWidth;
          galleryObj.slideDimensions[slideCount].activeSlideHeight = activeSlideHeight;
          slideCount++;
        }).each(function() {
          if (this.complete) {
            $(this).load();
          }
        });
        return galleryObj;
      }

      // Calc and set height of slideshow based on tallest slide, called on page load or resize
      function setSlideshowHeight(galleryObj) {
        var tallestSlide = 0;
        for (var i in galleryObj.slideDimensions) {
          var activeSlideHeight = galleryObj.slideDimensions[i].activeSlideHeight;
          // If slide is tallest, update tallestSlide
          if (activeSlideHeight > tallestSlide) {
            tallestSlide = Math.ceil(activeSlideHeight);
          }
        }
        // Set height of slideshow
        galleryObj.slideshowContainer.find('.flexslider').css('height', tallestSlide);
        galleryObj.slideshowHeight = tallestSlide;
        return galleryObj;
      }

      // Calc margins for each slide image, called on page load or resize
      function calcSlidesMargins(galleryObj) {
        for (var i in galleryObj.slideDimensions) {
          var marginTop = 0;
          var activeMarginTop = 0;
          var activeMarginRight = 0;
          var nonActiveXmargin = galleryObj.defaultSlideXMargin;
          var defaultSlideXMargin = galleryObj.defaultSlideXMargin;
          var nonActiveXmargin2 = 0;
          var slideHeight = galleryObj.slideDimensions[i].slideHeight;
          var slideWidth = galleryObj.slideDimensions[i].slideWidth;
          var activeSlideHeight = galleryObj.slideDimensions[i].activeSlideHeight;
          var activeSlideWidth = galleryObj.slideDimensions[i].activeSlideWidth;
          // Calc margin-top
          if (slideHeight < galleryObj.slideshowHeight) {
            marginTop = calcMarginTop(galleryObj.slideshowHeight, slideHeight);
          }
          // Calc active margin-top
          if (activeSlideHeight < galleryObj.slideshowHeight) {
            activeMarginTop = calcMarginTop(galleryObj.slideshowHeight, activeSlideHeight);
          }
          // Calc active margin-right
          if (activeSlideWidth > galleryObj.slideContainerWidth) {
            activeMarginRight = (activeSlideWidth - galleryObj.slideContainerWidth) / 2;
            galleryObj.slideDimensions[i].centerActive = false;
          }
          else {
            activeMarginRight = (galleryObj.slideContainerWidth - activeSlideWidth) / 2;
            galleryObj.slideDimensions[i].centerActive = true;
          }
          // Calc non-active x margins if necessary
          // If image width is smaller than usual, center image
          if (slideWidth < galleryObj.nonActiveSlideMaxWidth) {
            nonActiveXmargin = (galleryObj.nonActiveSlideMaxWidth - slideWidth) / 2;
            nonActiveXmargin2 = nonActiveXmargin + defaultSlideXMargin;
            galleryObj.slideDimensions[i].centerNonActive = true;
          }
          else {
            galleryObj.slideDimensions[i].centerNonActive = false;
          }
          // Save margins
          galleryObj.slideDimensions[i].marginTop = marginTop;
          galleryObj.slideDimensions[i].activeMarginTop = activeMarginTop;
          galleryObj.slideDimensions[i].activeMarginRight = activeMarginRight;
          galleryObj.slideDimensions[i].nonActiveXmargin = nonActiveXmargin;
          galleryObj.slideDimensions[i].nonActiveXmargin2 = nonActiveXmargin2;
        }
        return galleryObj;
      }

      function calcMarginTop(slideshowHeight, slideHeight) {
        var marginTop = slideshowHeight / 2;
        marginTop = marginTop - (slideHeight / 2);
        return marginTop;
      }

      // Set slide image dimensions, margins, called on slide change
      function positionSlides(galleryObj) {
        var slideshowContainer = galleryObj.slideshowContainer;
        var slideContainerWidth = galleryObj.slideContainerWidth;
        var slideDimensions = galleryObj.slideDimensions;
        var currentSlide = galleryObj.currentSlide;
        var slideCount = 1;
        var activeSlideFound = false;
        slideshowContainer.find('ul.slides').children('li').find('img').one('load', function() {
          var slideImageEl = $(this);
          var marginTop = 0;
          // If this is the active slide
          if (slideCount === currentSlide) {
            marginTop = slideDimensions[slideCount].activeMarginTop;
            var activeSlideWidth = slideDimensions[slideCount].activeSlideWidth;
            // Set slide dimensions
            slideImageEl.width(activeSlideWidth);
            slideImageEl.height(slideDimensions[slideCount].activeSlideHeight);
            // Set x margins
            slideImageEl.css({marginLeft: 0});
            var activeMarginRight = slideDimensions[slideCount].activeMarginRight;
            // If image exands beyond it's container
            if (activeSlideWidth > slideContainerWidth) {
              slideImageEl.css({marginRight: '-' + activeMarginRight + 'px'});
              slideImageEl.parents('li').addClass('active-slide-expanded');
            }
            else {
              slideImageEl.css({marginRight: + activeMarginRight});
            }
            // If image should be centered in slide
            if (slideDimensions[slideCount].centerActive) {
              slideImageEl.css({marginLeft: + activeMarginRight});
            }
            activeSlideFound = true;
          }
          // If not the active slide
          else {
            marginTop = slideDimensions[slideCount].marginTop;
            var nonActiveXmargin = slideDimensions[slideCount].nonActiveXmargin;
            var nonActiveXmargin2 = slideDimensions[slideCount].nonActiveXmargin2;
            // Set slide dimensions
            slideImageEl.width(slideDimensions[slideCount].slideWidth);
            slideImageEl.height(slideDimensions[slideCount].slideHeight);
            // If image should not be centered in slide
            if (!slideDimensions[slideCount].centerNonActive) {
              // If slide is before active slide
              if (!activeSlideFound) {
                slideImageEl.css({marginLeft: 0});
                slideImageEl.css({marginRight: + nonActiveXmargin});
              }
              // If after
              else {
                slideImageEl.css({marginRight: 0});
                slideImageEl.css({marginLeft: + nonActiveXmargin});
              }
            }
            // If image should be centered
            else {
              // If slide is before active slide
              if (!activeSlideFound) {
                slideImageEl.css({marginRight: + nonActiveXmargin2});
                slideImageEl.css({marginLeft: + nonActiveXmargin});
              }
              // If slide is after active slide
              else {
                slideImageEl.css({marginRight: + nonActiveXmargin});
                slideImageEl.css({marginLeft: + nonActiveXmargin2});
              }
            }
            setTimeout(function() {
              slideImageEl.parents('li').removeClass('active-slide-expanded');
            }, galleryObj.animationDuration);
          }
          // Set margin-top
          slideImageEl.css('marginTop', marginTop);
          slideCount++;
        }).each(function() {
          if (this.complete) {
            $(this).load();
          }
        });
      }

      // Updates the pager counter, called on slide change
      function updatePagerCounter(slideshowContainer, currentSlide, totalSlides) {
        slideshowContainer.find('.pager-counter').text(currentSlide + ' of ' + totalSlides);
      }

      // Changes the visible slide caption, called on slide change
      function changeCaption(slideshowContainer, currentSlide) {
        slideshowContainer.find('.views-field-field-caption').removeClass('active-caption non-active-caption');
        slideshowContainer.find('.views-field-field-caption:nth-child(' + currentSlide + ')').addClass('active-caption');
        slideshowContainer.find('.views-field-field-caption:not(active-caption)').addClass('non-active-caption');
      }
    }
  };
  // Blog Related Content/Featured Content Carousel
  Drupal.behaviors.blogContentCarousel = {
    attach: function() {
      if ($('body').hasClass('node-type-article')) {
        // If there is a related or featured content carousel
        if ($('.content-carousel').length > 0) {
          $('.content-carousel').each(function() {
            if ($(this).children().length > 0) {
              var carouselContainer = $(this);
              var pagerPrevEl = carouselContainer.find('.views-slideshow-controls-text-previous a');
              var pagerNextEl = carouselContainer.find('.views-slideshow-controls-text-next a');
              var flexSliderEl = carouselContainer.find('.flexslider_views_slideshow_main');
              var currentSlide = 1;
              var slideCount = 0;
              var atEnd = false;
              var carouselContainerWidth = carouselContainer.find('.view-content').width();
              var displayPagers = false;
              var displayPrevPager = false;
              var displayNextPager = true;

              // Remove pause button
              carouselContainer.find('.views_slideshow_controls_text_pause').remove();
              // Remove extra pagers
              carouselContainer.find('.flex-direction-nav').remove();

              // On flexslider load
              flexSliderEl.bind('start', function(e, slider) {
                // Determine whether to show pagers ever
                slideCount = slider.count;
                displayPagers = displayAsCarousel(carouselContainer, carouselContainerWidth, slideCount);
                // Show and hide pagers on hover over carousel, don't show on mobile
                if (displayPagers && !mobileStatus) {
                  carouselContainer.hover(
                    function() {
                      if (displayPrevPager) {
                        pagerPrevEl.addClass('pager-hovered').removeClass('pager-not-hovered');
                      }
                      if (displayNextPager) {
                        pagerNextEl.addClass('pager-hovered').removeClass('pager-not-hovered');
                      }
                    },
                    function() {
                      pagerPrevEl.addClass('pager-not-hovered').removeClass('pager-hovered');
                      pagerNextEl.addClass('pager-not-hovered').removeClass('pager-hovered');
                    }
                  );
                  // Hide and show pagers if at start or end
                  flexSliderEl.bind('after', function(e, slider) {
                    currentSlide = slider.animatingTo + 1; // Flexslider is zero indexed
                    atEnd = slider.atEnd;
                    if (atEnd) {
                      if (currentSlide === 1) {
                        displayPrevPager = false;
                        displayNextPager = true;
                        pagerPrevEl.removeClass('show-pager pager-hovered');
                        pagerNextEl.addClass('show-pager pager-hovered').removeClass('pager-not-hovered');
                      }
                      else {
                        displayNextPager = false;
                        displayPrevPager = true;
                        pagerNextEl.removeClass('show-pager pager-hovered');
                        pagerPrevEl.addClass('show-pager pager-hovered').removeClass('pager-not-hovered');
                      }
                    }
                    else {
                      displayPrevPager = true;
                      displayNextPager = true;
                      pagerPrevEl.addClass('show-pager pager-hovered').removeClass('pager-not-hovered');
                      pagerNextEl.addClass('show-pager pager-hovered').removeClass('pager-not-hovered');
                    }
                  });
                }
              });
            }
            else {
              $(this).remove();
            }
          });
        }
      }
      // Determine whether to show pagers based on combined width of slides
      function displayAsCarousel(carouselContainer, carouselContainerWidth, slideCount) {
        var slidesWidth = carouselContainer.find('ul.slides').children('li').first().outerWidth(true);
        slidesWidth = slidesWidth * slideCount;
        return slidesWidth > carouselContainerWidth;
      }
    }
  };
  // If the content top area is empty, hide empty panes so that margins and padding are gone
  Drupal.behaviors.blogContentTop = {
    attach: function() {
      if ($('body').hasClass('node-type-article')) {
        var hasChildren = false;
        $('.blog-content-top').find('.panel-display').each(function() {
          if ($(this).children().length > 0) {
            hasChildren = true;
          }
        });
        if (!hasChildren) {
          $('.blog-content-top').hide().next().addClass('no-blog-content-top');
        }
      }
    }
  };
  // Scroll to window pos to top of WooBox iframes after quiz is submitted. This solves an issue where
  // when a quiz is submitted, the iframe decreases in height leaving scroll position far below the quiz results.
  Drupal.behaviors.scrollWooBox = {
    attach: function(context, settings) {
      if ($('body').hasClass('node-type-article')) {
        // @TODO setTimeout is hacky but not sure this is worth the time to fix properly
        setTimeout(function() {
          if ($('.woobox-offer')) {
            $('.woobox-offer').each(function() {
              var headerH = $('#header-persistent').outerHeight();
              var subHeaderH = $('.view-blog-detail-title').outerHeight();
              var vertPos = $(this).find('iframe').offset().top - (headerH + subHeaderH + 25);
              $(this).find('iframe').attr('onLoad', 'window.parent.parent.scrollTo(0 ,' + vertPos + ')');
            });
          }
        }, 7000);
      }
    }
  };
})(jQuery);;
/* Author: Metal Toad:  Dan Linn, Tom Martin, Aaron Amstutz, Alex Laughnan */

/* global Drupal, YT, onPlayerReady */

if (!Array.indexOf) {
  Array.prototype.indexOf = function (obj) {
    'use strict';

    for (var i = 0; i < this.length; i++) {
      if (this[i] == obj) {
        return i;
      }
    }
    return -1;
  };
}

// This is used in docroot/sites/all/modules/custom/new_marquee_2013/ajax_video.js
// but defined in this file.
var resizeMarquee;

(function ($) {
  'use strict';

  // Vars
  var gtkTrigger;
  var init = false;
  var marqueeTimer;
  var mobileStatus = false;

  $(document).ready(function () {
    mobileChecker();
    insertionChecker();
  });

  $(window).resize(function () {
    mobileChecker();
  });

  var mobileChecker = function () {
    if ($(window).width() <= 780) {
      mobileStatus = true;
    }
    else {
      mobileStatus = false;
    }
  };

  //display loader
  var insertionChecker = function () {
    var interval = null;
    if ($(".insertion").length) {
      $(".insertion").addClass("loading-indicator-gallery-white");
      $(".view-dc-blog-gallery-2015").css({opacity: 0}); //hide blue container
      function displayLoader() {
        if ($(".gallery-initialized").length) {
          $(".insertion").removeClass("loading-indicator-gallery-white");
          $(".view-dc-blog-gallery-2015").css({opacity: 1}); //show blue container
          clearInterval(interval); // stop the interval
        }
      }
      interval = setInterval(displayLoader, 6000);
    }
  };

  var resizeCharMarquee = function (targetView) {
    var windowHeightOpen = Math.round($(window).width() * 9 / 16);
    var windowHeightClosed = 450;
    var imageHeight = $('#supersized-container #supersized img').height();
    var videoHeight = $('#supersized-container #supersized .fluid-width-video-wrapper iframe').height();
    var thumbsHeight = 0;

    if (targetView === '.view-character-marquee') {
      thumbsHeight = $('#main ' + targetView).height();
    }

    // Increased minimum margin to allow the default height to be 450 for smaller screens per DCCOMICSMA-189
    var marginMin = 140; // Minimum top margin between the gallery thumbnail and the top of the marquee
    var buffer = 60; // Triggers the very short state a little earlier to avoid complications
    // Make sure we have a height, whether it's an image or video
    imageHeight = (imageHeight !== null) ? imageHeight : videoHeight;
    if ($('#supersized-container').length > 0) {
      // Force videos to be the right height
      $('#supersized-container .fluid-width-video-wrapper').css('padding-top', '56.25%');
      // If the marquee gallery is open
      if ($('#supersized-container').hasClass('open')) {
        if (windowHeightOpen <= thumbsHeight + marginMin + buffer) {
          // If the window is very very short
          $('#supersized-container').css('height', (thumbsHeight + $(targetView + ' #controls-wrapper').height()));
          $('#supersized-container + #main').css('margin-top', (marginMin + $(targetView + ' #controls-wrapper').height()));
        } else {
          $('#supersized-container').css('height', windowHeightOpen);
          $('#supersized-container + #main').css('margin-top', (windowHeightOpen - thumbsHeight));
        }
        // If the marquee gallery is closed
      } else {
        // If the image height is less than 60% of the window height, set the marquee height to the image height
        if (windowHeightClosed > imageHeight) {
          $('#supersized-container').css('height', imageHeight);
          $('#supersized-container + #main').css('margin-top', marginMin);
          // If image height is greater than 60% of the window height, constrain marquee height there
        } else {
          if (windowHeightClosed <= thumbsHeight + marginMin + buffer) {
            // If the window is very very short
            $('#supersized-container').css('height', (thumbsHeight + marginMin));
            $('#supersized-container + #main').css('margin-top', marginMin);
          } else {
            $('#supersized-container').css('height', windowHeightClosed);
            $('#supersized-container + #main').css('margin-top', (windowHeightClosed - thumbsHeight));
          }
        }
      }
      $(targetView).addClass('processed');
      $(targetView + '.view-display-id-attachment_1').addClass('processed');
      $('body').fitVids();
    }
  };

  resizeMarquee = function () {
    if ($('.view-three-image-marquee').length > 0) {
      $('.view-three-image-marquee .view-footer .views-row').height($('.view-three-image-marquee .views-row-first.views-row-last').height() / 2 - 5);
      if ($('.faded').length > 0) {
        if ($('.view-three-image-marquee .views-row-first.views-row-last').height() > 300) {
          if ($('.lt-ie9').length > 0) {
            $('.panel-display > .pane-three-image-marquee').animate({opacity: 1}, 1000, function () {
              $('.faded').removeClass('faded');
            });
          } else {
            $('.faded').removeClass('faded');
          }
        } else {
          window.clearTimeout(marqueeTimer);
          marqueeTimer = setTimeout(resizeMarquee, 100);
        }
      }
    }
  };

  var resizeAllMarquees = function () {
    var targetView;
    if (!$('body').hasClass('node-type-article')) {
      targetView = '.view-character-marquee';
    }
    else if ($('body').hasClass('node-type-article')) {
      targetView = '.view-blog-detail-marquee';
    }
    resizeMarquee();
    resizeCharMarquee(targetView);
  };

  // Resize various marquees
  $(window).on('resize', function () {
    resizeAllMarquees();
    if (init) {
      clearTimeout(gtkTrigger);
      gtkTrigger = setTimeout(function () {
        resetGTKmarquee();
      }, 500);
    }
    init = true;
  }).on('load', function () {
    resizeAllMarquees();
  });

  function resetGTKmarquee() {
    if ($('.gtk .views-slideshow-cycle2-main-frame').length > 0) {
      var marqueeID = '#' + $('.gtk .views-slideshow-cycle2-main-frame').attr('id');
      var optionsID = '#' + $('.gtk .views_slideshow_cycle2_main').attr('id');
      var cyclesettings = Drupal.settings.viewsSlideshowCycle2[optionsID].opts;
      $(".gtk .views_slideshow_cycle2_main, .gtk .views-slideshow-cycle2-main-frame, .gtk .views-slideshow-cycle2-main-frame-row").css("height", "auto");
      $(marqueeID).cycle(cyclesettings);
    }
  }

  // Playlist Marker Animating
  var moveMarker = function (slide) {
    if ($('#playlist-marker').length > 0) {
      var $playlistItems = $('.playlist-menu a');
      if ($playlistItems.length < 1) {
        $playlistItems = $('.comic-menu a');
      }
      var item = $($playlistItems[slide]);
      var pos = item.position();
      var padL = parseInt(item.css('padding-left'), 10);
      var padR = parseInt(item.css('padding-right'), 10);
      var pad = padL + padR;
      var newWidth = parseInt(item.width(), 10) + pad;
      var leftPos = parseInt(pos['left'], 10);
      $('#playlist-marker').css('left', leftPos).css('width', newWidth);
    }
  };

  window.carouselScrolled = false;

  var slideToCurrent = function (slideCounter) {
    if ($('.view-comic-carousel').length > 0) {
      if ($('.arrows-moved').length < 1) {
        var prevc = $('.view-comic-carousel .jcarousel-prev');
        var nextc = $('.view-comic-carousel .jcarousel-next');
        $('.view-comic-carousel .jcarousel-container').append(prevc).append(nextc).addClass('arrows-moved');
      }
      $('.view-id-comic_carousel').each(function () {
        var $this = $(this);
        slideCounter = (typeof slideCounter == 'undefined') ? 0 : slideCounter++;
        var $current = $('.jcarousel-processed', $this).find('.current-week:first').parents('li:first');
        var scrollTarget = ($('li', $this).index($current) - 1);
        if (typeof $('.jcarousel', $this).data('jcarousel').pageCount == "undefined" || typeof $current == "undefined") {
          setTimeout(function () {
            slideToCurrent(slideCounter);
          }, 500);
        } else if (!window.carouselScrolled) {

          setTimeout(function () {
            if (scrollTarget < 0) {
              window.carouselScrolled = true;
              return;
            }
            // Start the carousel at the first item on detail pages, because index 1 is the current item
            if (!$('body').hasClass('landing-page')) {
              scrollTarget = 1;
            }
            $('.view-id-comic_carousel .jcarousel').each(function () {
              $(this).jcarousel('scroll', scrollTarget, true);
            });
            window.carouselScrolled = true;
            $('.view-comic-carousel').addClass('slid');
            setTimeout(function () {
              $(window).trigger('resize');
            }, 1000);
          }, 100);
        }
        moveMarker(0);
      });

    }
  };

  $('.view-id-comic_carousel .jcarousel').touchwipe({
    wipeLeft: function () {
      $(this).jcarousel('next');
    },
    wipeRight: function () {
      $(this).jcarousel('prev');
    }
  });

  Drupal.behaviors.emptyPanelRemove = {
    attach: function (context) {
      /* jshint unused: vars */
      var panel = $('.full2col-mid:last .panel-pane').length;
      if (panel < 1) {
        $('.full2col-mid:last').remove();
      }
    }
  };

  Drupal.behaviors.dc_misc = {
    attach: function (context, settings) {
      $('.view-comic-carousel.this-week .view-content').addClass('active');
      var element = $('.view-three-image-marquee video');
      if (element.length > 0) {
        element.each(function () {
          this.muted = "muted";
        });
      }
      $('.comic-menu a').each(function () {
        $(this).click(function (e) {
          e.preventDefault();
          var check = $(this).parent().index();
          moveMarker(check);
          $('.comic-menu a').removeClass('flex-active');
          $(this).addClass('flex-active');
          var position = $('.comic-menu li').index($(this).parent());
          if (position === 0 || position === 2) {
            window.carouselScrolled = false;
            // slideToCurrent();
            $('.view-comic-carousel.this-week .view-content').addClass('active');
            $('.view-comic-carousel.next-week .view-content').removeClass('active');
            $('.view-comic-carousel .browse-next-period').hide();
            $('.view-comic-carousel .browse-this-period').show();
          } else {
            // slideToNextWeek();
            $('.view-comic-carousel.this-week .view-content').removeClass('active');
            $('.view-comic-carousel.next-week .view-content').addClass('active');
            $('.view-comic-carousel .browse-this-period').hide();
            $('.view-comic-carousel .browse-next-period').show();
          }
        });
      });

      // Add You are here marker
      var currentNode = $('.view-comic-carousel').find('.comic-title a.active');

      if (currentNode) {
        currentNode.parent().append('<div class="comic-details-marker">YOU ARE HERE</div>');
      }

      $('.node-type-comic .view-vendor-links .available a').click(function (e) {
        e.preventDefault();
      });

      // Supersized marquee

      // @TODO Fix this.  Isn't there a reliable way to find if an image is loaded in JS?
      // Setup supersized object containing settings
      var supersizedSettings = {
        // Functionality
        slideshow: 1,      // Slideshow on/off
        autoplay: 0,      // Slideshow starts playing automatically
        start_slide: 1,      // Start slide (0 is random)
        stop_loop: 0,      // Pauses slideshow on last slide
        random: 0,      // Randomize slide order (Ignores start slide)
        slide_interval: 3000,   // Length between transitions
        transition: 6,      // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 1000,   // Speed of transition
        new_window: 0,      // Image links open in new window/tab
        pause_hover: 1,      // Pause slideshow on hover
        keyboard_nav: 1,      // Keyboard navigation on/off
        performance: 1,      // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
        image_protect: 0,      // Disables image dragging and right click with Javascript

        // Size & Position
        min_width: 0,      // Min width allowed (in pixels)
        min_height: 0,      // Min height allowed (in pixels)
        vertical_center: 0,      // Vertically center background
        horizontal_center: 1,      // Horizontally center background
        fit_always: 0,      // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait: 1,      // Portrait images will not exceed browser height
        fit_landscape: 1,      // Landscape images will not exceed browser width

        // Components
        slide_links: 'num',  // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        thumb_links: 1,      // Individual thumb links for each slide
        thumbnail_navigation: 0,      // Thumbnail navigation

        // Theme Options
        progress_bar: 0,      // Timer for each slide
        mouse_scrub: 0
      };

      // If page is not a Blog node, load Supersized with default settings
      if (!$('body').hasClass('node-type-article')) {
        setTimeout(function () {
          superSizeSetup(function (slideImages) {
            // Add images to settings
            supersizedSettings.slides = slideImages;
            $.supersized(supersizedSettings);
          }, '.view-character-marquee');
        }, 1000);
      }
      // If on a Blog node, load Supersized with different settings
      else if ($('body').hasClass('node-type-article')) {
        setTimeout(function () {
          superSizeSetup(function (slideImages) {
            // Add images to settings
            supersizedSettings.slides = slideImages;
            // Remove slideshow functionality
            supersizedSettings.slideshow = 0;
            $.supersized(supersizedSettings);
          }, '.view-blog-detail-marquee');
        }, 1000);
      }

      function superSizeSetup(callback, targetView) {
        var blogHero;
        if ($(targetView).length > 0) {
          if ($('#supersized').hasClass('processed')) {
            return;
          }

          $('#supersized').addClass('processed');
          $('#supersized-loader').css('display', 'block');
          var slideImages = [];

          // For all pages except Blog nodes
          // Find and add images/video fields
          if (targetView === '.view-character-marquee') {
            $(".view-character-marquee .entity-field-collection-item").each(function () {
              var obj = {};
              if ($(this).find('.field-name-field-embedded-video').length > 0) {
                obj.type = 'YOUTUBE';
                obj.video_id = $(this).find('.field-name-field-embedded-video .field-item').text();
              } else {
                obj.type = "IMAGE";
                obj.image = $(this).find('.field-name-field-uploaded-image img').attr('src');
              }

              // Slide title & caption
              // Do we have both?
              if ($(this).find('.field-name-field-title .field-item').text() && $(this).find('.field-name-field-caption .field-item').text()) {
                obj.title = $(this).find('.field-name-field-title .field-item').html() + ': ' + $(this).find('.field-name-field-caption .field-item').html();
              } else if ($(this).find('.field-name-field-caption .field-item').text()) {
                obj.title = $(this).find('.field-name-field-caption .field-item').html();
              } else {
                obj.title = $(this).find('.field-name-field-title .field-item').html();
              }

              slideImages.push(obj);
            });
          }
          // If Blog node
          // Find and add images/video fields
          else if (targetView === '.view-blog-detail-marquee') {
            var obj = {};
            // If there's a video and site is not mobile, use video
            if (($('.view-blog-detail-marquee .views-field-field-youtube-link').length > 0) && !mobileStatus) {
              obj.type = 'YOUTUBE';
              obj.video_id = $('.view-blog-detail-marquee .views-field-field-youtube-link').text().replace(/ /g, '');
              blogHero = 'video';
              $('body').addClass('blog-marquee-video');
              // If there's an image, use image
            }
            else if ($('.view-blog-detail-marquee .views-field-field-hero-image').length > 0) {
              obj.type = "IMAGE";
              obj.image = $('.view-blog-detail-marquee .views-field-field-hero-image img').attr('src');
              blogHero = 'image';
              $('body').addClass('blog-marquee-image');
            }
            slideImages.push(obj);
          }

          // Load Supersized
          if (slideImages.length > 0) {
            callback(slideImages);

            // Mute Blog marquee videos
            if (targetView === '.view-blog-detail-marquee') {
              var tag = document.createElement('script');
              tag.src = "//www.youtube.com/iframe_api";
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
              var player;

              window.onYouTubeIframeAPIReady = function () {
                var iframe_id = $('#supersized').find('iframe').attr('id');
                player = new YT.Player(iframe_id, {
                  events: {
                    'onReady': onPlayerReady
                  }
                });
              };

              window.onPlayerReady = function () {
                player.playVideo();
                // Mute!
                player.mute();
              };
            }

            // Load the fitVids after the superSize
            $('body').fitVids();
          }

          // Rearrange dom so that supersized-container is outside #main
          var cont = document.createElement("div");
          $(cont).attr('id', 'supersized-container');
          $(cont).append($('#supersized'));
          if (targetView === '.view-character-marquee') {
            $(cont).append($(targetView));
          }
          else if (targetView === '.view-blog-detail-marquee') {
            $(targetView).remove();
          }

          $('#main').before(cont);

          // Additional setup for non-blog nodes
          if (targetView === '.view-character-marquee') {
            if (slideImages.length > 0) {
              var $next = $('#nextslide').clone(true);
              $next.attr('id', 'topnextslide');
              var $prev = $('#prevslide').clone(true);
              $prev.attr('id', 'topprevslide');
              $('#slidecounter').before($prev).after($next);
            }

            // Add thumb, promos, & title to marquees
            // character
            if ($('.view-character-marquee.character-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_1'));
              $('.view-character-marquee.view-display-id-attachment_1 .views-field-title').after($('.view-character-marquee.marquee-promos'));
              // video
            } else if ($('.view-character-marquee.video-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_3'));
              $('.view-character-marquee.view-display-id-attachment_3 .view-content').append($('.view-character-marquee.marquee-promos'));
              // comic
            } else if ($('.view-character-marquee.comic-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_4'));
              $('.view-character-marquee.view-display-id-attachment_4 .view-content').append($('.view-character-marquee.marquee-promos'));
              // movie
            } else if ($('.view-character-marquee.movie-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_5'));
              $('.view-character-marquee.view-display-id-attachment_5 .view-content').append($('.view-character-marquee.marquee-promos'));
              // tv
            } else if ($('.view-character-marquee.tv-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_7'));
              $('.view-character-marquee.view-display-id-attachment_7 .view-content').append($('.view-character-marquee.marquee-promos'));
              // game
            } else if ($('.view-character-marquee.game-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_6'));
              $('.view-character-marquee.view-display-id-attachment_6 .view-content').append($('.view-character-marquee.marquee-promos'));
              // issue
            } else if ($('.view-character-marquee.issue-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.issue-thumb'));
              $('.view-character-marquee.issue-thumb .views-field-title').after($('.view-character-marquee.marquee-promos'));
              // talent
            } else if ($('.view-character-marquee.talent-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_10'));
              $('.view-character-marquee.view-display-id-attachment_10 .view-content').append($('.view-character-marquee.marquee-promos'));
              // collectibles
            } else if ($('.view-character-marquee.collectible-thumb').children().length > 0) {
              $('#main').prepend($('.view-character-marquee.view-display-id-attachment_11'));
              $('.view-character-marquee.view-display-id-attachment_11 .view-content').append($('.view-character-marquee.marquee-promos'));
            }
            // If promos have no content, don't display them
            if ($('.view-character-marquee.marquee-promos .views-row-1').children().length === 0) {
              $('.view-character-marquee.marquee-promos').css('display', 'none');
            }

            resizeCharMarquee(targetView);

            if (slideImages.length > 0) {
              $('.thumb-trigger, .closebutton').click(function () {
                $('#supersized-container').toggleClass('open');
                resizeCharMarquee(targetView);
                var button = $('.thumb-trigger-label');
                if ($('#supersized-container').hasClass('open')) {
                  button.text('CLOSE GALLERY');
                } else {
                  button.text('VIEW GALLERY');
                }
              });
            } else {
              // If there are no slides, remove the "View Gallery" label.
              $('.thumb-trigger-label').css('display', 'none');
              // And don't pretend to be clickable.
              $('.thumb-trigger').css('cursor', 'auto');
            }
          }
          // Additional setup for Blog nodes
          else if (targetView === '.view-blog-detail-marquee') {
            if ($('#supersized-container').length > 0) {
              $('body').addClass('blog-marquee-true');
            }
            // Move Drupal messages to avoid blog title View overlapping
            $('.full2col-mid').prepend($('.messages'));

            resizeCharMarquee(targetView);
            // Make title area view visible
            $('.view-blog-detail-title').show();

            // If on Blog node, make entire image trigger
            // var clickTarget;
            // if (blogHero === 'image') {
            //   clickTarget = '#supersized li > a';
            // }
            // else {
            //   clickTarget = '#supersized iframe';
            // }
            // $(clickTarget).click(function(){
            //   $('#supersized-container').toggleClass('open');
            //   resizeCharMarquee(targetView);
            // });
          }
          $('#supersized-loader').css('display', 'none');
        } else {
          $('#supersized').remove();
          $('#supersized-loader').remove();
        }
      }

      // Video playlists
      // UGH, flexslider has an iOS bug with it's css transitions: https://github.com/woothemes/FlexSlider/issues/853
      // hacking it thusly:
      var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
      $('.video-playlist')
        .flexslider({
          manualControls: ".playlist-menu a",
          animation: "slide",
          touch: false,
          smoothHeight: false,
          slideshow: false,
          directionNav: false,
          animationSpeed: 1000,
          useCSS: (iOS === true) ? false : true, // Turn off css transitions for iOS
          before: function (slider) {
            moveMarker(slider.animatingTo);
          },
          start: function (slider) {
            moveMarker(0);
            setTimeout(function () {
              if ($('.video-playlist .playlist-display li').length > 2) {
                var curSlide = $('#' + slider.slides[0].id);
                var flex_height = parseInt(curSlide.height(), 10) + parseInt(curSlide.css('padding-bottom'), 10);
                $('.video-playlist .flex-viewport').animate({height: flex_height});
              }
            }, 200);
          }
        });

      $('.playlist-menu li a').each(function () {
        var playheight,
            playpadding,
            flex_height;

        $(this).bind('click', function () {
          var tid = $(this).attr('id');
          tid = tid.replace('playlist-button-', '');
          playheight = $('#playlist-display-' + tid).height();
          playheight = parseInt(playheight, 10);
          playpadding = ('#playlist-display-' + tid);
          playpadding = $(playpadding).css('padding-bottom');
          if (playpadding !== null) {
            playpadding = parseInt(playpadding, 10);
            flex_height = playheight + playpadding;
          } else {
            flex_height = playheight;
          }
          setTimeout(function () {
            $('.video-playlist .flex-viewport').animate({height: flex_height});
          }, 200);
        });
      });

      // Starring thumbnail tooltips
      $('.subpage-callout.tooltip').each(function () {
        $(this).css('left', -($(this).width() / 2));
      });

      var $playlist = $('.playlist-menu');
      if (!$('#playlist-marker')) {
        $playlist.append('<div id="playlist-marker"></div>');
      }
      if ($playlist.length > 0) {
        moveMarker(0);
      }

      // adding some logic to have this only affect non dc_comics_bp themes
      // dc_comics_bp's script.js handles allsitesMenu
      if (!$('body').hasClass('domain-adev-dccomics-com') && !$('body').hasClass('domain-www-dccomics-com')) {
        // Adds a logowrap div for styling purposes
        $('#header-persistent').once(function () {
          $(this).prepend("<div class='logowrap'></div>");
          // Change the search button text
          $('#block-search-form .form-submit').attr("value", "go");

          // Add All Sites text
          $('#block-search-form').prepend('<a href="#">search</a>');
          $('#block-system-main-menu').prepend('<div class="title droparrow all-sites"><a href="#">all sites</a></div>');

          $('.social-trigger').prepend('<a href="#" class="fake-link">&nbsp;</a>');

          // This is a hack to allow 'hover' on mobile
          $('#block-search-form a, .all-sites a, .fake-link').click(function (event) {
            event.preventDefault();
          });
        });
      }

      var mustListPre = "dcml";
      var heroPre = "dchero";
      var factoidPre;

      if ($('.front').length > 0) {
        factoidPre = "dchpff";
      } else if ($('.page-videos').length > 0) {
        factoidPre = "dcvmff";
      } else if ($('.node-type-video').length > 0) {
        factoidPre = "dcvdff";
      } else {
        factoidPre = "dcff";
      }

      // Adds the Omniture tags but checks for existing querystrings first
      function addQuery(link, query) {
        var newLink = (link.split('?').length > 1) ? link + "&" + query : link + "?" + query;
        return newLink;
      }

      // Add omniture tags to must list links
      $('.view-must-list').once(function () {
        var rows = $('.view-must-list .views-row .must-list-link a');
        for (var i = 0, len = rows.length; i < len; i++) {
          var newLink = mustListPre + (i + 1) + "_" + $($('.view-must-list .cover')[i]).find('img').attr('title');
          $($('.view-must-list .cover a')[i]).attr('href', addQuery($(rows[i]).attr('href'), "adid=" + newLink));
          $(rows[i]).attr('href', addQuery($(rows[i]).attr('href'), "adid=" + newLink));
        }
      });

      // Add omniture tags to Hero links
      $('.view-three-image-marquee.view-display-id-block, .view-display-id-vertigo_hero').once(function () {
        $('.view-three-image-marquee.view-display-id-block, .view-display-id-vertigo_hero').addClass("clearfix");
        var rows = $('.view-three-image-marquee .views-row a');
        var newLink;
        for (var i = 0, len = rows.length; i < len; i++) {
          var imageTitle = $($('.view-three-image-marquee .views-row')[i]).find('img').attr('title');
          if (imageTitle !== undefined) { // If content is an image
            newLink = heroPre + (i + 1) + "_" + imageTitle;
            $(rows[i]).attr('href', addQuery($(rows[i]).attr('href'), "adid=" + newLink));
          } else { // If content is a video
            var heroTitle = $($('.view-three-image-marquee .views-row')[i]).find('.hero-title').text();
            newLink = heroPre + (i + 1) + "_" + heroTitle.replace(/\s/g, '-');
            $(rows[i]).attr('href', addQuery($(rows[i]).attr('href'), "adid=" + newLink));
          }
        }
      });

      // Placeholder - Oh how I long for the days when the placeholder attribute is fully supported.
      $('#edit-search-block-form--2').attr('value', 'Search').focus(function () {
        if ($(this).attr('value') == 'Search') {
          $(this).attr('value', '');
        }
      }).blur(function () {
        if ($(this).attr('value') === '') {
          $(this).attr('value', 'Search');
        }
      });

      $('.search-filter.browse-filter input').attr('value', 'Search').focus(function () {
        if ($(this).attr('value') == 'Search') {
          $(this).attr('value', '');
        }
      }).blur(function () {
        if ($(this).attr('value') === '') {
          $(this).attr('value', 'Search');
        }
      });

      $('.date_range-filter.browse-filter input').attr('value', 'mm/dd/yyyy').focus(function () {
        if ($(this).attr('value') == 'mm/dd/yyyy') {
          $(this).attr('value', '');
        }
      }).blur(function () {
        if ($(this).attr('value') === '') {
          $(this).attr('value', 'mm/dd/yyyy');
        }
      });

      $('.content-share a').on('touchstart', function (event, elem) {
        /* jshint unused: vars */
        if ($(this).attr('href') !== "" && $(this).attr('href') != "#") {
        }
      });

      var shareHoverStatus = false;
      // Content Social Share hover effect
      $('.content-share-wrapper').hover(
        function () {
          shareHoverStatus = true;
          $(this).addClass('hover');
        }, function () {
          var thisEl = $(this);
          shareHoverStatus = false;
          setTimeout(function () {
            if (!shareHoverStatus) {
              thisEl.removeClass('hover');
            }
          }, 200);
        }
      );

      // Content Social Share hover effects for News and Video content types
      $('.social-trigger, .field-name-social').hover(
        function () {
          $(this).children('.pane-content, .field-items').addClass('hover');
        }, function () {
          $(this).children('.pane-content, .field-items').removeClass('hover');
        }
      );

      // Fixed header
      // With added parralax for Char marquee
      if ($('#header-persistent').length > 0) {
        var top = $('#header-persistent').offset().top - parseFloat($('#header-persistent').css('margin-top').replace(/auto/, 0));

        $(window).scroll(function (event) {
          /* jshint unused: vars */
          var y = $(this).scrollTop();
          var z = $("html").scrollTop();
          var d = $("#header-persistent");
          var s = $('#supersized-container');
          var m = $('#main');
          var l = $('#logo');

          if (y >= top || z >= top) {
            d.addClass('persisting');
            if (s.length > 0) {
              s.addClass('fixie');
              m.addClass('fixie');
            }
            // scroll small logo into place
            l.addClass('logo-small');
          } else {
            d.removeClass('persisting');
            s.removeClass('fixie');
            m.removeClass('fixie');
            l.removeClass('logo-small');
          }
        });
      }
      // if they've click "load more" on the Comic Series (all) section, remove pager
      if (settings.loadAllComicSeries) {
        // remove the "load more"
        $('.pager-load-more').hide();
      }
    }
  };

  Drupal.behaviors.recentActivity = {
    attach: function (context) {
      var menu = $('.detail-recent-activity .filter-wrapper ul'),
        target = '<div class="drop-trigger">ALL</div>';
      if ($('.detail-recent-activity .filter-wrapper .drop-trigger').length === 0) {
        menu.before(target);
      }
      $('.detail-recent-activity .filter-wrapper li', context).on('click touchend', function (e) {
        e.preventDefault(); // prevent additional click event from touchend events.
        $('.detail-recent-activity .drop-trigger').html($(this).text());
        $(this).parent('ul').removeClass('open');
      });
      $('.filter-wrapper .drop-trigger', context).on('click touchend', function (e) {
        e.preventDefault(); // prevent additional click event from touchend events.
        $(this).parent().siblings().next('ul').removeClass('open');
        $(this).next('ul').addClass('open');
      });

    }
  };

  Drupal.behaviors.browseFilter = {
    attach: function (context) {
      /* jshint unused: vars */

      $('.browse .filter-wrapper li').click(function () {
        $(this).parent().siblings('.drop-trigger').html($(this).text());
        $(this).parent('ul').removeClass('open');
      });
      $('.browse .filter-wrapper li.active').each(function () {
        $(this).parent().siblings('.drop-trigger').html($(this).text());
      });
      $('.browse .drop-trigger').click(function () {
        $('.browse-filter ul').removeClass('open');
        $(this).next('ul').addClass('open');
      });

    }
  };

  Drupal.behaviors.nodeBodyTeaser = {
    attach: function (context) {
      // This really only needs to happen *once*.
      if ($('body').hasClass('nodeBodyTeaser-processed')) {
        return;
      }
      if ($('body').hasClass('legends')) {
        return;
      }
      // ** To Use: Add node-type class to types array to enable read more/teaser for that content-type **
      var types = ['node-type-generic-character', 'node-type-comic', 'node-type-graphic-novel', 'node-type-movies', 'node-type-tv', 'node-type-video-games', 'node-type-collectible'];
      // ** To Use: Add node-type class to exceptions array if teaser should not be displayed as H2 **
      var exceptions = ['node-type-comic', 'node-type-graphic-novel', 'node-type-movies', 'node-type-tv', 'node-type-video-games', 'node-type-collectible'];
      var currentType = $('body').attr('class').split(' ');
      var exceptionsFlag;
      var i, j;

      //Check to see if current page is in the exceptions array
      exceptionsloop:
        for (i = 0; i < currentType.length; i++) {
          for (j = 0; j < exceptions.length; j++) {
            if (currentType[i] == exceptions[j]) {
              exceptionsFlag = true;
              break exceptionsloop;
            }
            exceptionsFlag = false;
          }
        }
      //Check to make sure current page is in the types array before doing anything else
      for (i = 0; i < currentType.length; i++) {
        for (j = 0; j < types.length; j++) {
          if (currentType[i] == types[j]) {
            currentType = types[j];
            descriptionTeaser(currentType);
          }
        }
      }
      $('body').addClass('nodeBodyTeaser-processed');
      function descriptionTeaser(type) {
        //Determine whether/how to apply teaser and read more
        var container = $('.' + type + ' .pane-node-body .field-item');
        var paragraphs = $(container).html(), teaser;
        //If the first paragraph contains a br, make the text before the br the visible teaser and hide everything after
        if ($('.' + type + ' .pane-node-body p:first br') && $('.' + type + ' .pane-node-body br').length > 2) {
          var firstParagraph = $('.' + type + ' .pane-node-body p:first').html().split('<br>');
          $(container).empty();
          teaser = firstParagraph[0];
          paragraphs = paragraphs.replace(teaser, '');
          characterCount(type, container, teaser, paragraphs);
          $('.' + type + ' .pane-node-body .expanded br').slice(0, 2).remove();
          //If there is more than one paragraph, make the first paragraph the visible teaser and hide everything after
        } else if ($('.' + type + ' .pane-node-body p').length > 1) {
          teaser = $('.' + type + ' .pane-node-body p:first').html();
          $(container).empty();
          paragraphs = paragraphs.replace('<p>' + teaser + '</p>', '');
          characterCount(type, container, teaser, paragraphs);
        }
      }

      //(If there is only one paragraph and no br, then there should be no teaser and the text should be left as default)
      function characterCount(type, container, teaser, paragraphs) {
        //If the teaser is longer than x characters, hide .expanded and show read more
        if (teaser.length > 120) {
          readMore(type, container, teaser, paragraphs);
        } else {
          if (exceptionsFlag === false) {
            $(container, context).append('<h2 class="node-body-teaser large page-title">' + teaser + '</h2>' + '<div class="expanded">' + paragraphs + '</div>');
          } else {
            $(container, context).append('<p class="node-body-teaser page-title">' + teaser + '</p>' + '<div class="expanded">' + paragraphs + '</div>');
          }
        }
      }

      function readMore(type, container, teaser, paragraphs) {
        /* jshint unused: vars */
        if (exceptionsFlag === false) {
          $(container).append('<h2 class="node-body-teaser large page-title">' + teaser + '</h2>' + '<div class="expanded">' + paragraphs + '</div>');
        } else {
          $(container).append('<p class="node-body-teaser  page-title">' + teaser + '</p>' + '<div class="expanded">' + paragraphs + '</div>');
        }

        $('.pane-node-body .expanded').css('overflow', 'hidden').hide();
        if (!$('.node-body-read-more').length) {
          container.after('<div class="node-body-read-more">Read More</div>');
        }

        // This was originally .on('click touchend') but this would cause the "Read More" to collapse when scrolling :/
        $('.node-body-read-more:not(.processed)').on('click tap touch', function () {
          $('.pane-node-body .expanded').slideToggle('slow');
          $(this).toggleClass('node-body-read-less');
          if ($('.node-body-read-more').text() == 'Read More') {
            $(this).text('Read Less');
          } else {
            $(this).text('Read More');
          }
        });

        $('.node-body-read-more').addClass('processed');
      }
    }
  };

  Drupal.behaviors.talentCredits = {
    attach: function (context) {
      // Open and close the list sections
      // $('.pane-talent-related-content-credits-pane .pane-content').hide();
      $('.talent-section').first().addClass('open').children('table').slideToggle(0);
      $('.talent-section h2', context).on('click touchend', function () {
        // If section is closed, open it
        if (!$(this).parent().hasClass('open')) {
          $('.talent-section.open table').slideToggle('fast');
          $('.talent-section').removeClass('open');
          $(this).parent().addClass('open');
          $(this).next().slideToggle('fast');
        }
        // If section is open, close it
        else {
          $('.talent-section.open table').slideToggle('fast');
          $('.talent-section').removeClass('open');
        }
      });
    }
  };

  Drupal.behaviors.resetMarquees = {
    attach: function (context) {
      /* jshint unused: vars */
      resizeAllMarquees();
      clearTimeout(gtkTrigger);
      gtkTrigger = setTimeout(function () {
        resetGTKmarquee();
      }, 500);
    }
  };

  Drupal.behaviors.resetCurrentSeries = {
    attach: function (context, settings) {
      /* jshint unused: vars */
      if ($('.current-series').hasClass('resetProcessed')) {
        return;
      }
      $('.current-series').addClass('resetProcessed');
      var button = '<ul class="pager"><li><a href="#" class="series-toggle open">see less</a></li></ul>',
        sections = $('.current-series .views-row-first'),
        cache;
      if (sections.length > 1) {
        cache = $('.current-series .views-row-first:eq(1)').nextAll().andSelf();
        $('.current-series .item-list').append(button);
        $('.current-series a.series-toggle').on('click touchend', function (e) {
          e.preventDefault();
          $(cache).toggle();
          if (!$('.series-toggle')) {
            $('.current-series .item-list .pager').replace(button);
          } else {
            $('.series-toggle').text(function (i, text) {
              return text === 'see less' ? 'load all current series' : 'see less';
            }).toggleClass('open');
          }
        });
      }
    }
  };
})(jQuery);
;
