(function () {
  var STORAGE_KEY = 'wiki-sidebar-open-v7';

  function directChildren(element, selector) {
    return Array.prototype.filter.call(element.children, function (child) {
      return child.matches(selector);
    });
  }

  function itemText(li) {
    var clone = li.cloneNode(true);
    directChildren(clone, 'ul').forEach(function (ul) { ul.remove(); });
    return (clone.textContent || '').trim();
  }

  function itemKey(li) {
    var link = directChildren(li, 'a')[0];
    if (link && link.getAttribute('href')) return link.getAttribute('href');
    return itemText(li);
  }

  function openMap() {
    try { return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (e) { return {}; }
  }

  function saveMap(map) {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(map)); }
    catch (e) {}
  }

  function setOpen(li, open, persist) {
    li.classList.toggle('is-open', open);
    li.classList.toggle('is-collapsed', !open);

    if (persist) {
      var map = openMap();
      map[itemKey(li)] = open;
      saveMap(map);
    }
  }

  function routeFromHref(href) {
    var route = href || '';
    if (!route) return '';

    if (/^https?:\/\//.test(route)) {
      try {
        var url = new URL(route);
        route = url.hash || url.pathname || '';
      } catch (e) {}
    }

    if (route.indexOf('#') !== -1) {
      route = route.slice(route.indexOf('#') + 1);
    }

    route = route.replace(/^!/, '');
    if (route.charAt(0) !== '/') route = '/' + route;
    route = route.replace(/\/$/, '') || '/';

    try { route = decodeURIComponent(route); }
    catch (e) {}

    return route.toLowerCase();
  }

  function routePath(route) {
    return route.split('?')[0];
  }

  function syncActiveLink() {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return null;

    var currentRoute = routeFromHref(window.location.href);
    var currentPath = routePath(currentRoute);
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href]'));
    var active = null;

    nav.querySelectorAll('a.active, li.active').forEach(function (element) {
      element.classList.remove('active');
    });

    links.some(function (link) {
      if (routeFromHref(link.getAttribute('href')) === currentRoute) {
        active = link;
        return true;
      }
      return false;
    });

    if (!active) {
      links.some(function (link) {
        var linkRoute = routeFromHref(link.getAttribute('href'));
        if (linkRoute.indexOf('?') === -1 && routePath(linkRoute) === currentPath) {
          active = link;
          return true;
        }
        return false;
      });
    }

    if (!active) return null;

    active.classList.add('active');
    if (active.parentElement) active.parentElement.classList.add('active');
    return active;
  }

  function setupSidebarTree() {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    var map = openMap();

    nav.querySelectorAll('li').forEach(function (li) {
      var childList = directChildren(li, 'ul')[0];
      if (!childList) return;

      li.classList.add('has-children');
      var key = itemKey(li);

      if (Object.prototype.hasOwnProperty.call(map, key)) {
        setOpen(li, !!map[key], false);
      } else if (!li.classList.contains('is-open') && !li.classList.contains('is-collapsed')) {
        setOpen(li, false, false);
      }

      if (li.dataset.treeBound) return;
      li.dataset.treeBound = '1';

      li.addEventListener('click', function (event) {
        var childLink = event.target.closest && event.target.closest('a');
        var ownLink = directChildren(li, 'a')[0];

        if (childLink && childLink !== ownLink) return;

        event.preventDefault();
        event.stopPropagation();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        setOpen(li, !li.classList.contains('is-open'), true);
        return false;
      }, true);
    });
  }

  function openActiveBranch() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    var active = syncActiveLink() || document.querySelector('.sidebar-nav a.active, .sidebar-nav li.active > a');
    if (!active) return;

    var node = active.parentElement;
    while (node && node !== document.body) {
      if (node.tagName === 'LI') setOpen(node, true, true);
      node = node.parentElement;
    }

    requestAnimationFrame(function () {
      var activeBox = active.getBoundingClientRect();
      var sideBox = sidebar.getBoundingClientRect();
      var offset = activeBox.top - sideBox.top - (sideBox.height / 2) + (activeBox.height / 2);
      sidebar.scrollTop += offset;
    });
  }

  function refresh() {
    setupSidebarTree();
    openActiveBranch();
  }

  window.addEventListener('load', function () { setTimeout(refresh, 200); });
  window.addEventListener('hashchange', function () { setTimeout(refresh, 200); });

  if (window.$docsify) {
    var oldDoneEach = window.$docsify.doneEach;
    window.$docsify.doneEach = function () {
      if (typeof oldDoneEach === 'function') oldDoneEach.apply(this, arguments);
      setTimeout(refresh, 120);
    };
  }
})();

