import Head from 'next/head'
import bg from '../public/topography.svg'
import $ from "jquery"
import './loader'

const containerStyling = {
    backgroundImage: `url(${bg.src})`,
    width: '100%',
    height: '100%',
    backgroundColor: '#080808',
}

(function($) {
    $(document).ready(function() {
        var containers = $('.container');

        if (containers.length) {
            containers.each(function() {
                var container = $(this);

                // Support small text - copy to fill screen width
                if (container.find('.scrolling-text').outerWidth() < $(window).width()) {
                    var windowToScrolltextRatio = Math.round($(window).width() / container.find('.scrolling-text').outerWidth()),
                        scrollTextContent = container.find('.scrolling-text .scrolling-text-content').text(),
                        newScrollText = '';
                    for (var i = 0; i < windowToScrolltextRatio; i++) {
                        newScrollText += ' ' + scrollTextContent;
                    }
                    container.find('.scrolling-text .scrolling-text-content').text(newScrollText);
                }

                // Init variables and config
                var scrollingText = container.find('.scrolling-text'),
                    scrollingTextWidth = scrollingText.outerWidth(),
                    scrollingTextHeight = scrollingText.outerHeight(true),
                    startLetterIndent = parseInt(scrollingText.find('.scrolling-text-content').css('font-size'), 10) / 4.8,
                    startLetterIndent = Math.round(startLetterIndent),
                    scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
                    transformAmount = 0,
                    leftBound = 0,
                    rightBound = scrollAmountBoundary,
                    transformDirection = container.hasClass('left-to-right') ? -1 : 1,
                    transformSpeed = 200;

                // Read transform speed
                if (container.attr('speed')) {
                    transformSpeed = container.attr('speed');
                }

                // Make scrolling text copy for scrolling infinity
                container.append(scrollingText.clone().addClass('scrolling-text-copy'));
                container.find('.scrolling-text').css({'position': 'absolute', 'left': 0});
                container.css('height', scrollingTextHeight);

                var getActiveScrollingText = function(direction) {
                    var firstScrollingText = container.find('.scrolling-text:nth-child(1)');
                    var secondScrollingText = container.find('.scrolling-text:nth-child(2)');

                    var firstScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(1)').css("left"), 10);
                    var secondScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(2)').css("left"), 10);

                    if (direction === 'left') {
                        return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                    } else if (direction === 'right') {
                        return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                    }
                }

                $(window).on('wheel', function(e) {
                    var delta = e.originalEvent.deltaY;

                    if (delta > 0) {
                        // going down
                        transformAmount += transformSpeed * transformDirection;
                        container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(10deg)');
                    }
                    else {
                        transformAmount -= transformSpeed * transformDirection;
                        container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(-10deg)');
                    }
                    setTimeout(function(){
                        container.find('.scrolling-text').css('transform', 'translate3d('+ transformAmount * -1 +'px, 0, 0)');
                        }, 10);
                    setTimeout(function() {
                        container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(0)');
                        }, 500)

                    // Boundaries
                    if (transformAmount < leftBound) {
                        var activeText = getActiveScrollingText('left');
                        activeText.css({'left': Math.round(leftBound - scrollingTextWidth - startLetterIndent) + 'px'});
                        leftBound = parseInt(activeText.css("left"), 10);
                        rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;

                    } else if (transformAmount > rightBound) {
                        var activeText = getActiveScrollingText('right');
                        activeText.css({'left': Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent) + 'px'});
                        rightBound += scrollingTextWidth + startLetterIndent;
                        leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
                    }
                });
            })
        }
    });
});

export default function Home() {
  return (
    <div className='container' style={containerStyling}>
      <Head>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
<a href='/jaceSimons' className='card'>
              <h3> Jace Simons About Me Page &rarr; </h3>
              <p> Click here to navigate to Jace Simons' about me page</p>
          </a>
          <div class="container" speed={70}>
              <div class='scrolling-text'>
                  <h2 class="scrolling-text-content">This is some other text, not so big but still very big This is some other text,
                      not so big but still very big</h2>
              </div>
          </div>
  <div class="container left-to-right" speed={100}>
    <div class='scrolling-text'>
        <h2 class="scrolling-text-content">This is some other text, not so big but still very big This is some other text,
            not so big but still very big</h2>
    </div>
  </div>
    <div class="container">
    <div class='scrolling-text'>
        <h2 class="scrolling-text-content">This is some other text, not so big but still very big This is some other text,
            not so big but still very big</h2>
    </div>
    </div>
      </main>

      <footer>
        <a href='' target='_blank' rel='noopener noreferrer'>
          Jace Simons
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .description2 {
          line-height: 1.5;
          font-size: 1.25rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

      // scroll text
      body,
      html {
      overflow: hidden;
      }

      body {
      background: #000;
      }

      .container {
      position: relative;
      width: 100vw;
      overflow: hidden;
      }

      .scrolling-text {
      display: inline-block;
      transition: transform 0.5s cubic-bezier(0.23, 0.36, 0.28, 0.83);
      will-change: transform;
      backface-visibility: hidden;
      }

      .scrolling-text .scrolling-text-content {
      color: #fff;
      font-size: 120px;
      white-space: nowrap;
      transition: transform 0.5s cubic-bezier(0.23, 0.36, 0.28, 0.83);
      line-height: 1em;
      margin: 50px 0;
      }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
