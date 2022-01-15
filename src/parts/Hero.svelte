<section class="hero is-link is-fullheight-with-navbar pattern">
  <div class="hero-body">
    <div class="columns">
      <div class="column is-two-thirds">
        <h1 class="title is-1 is-size-2-mobile is-spaced  has-text-centered-mobile">
          what are you doing tonight?
        </h1>
        <p class="subtitle has-text-justified-mobile">
          dilo finds others who want to do the same, so you don't hang out
          alone.
        </p>
      </div>
      <div class="column">
        <div class="notificationss">
          <div class="video-wrapper">
            <video playsinline preload="none" muted autoplay loop>
              <track kind="captions" />
              <source src="dinner.mp4" type="video/mp4" />
            </video>
          </div>     
          <div class="frame">
            <img src="iphone13-frame.png" alt="iphone 13 frame" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23526075' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%235c6a80' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%2365748a' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%236f7e95' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%237888A0' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
   /* background by SVGBackgrounds.com */

  }
  div.video-wrapper {
    padding-top: 10px;
    display: block;
    margin: 0 auto;
    width: 250px;
  }
  video {
    border-radius: 20px;
  }
  div.notificationss {
    width: 300px;
    margin: 0 auto;
    position: relative;
  }
  div.frame {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  img {
    height: 100%;
  }
</style>