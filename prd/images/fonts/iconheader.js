;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.064512 230.4l767.870976 0 0 89.6L128.064512 320 128.064512 230.4z"  ></path>' +
    '' +
    '<path d="M128.064512 473.601024l767.870976 0 0 89.6L128.064512 563.201024 128.064512 473.601024z"  ></path>' +
    '' +
    '<path d="M128.064512 704l767.870976 0L895.935488 793.6 128.064512 793.6 128.064512 704z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-erweima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M148.473031 874.211509l275.634688 0 0 0.001023-275.634688 0 0-0.001023ZM217.381447 667.48626l137.816832 0 0 137.816832-137.816832 0 0-137.816832ZM561.925574 529.669428l68.908416 0 0 275.631618-68.908416 0 0-275.631618ZM79.563592 943.120948l413.45152 0L493.015112 529.669428 79.563592 529.669428 79.563592 943.120948zM148.473031 874.211509 148.473031 598.577844l275.634688 0 0 275.632641 0 0.001023L148.473031 874.211509 148.473031 874.211509zM561.925574 874.212532l137.816832 0 0 68.909439-137.816832 0 0-68.909439ZM906.468678 667.48626l68.908416 0 0 68.909439-68.908416 0 0-68.909439ZM768.651846 529.669428l206.726272 0 0 68.908416-206.726272 0 0-68.908416ZM699.74036 185.125301l137.819902 0 0 137.817855-137.819902 0 0-137.817855ZM975.377094 47.309492 561.925574 47.309492l0 413.45152 413.45152 0L975.377094 47.309492zM906.468678 391.851573 630.833991 391.851573 630.833991 116.217908l275.634688 0L906.468678 391.851573zM79.563592 460.761012l413.45152 0L493.015112 47.309492 79.563592 47.309492 79.563592 460.761012zM148.473031 116.217908l275.634688 0 0 275.633664L148.473031 391.851573 148.473031 116.217908zM906.468678 874.212532 768.651846 874.212532 768.651846 943.121971 975.377094 943.121971 975.377094 805.303093 906.468678 805.303093ZM699.74036 667.48626 699.74036 805.303093 837.559239 805.303093 837.559239 736.3957 768.651846 736.3957 768.651846 667.48626ZM217.381447 185.125301l137.816832 0 0 137.817855-137.816832 0 0-137.817855Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)