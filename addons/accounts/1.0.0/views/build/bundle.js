(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API = {
  listsLoaded: false,
  transactionsLoaded: false,
  cache: {},

  initCache: function initCache() {
    API.cache = {
      lists: {},
      transactions: {}
    };
  },
  getOrderedLists: function getOrderedLists() {
    if (!API.cache['lists']) return [];
    var lists = Object.values(API.cache['lists']);
    if (!lists.length) return [];
    return lists.sort(function (a, b) {
      return a.data.position - b.data.position; // ascending order
    });
  },
  addTransaction: function addTransaction(item) {
    _index2.default.invalidateLists = true; // rerender lists
    API.cache['transactions'][item.id] = item;
    console.log('transaction added', item);
  },
  addTransactions: function addTransactions(items) {
    API.transactionsLoaded = true;
    if (items && items.length) {
      for (var i = 0; i < items.length; i++) {
        if (Array.isArray(items[i])) API.addTransactions(items[i]);else API.addTransaction(items[i]);
      }
    }
  },
  getListTransactions: function getListTransactions(listId) {
    var list = API.cache['lists'][listId];
    return list.transactions;
    /*
    const transactions = []
    for (const transactionId in API.cache['transactions']) {
      const transaction = API.cache['transactions'][transactionId]
      console.error({list, transaction});
       if (list.filters && transaction.filters) {
         // Filter on tags
        const transactionTags = transaction.filters.map(x => x.name)
        const listTags = list.filters.map(x => x.name)
        const matchTags = transactionTags.filter(x => listTags.indexOf(x) !== -1)
        let matches = !!matchTags.length || (!transactionTags.length && !listTags.length)
        console.log('transaction matches list tags', transaction.name, transaction.filters, list.name, list.filters, matches)
         // Filter on status
        if (matches && list.data.statuses) {
          matches = list.data.statuses.indexOf(transaction.status) !== -1
          console.log('transaction matches list statuses', transaction.name, transaction.status, list.name, list.statuses, matches)
        }
         if (matches) {
          transactions.push(transaction)
        }
      }
    }
     return transactions
    */
  },
  loadListTransactions: function loadListTransactions(list) {
    if (list._transactionsLoaded) {
      console.log('transactions already loaded', list); // params
      return;
    }

    // Set the internal `_transactionsLoaded` flag.
    // Transactions won't be reloaded until this is set to false
    list._transactionsLoaded = true;

    // let name, tags, params, request, requests = []
    var name = window.tommy.config.getCurrentUserName();
    var tags = [name];
    if (list.data && list.filters) {
      for (var i = 0; i < list.filters.length; i++) {
        tags.push(list.filters[i].name);
      }
    }

    var params = {
      addon: 'accounts',
      kind: 'Transaction',
      tags: tags,
      with_filters: true,
      with_permission_to: true
    };
    if (list.data.date_range) {
      params.date_range = list.data.date_range;
    }
    if (list.data.statuses) {
      params.status = list.data.statuses;
    }

    return window.tommy.api.call({
      endpoint: 'wallet/manager/transactions'
    }).then(function (transactions) {
      API.addTransactions(transactions);
      list.transactions = transactions;
    });
  },
  loadTransactions: function loadTransactions() {
    console.log('load transactions');

    var requests = [];
    for (var listId in API.cache['lists']) {
      var list = API.cache['lists'][listId];
      var request = API.loadListTransactions(list);
      if (request) requests.push(request);
    }

    return Promise.all(requests).then(API.addTasks);
  },
  addTransactionActivity: function addTransactionActivity(transaction, type, text) {
    var currentUser = window.tommy.config.getCurrentUser();
    var activity = {
      type: type,
      text: text,
      time: new Date(),
      user_id: currentUser.id,
      user_name: currentUser.first_name
    };

    if (!transaction.data) {
      transaction.data = {};
    }
    if (!transaction.data.activity) {
      transaction.data.activity = [];
    }
    transaction.data.activity.unshift(activity);

    return activity;
  },
  saveTransaction: function saveTransaction(transaction) {
    console.log('save transaction', transaction);
    if (!transaction.name) {
      alert('Transaction name must be set');
      return;
    }

    _index2.default.invalidateLists = true; // rerender lists

    transaction.addon = 'accounts';
    transaction.kind = 'Transaction';
    transaction.with_filters = true;
    transaction.with_permission_to = true;
    if (!transaction.id) {
      API.addTransactionActivity(transaction, 'status', window.tommy.i18n.t('transaction.created_a_transaction'));
    }
    if (!transaction.status) {
      transaction.status = API.STATUSES[0];
    }
    if (!transaction.start_at) {
      transaction.start_at = new Date().getTime();
    }

    // Specify the access permissions this resource will belong to
    if (!transaction.id) {
      transaction.with_permissions = ['transaction_create_access', 'transaction_edit_access'];
      var actor = window.tommy.addons.getCurrentActor();
      if (actor) {
        if (!transaction.filters) transaction.filters = [];
        transaction.filters.push({
          context: 'members',
          name: actor.first_name + ' ' + actor.last_name,
          user_id: actor.user_id
        });
      }
    }

    var params = Object.assign({}, transaction, { data: JSON.stringify(transaction.data) });
    if (transaction.id) {
      return window.tommy.api.updateFragment(transaction.id, params).then(API.addTransaction);
    } else {
      return window.tommy.api.createFragment(params).then(API.addTransaction);
    }
  },
  addList: function addList(item) {
    API.cache['lists'][item.id] = item;
    console.log('added transaction list', item);
  },
  addLists: function addLists(items) {
    API.listsLoaded = true;
    if (items && items.length) {
      for (var i = 0; i < items.length; i++) {
        API.addList(items[i]);
      }
    }
  },
  loadLists: function loadLists(params) {
    console.log('load transaction lists', params);

    params = Object.assign({
      addon: 'accounts',
      kind: 'TransactionList',
      with_filters: true,
      with_permission_to: true
    }, params);
    return window.tommy.api.getFragments(params).then(API.addLists);
  },
  deleteList: function deleteList(listId) {
    _index2.default.invalidateLists = true;
    delete API.cache['lists'][listId];
    console.log('delete list', listId);
    return window.tommy.api.deleteFragment(listId);
  },
  saveList: function saveList(list) {
    console.log('save list', list);

    // Set the internal flags to reload transactions for this list
    API.transactionsLoaded = false;
    list._transactionsLoaded = false;
    _index2.default.invalidateLists = true; // rerender lists

    list.addon = 'accounts';
    list.kind = 'TransactionList';
    list.with_filters = true;
    list.with_permission_to = true;
    if (!list.data) {
      list.data = {};
    }
    if (typeof list.data.position === 'undefined') {
      list.data.position = Object.keys(API.cache['lists']).length;
    }
    if (typeof list.data.active === 'undefined') {
      list.data.active = true;
    }
    if (typeof list.data.show_fast_add === 'undefined') {
      list.data.show_fast_add = true;
    }

    // Specify the access permissions this resource will belong to
    if (!list.id) list.with_permissions = ['transaction_list_read_access', 'transaction_list_edit_access'];

    var params = Object.assign({}, list, {
      data: JSON.stringify(list.data),
      filters: JSON.stringify(list.filters)
    });
    if (list.id) {
      return window.tommy.api.updateFragment(list.id, params).then(API.addList);
    } else {
      return window.tommy.api.createFragment(params).then(API.addList);
    }
  },
  currentUserTag: function currentUserTag() {
    return {
      context: 'members',
      name: window.tommy.config.getCurrentUserName(),
      user_id: window.tommy.config.getCurrentUserId()
    };
  },
  createDefaultList: function createDefaultList() {
    console.log('creating deafult transaction list');
    var list = {
      name: window.tommy.i18n.t('index.default-list-name'),
      data: {
        default: true
      },

      // Default list filters show transactions tagged with current user
      filters: [API.currentUserTag()]
    };
    return API.saveList(list);
  },
  hasDefaultList: function hasDefaultList() {
    return API.cache['lists'] && Object.values(API.cache['lists']).filter(function (x) {
      return x.data.default;
    }).length > 0;
  },
  initPermissionSelect: function initPermissionSelect(page, name, resource_id) {
    console.log('init permission selects', name, resource_id);
    var params = {
      resource_id: resource_id,
      with_filters: true
    };
    window.tommy.api.getInstalledAddonPermission('accounts', name, params).then(function (permission) {
      console.log('installed addon permission', permission);
      // for (var i = 0; i < permissions.length; i++) {
      // const wantedPermission = wantedPermissions.filter(x => x.name == permissions[i].name)[0]
      // if (!wantedPermission) continue
      // const permission = Object.assign({}, permissions[i], wantedPermission)
      // console.log('init permissions', permission)
      permission.resource_id = resource_id;
      window.tommy.tplManager.appendInline('accounts__tagSelectTemplate', permission, page.container);
      API.initTagSelect(page, permission);
      // }
    });
  },
  initTagSelect: function initTagSelect(page, permission) {
    var $tagSelect = $$(page.container).find('.tag-select[data-permission-name="' + permission.name + '"]'); //.find('') //$page.find('#addon-permissions-form .tag-select')
    console.log('init tag select', permission, $tagSelect.dataset());
    window.tommy.tagSelect.initWidget($tagSelect, permission.filters, function (data) {
      console.log('save permission tags', permission, data);
      window.tommy.api.updateInstalledAddonPermission('accounts', permission.name, {
        resource_id: permission.resource_id, // pass the resource_id for resource specific permissions
        with_filters: true,
        filters: JSON.stringify(data) // data
      });
    });
  },
  isTablet: function isTablet() {
    return window.innerWidth >= 630;
  },


  STATUSES: ['Unassigned', 'Assigned', 'Processing', 'Completed', 'Closed', 'Archive Transaction', 'Cancel'],

  translateStatus: function translateStatus(status) {
    if (status) return window.tommy.i18n.t('status.' + window.tommy.util.underscore(status), { defaultValue: status });
  },
  untranslateStatus: function untranslateStatus(translatedStatus) {
    for (var i = 0; i < API.STATUSES.length; i++) {
      if (API.translateStatus(API.STATUSES[i]) === translatedStatus) return API.STATUSES[i];
    }
  },
  translatedStatuses: function translatedStatuses() {
    var statuses = [];
    for (var i = 0; i < API.STATUSES.length; i++) {
      statuses.push(API.translateStatus(API.STATUSES[i]));
    }
    return statuses;
  }
};

exports.default = API;

},{"./controllers/index":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoardSettingsController = {
  init: function init(page) {
    var $page = $$(page.container);
    var $nav = $$(page.navbarInnerContainer);

    window.tommy.tplManager.renderInline('accounts__boardSettingTemplate', null, $page);

    // Team manager only settings
    if (window.tommy.util.isTeamOwnerOrManager()) {
      _api2.default.initPermissionSelect(page, 'transaction_create_access');
      _api2.default.initPermissionSelect(page, 'transaction_edit_access');
    }

    // $nav.find('a.save').on('click', ev => {
    //   const data = window.tommy.app.f7.formToJSON($page.find('form'))
    //
    //   // NOTE: Form not implemented yet
    //   ev.preventDefault()
    // })
  }
};

exports.default = BoardSettingsController;

},{"../api":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexController = {
  init: function init(page) {
    console.log('initialize accounts addon');
    if (!_api2.default.listsLoaded) {
      // || !API.transactionsLoaded
      _api2.default.initCache();
      _api2.default.loadLists().then(function () {
        if (_api2.default.hasDefaultList()) {
          IndexController.loadTransactions(page);
        } else {
          // Create a default list if none exists
          _api2.default.createDefaultList().then(function () {
            IndexController.loadTransactions(page);
          });
        }
      });
    } else if (!_api2.default.transactionsLoaded) {
      IndexController.loadTransactions(page);
    } else {
      IndexController.invalidate(page);
    }

    IndexController.bind(page);
  },
  loadTransactions: function loadTransactions(page) {
    _api2.default.loadTransactions().then(function () {
      IndexController.invalidate(page);
    });
  },
  uninit: function uninit() {
    console.log('uninitialize accounts addon');
    _api2.default.cache = {};
  },
  bind: function bind(page) {
    var $page = $$(page.container);

    $page.find('.list-content').each(function () {
      var $el = $$(this);
      if ($el[0].scrollHeight >= $el[0].clientHeight) {
        $el.parent().addClass('hasScroll');
      }
    });

    // Bind picker actions
    // KLUDGE: This is very hacky and will leave us with unbound events
    $$(document).on('picker:open', function (e) {
      var $this = $$(e.target);

      // Disable the current user from the participant picker,
      // they must always be selected
      if ($this.hasClass('tag-select-picker')) {
        var name = window.tommy.config.getCurrentUserName();
        $this.find('input[value="' + name + '"]').parent().parent().addClass('offscreen');
      }
    });
  },
  invalidate: function invalidate(page) {
    // if (!IndexController.listsLoaded || !IndexController.transactionsLoaded) return;

    console.log('invalidating accounts index');
    var $page = $$(page.container);

    console.log('rendering transaction lists');
    IndexController.invalidateLists = false;
    window.tommy.tplManager.renderInline('accounts__listsTemplate', _api2.default.getOrderedLists(), page.container);

    var swiper = window.tommy.app.f7.swiper('.swiper-container', {
      centeredSlides: !_api2.default.isTablet(),
      spaceBetween: 0,
      freeMode: false,
      freeModeSticky: true,
      slidesPerView: 'auto'
    });

    for (var listId in _api2.default.cache['lists']) {
      var $e = $page.find('[data-list-id="' + listId + '"] .list-content');
      var transactions = _api2.default.getListTransactions(listId);
      window.tommy.tplManager.renderTarget('accounts__listTransactionsTemplate', transactions, $e);
    }
  }
};

exports.default = IndexController;

},{"../api":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListAddController = {
  init: function init(page) {
    var $page = $$(page.container);
    var $nav = $$(page.navbarInnerContainer);

    $nav.find('a.save').on('click', function (ev) {
      var data = window.tommy.app.f7.formToJSON($page.find('form'));
      ListAddController.saveList(data);
      ev.preventDefault();
    });
  },
  saveList: function saveList(data) {
    var list = {};
    list.name = data.name;

    // Default list filters show transactions tagged with current user
    list.filters = [_api2.default.currentUserTag()];

    // console.log('create list', list, data)
    // if (!list.name) {
    //   alert('List name must be set')
    //   return
    // }

    _api2.default.saveList(list).then(ListAddController.afterSave);
  },
  afterSave: function afterSave(res) {
    console.log('list saved', res);
    window.tommy.app.f7view.router.back();
  }
};

exports.default = ListAddController;

},{"../api":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _formatDateRange = require('../format-date-range');

var _formatDateRange2 = _interopRequireDefault(_formatDateRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListEditController = {
  init: function init(page) {
    var list = _api2.default.cache['lists'][page.query.list_fragment_id];
    var $page = $$(page.container);
    var $nav = $$(page.navbarInnerContainer);

    console.log('edit list', list);

    // NOTE: we should probably check that the current user has

    window.tommy.tplManager.renderInline('accounts__listEditTemplate', list, $page);

    ListEditController.initListFilters(page, list);
    _api2.default.initPermissionSelect(page, 'transaction_list_read_access', list.id);
    _api2.default.initPermissionSelect(page, 'transaction_list_edit_access', list.id);

    $nav.find('a.save').on('click', function (ev) {
      var data = window.tommy.app.f7.formToJSON($page.find('form'));
      ListEditController.saveList(list, data);
      ev.preventDefault();
    });

    $page.find('.date-range-select').on('click', function (ev) {
      ListEditController.showDateRangePage(page, list);
      ev.preventDefault();
    });

    $page.find('select[name="statuses"]').on('change', function (ev) {
      list.data.statuses = $$(ev.target).val();
      console.log('update statuses', list.data.statuses);
    });

    $page.find('.delete-list').on('click', function (ev) {
      _api2.default.deleteList(list.id);
      window.tommy.app.f7view.router.back();
      ev.preventDefault();
    });
  },
  showDateRangePage: function showDateRangePage(settingsPage, list) {
    var html = window.tommy.tplManager.render('accounts__dateRangeSelectTemplate', list.data);

    function handleDateRangePage(page) {
      var $page = $$(page.container);
      var $nav = $$(page.navbarInnerContainer);
      var date_range = list.data.date_range;
      var range = date_range;
      var dateFrom = Array.isArray(range) && range[0] ? range : new Date().getTime();
      var dateTo = Array.isArray(range) && range[1] ? range : new Date().getTime();

      var $radios = $page.find('input[name="time_or_created_between"]');
      var $switch = $page.find('.label-switch input');

      function enableSave() {
        $nav.find('.toggle.save').addClass('active');
      }

      function save() {
        list.data.date_range = range;
        _api2.default.saveList(list).then(function (res) {
          $$(settingsPage.container).find('.date-range-select .item-after').text((0, _formatDateRange2.default)(range));
          ListEditController.afterSave(res);
        });
      }

      function onSwitchChange(e) {
        if (e.target.checked) {
          $page.find('.date-range-custom-item').show();
          $radios.prop('checked', false);
          range = [dateFrom, dateTo];
        } else {
          range = '';
          $page.find('.date-range-custom-item').hide();
        }
        enableSave();
      }
      function onRadioChange(e) {
        if (e.target.checked) {
          $switch.prop('checked', false).trigger('change');
          range = e.target.value;
        }
        enableSave();
      }

      if (typeof range === 'string' && range) {
        $page.find('input[name="time_or_created_between"][value="' + range + '"]').prop('checked', true);
        $page.find('.date-range-custom-item').hide();
      } else if (!range) {
        $page.find('input[name="time_or_created_between"][value=""]').prop('checked', true);
        $page.find('.date-range-custom-item').hide();
      } else if (Array.isArray(range)) {
        $switch.prop('checked', true);
      }
      var fromInitialChange = void 0;
      var toInitialChange = void 0;
      var calendarFrom = window.tommy.app.f7.calendar({
        input: $page.find('input[name="start_at"]'),
        closeOnSelect: true,
        value: [dateFrom],
        onChange: function onChange(c, values) {
          if (fromInitialChange) {
            enableSave();
          }
          fromInitialChange = true;
          dateFrom = new Date(values[0]).getTime();
          if (Array.isArray(range) && range[0]) range[0] = dateFrom;
          if (dateFrom > dateTo) {
            calendarTo.setValue([dateFrom]);
          }
        }
      });
      var calendarTo = window.tommy.app.f7.calendar({
        input: $page.find('input[name="end_at"]'),
        closeOnSelect: true,
        value: [dateTo],
        onChange: function onChange(c, values) {
          if (toInitialChange) {
            enableSave();
          }
          toInitialChange = true;
          dateTo = new Date(values[0]).getTime();
          if (Array.isArray(range) && range[1]) range[1] = dateTo;
          if (dateTo < dateFrom) {
            calendarFrom.setValue([dateTo]);
          }
        }
      });

      $switch.on('change', onSwitchChange);
      $radios.on('change', onRadioChange);
      $nav.find('.toggle.save').on('click', save);
    }

    $$(window.tommy.f7.views.main.container).once('page:init', '[data-page="accounts__date-range-select"]', function (e) {
      var page = e.detail.page;
      handleDateRangePage(page);
    });
    window.tommy.f7.views.main.loadContent(html);
  },
  initListFilters: function initListFilters(page, list) {
    // if (!list.filters)
    //     list.filters = []
    var object = {
      title: window.tommy.i18n.t('parmissions.filter_transactions.title'),
      name: 'filter_transactions'
    };
    var $tagSelect = window.tommy.tplManager.appendInline('accounts__tagSelectTemplate', object, page.container);
    console.log('init filter select', list.filters);
    window.tommy.tagSelect.initWidget($tagSelect, list.filters, function (data) {
      console.log('save filter tags', data);
      list.filters = data;
    });
  },
  saveList: function saveList(list, data) {
    list.name = data.name;
    list.data.show_fast_add = !!(data.show_fast_add && data.show_fast_add.length);

    _api2.default.saveList(list).then(ListEditController.afterSave);
  },
  afterSave: function afterSave(res) {
    console.log('list saved', res);
    window.tommy.app.f7view.router.back();
  }
};

exports.default = ListEditController;

},{"../api":1,"../format-date-range":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListManagementController = {
  init: function init(page) {
    var $page = $$(page.container);
    var $nav = $$(page.navbarInnerContainer);

    ListManagementController.render(page);

    $nav.find('a.save').on('click', function (ev) {
      var data = window.tommy.app.f7.formToJSON($page.find('form'));
      ListManagementController.save(page, data);
      ev.preventDefault();
    });

    $page.on('change', 'input[type="checkbox"]', function () {
      $nav.find('a.save').addClass('active');
    });
  },
  render: function render(page) {
    var $page = $$(page.container);
    window.tommy.tplManager.renderInline('accounts__listManagementTemplate', _api2.default.getOrderedLists(), $page);
  },
  save: function save(page, data) {
    var $page = $$(page.container);
    var redirected = false;

    $page.find('.sortable [data-list-id]').each(function (index) {
      var $this = $$(this);
      var list = _api2.default.cache['lists'][$this.data('list-id')];
      var active = $this.find('input[type="checkbox"]')[0].checked;

      console.log('save list order', list.name, list.data.position, index, list.data.active, active);
      if (list.data.position != index || list.data.active != active) {
        list.data.position = index;
        list.data.active = active;
        _api2.default.saveList(list);
        console.log('updated list', list);

        if (!redirected) {
          redirected = true;
          window.tommy.app.f7view.router.back();
        }
      }
    });
  }
};

exports.default = ListManagementController;

},{"../api":1}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransactionAddController = {
  init: function init(page) {
    var $page = $$(page.container);
    var $nav = $$(page.navbarInnerContainer);

    window.tommy.tplManager.renderInline('accounts__addTransactionTemplate', {}, $page); // API.cache['lists']

    $nav.find('a.save').on('click', function (ev) {
      var data = window.tommy.app.f7.formToJSON($page.find('form'));
      data.filters = [_api2.default.currentUserTag()]; // tag the current user

      TransactionAddController.saveTransaction(data);
      ev.preventDefault();
    });
  },
  saveTransaction: function saveTransaction(data) {
    _api2.default.saveTransaction(data).then(TransactionAddController.afterSave);
  },
  afterSave: function afterSave(res) {
    console.log('transaction saved', res);
    window.tommy.app.f7view.router.back();
  }
};

exports.default = TransactionAddController;

},{"../api":1}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransactionDetailsController = {
  init: function init(page) {
    var id = page.query.id;

    var transaction = _api2.default.cache.transactions[id];
    console.error({ transaction: transaction });
    window.tommy.tplManager.renderInline('accounts__transactionDetailsTemplate', transaction, page.container);
  },
  uninit: function uninit() {}
};

exports.default = TransactionDetailsController;

},{"../api":1}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (code) {
  if (!code) return '';
  if (map[code]) return map[code];
  return '';
};

var map = {
  'AED': 'د.إ',
  'AFN': '؋',
  'ALL': 'L',
  'AMD': '֏',
  'ANG': 'ƒ',
  'AOA': 'Kz',
  'ARS': '$',
  'AUD': '$',
  'AWG': 'ƒ',
  'AZN': '₼',
  'BAM': 'KM',
  'BBD': '$',
  'BDT': '৳',
  'BGN': 'лв',
  'BHD': '.د.ب',
  'BIF': 'FBu',
  'BMD': '$',
  'BND': '$',
  'BOB': '$b',
  'BRL': 'R$',
  'BSD': '$',
  'BTC': '฿',
  'BTN': 'Nu.',
  'BWP': 'P',
  'BYR': 'Br',
  'BYN': 'Br',
  'BZD': 'BZ$',
  'CAD': '$',
  'CDF': 'FC',
  'CHF': 'CHF',
  'CLP': '$',
  'CNY': '¥',
  'COP': '$',
  'CRC': '₡',
  'CUC': '$',
  'CUP': '₱',
  'CVE': '$',
  'CZK': 'Kč',
  'DJF': 'Fdj',
  'DKK': 'kr',
  'DOP': 'RD$',
  'DZD': 'دج',
  'EEK': 'kr',
  'EGP': '£',
  'ERN': 'Nfk',
  'ETB': 'Br',
  'ETH': 'Ξ',
  'EUR': '€',
  'FJD': '$',
  'FKP': '£',
  'GBP': '£',
  'GEL': '₾',
  'GGP': '£',
  'GHC': '₵',
  'GHS': 'GH₵',
  'GIP': '£',
  'GMD': 'D',
  'GNF': 'FG',
  'GTQ': 'Q',
  'GYD': '$',
  'HKD': '$',
  'HNL': 'L',
  'HRK': 'kn',
  'HTG': 'G',
  'HUF': 'Ft',
  'IDR': 'Rp',
  'ILS': '₪',
  'IMP': '£',
  'INR': '₹',
  'IQD': 'ع.د',
  'IRR': '﷼',
  'ISK': 'kr',
  'JEP': '£',
  'JMD': 'J$',
  'JOD': 'JD',
  'JPY': '¥',
  'KES': 'KSh',
  'KGS': 'лв',
  'KHR': '៛',
  'KMF': 'CF',
  'KPW': '₩',
  'KRW': '₩',
  'KWD': 'KD',
  'KYD': '$',
  'KZT': 'лв',
  'LAK': '₭',
  'LBP': '£',
  'LKR': '₨',
  'LRD': '$',
  'LSL': 'M',
  'LTC': 'Ł',
  'LTL': 'Lt',
  'LVL': 'Ls',
  'LYD': 'LD',
  'MAD': 'MAD',
  'MDL': 'lei',
  'MGA': 'Ar',
  'MKD': 'ден',
  'MMK': 'K',
  'MNT': '₮',
  'MOP': 'MOP$',
  'MRO': 'UM',
  'MRU': 'UM',
  'MUR': '₨',
  'MVR': 'Rf',
  'MWK': 'MK',
  'MXN': '$',
  'MYR': 'RM',
  'MZN': 'MT',
  'NAD': '$',
  'NGN': '₦',
  'NIO': 'C$',
  'NOK': 'kr',
  'NPR': '₨',
  'NZD': '$',
  'OMR': '﷼',
  'PAB': 'B/.',
  'PEN': 'S/.',
  'PGK': 'K',
  'PHP': '₱',
  'PKR': '₨',
  'PLN': 'zł',
  'PYG': 'Gs',
  'QAR': '﷼',
  'RMB': '￥',
  'RON': 'lei',
  'RSD': 'Дин.',
  'RUB': '₽',
  'RWF': 'R₣',
  'SAR': '﷼',
  'SBD': '$',
  'SCR': '₨',
  'SDG': 'ج.س.',
  'SEK': 'kr',
  'SGD': '$',
  'SHP': '£',
  'SLL': 'Le',
  'SOS': 'S',
  'SRD': '$',
  'SSP': '£',
  'STD': 'Db',
  'STN': 'Db',
  'SVC': '$',
  'SYP': '£',
  'SZL': 'E',
  'THB': '฿',
  'TJS': 'SM',
  'TMT': 'T',
  'TND': 'د.ت',
  'TOP': 'T$',
  'TRL': '₤',
  'TRY': '₺',
  'TTD': 'TT$',
  'TVD': '$',
  'TWD': 'NT$',
  'TZS': 'TSh',
  'UAH': '₴',
  'UGX': 'USh',
  'USD': '$',
  'UYU': '$U',
  'UZS': 'лв',
  'VEF': 'Bs',
  'VND': '₫',
  'VUV': 'VT',
  'WST': 'WS$',
  'XAF': 'FCFA',
  'XBT': 'Ƀ',
  'XCD': '$',
  'XOF': 'CFA',
  'XPF': '₣',
  'YER': '﷼',
  'ZAR': 'R',
  'ZWD': 'Z$'
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (range) {
  if (!range) return '';
  if (typeof range === 'string') {
    return window.tommy.i18n.t('date_range.' + range);
  }
  if (Array.isArray(range)) {
    return formatDate(range[0]) + ' - ' + formatDate(range[1]);
  }
  return range || '';
};

function formatDate(date) {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return year + '-' + month + '-' + day;
}

},{}],11:[function(require,module,exports){
'use strict';

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

var _transactionDetails = require('./controllers/transaction-details');

var _transactionDetails2 = _interopRequireDefault(_transactionDetails);

var _transactionAdd = require('./controllers/transaction-add');

var _transactionAdd2 = _interopRequireDefault(_transactionAdd);

var _listAdd = require('./controllers/list-add');

var _listAdd2 = _interopRequireDefault(_listAdd);

var _listEdit = require('./controllers/list-edit');

var _listEdit2 = _interopRequireDefault(_listEdit);

var _listManagement = require('./controllers/list-management');

var _listManagement2 = _interopRequireDefault(_listManagement);

var _boardSettings = require('./controllers/board-settings');

var _boardSettings2 = _interopRequireDefault(_boardSettings);

var _formatDateRange = require('./format-date-range');

var _formatDateRange2 = _interopRequireDefault(_formatDateRange);

var _currencyMap = require('./currency-map');

var _currencyMap2 = _interopRequireDefault(_currencyMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// == Router

window.tommy.app.f7.onPageInit('accounts__index', _index2.default.init);
window.tommy.app.f7.onPageBack('accounts__index', _index2.default.uninit);
window.tommy.app.f7.onPageAfterAnimation('accounts__index', _index2.default.invalidate);
window.tommy.app.f7.onPageInit('accounts__board-settings', _boardSettings2.default.init);
window.tommy.app.f7.onPageInit('accounts__list-add', _listAdd2.default.init);
window.tommy.app.f7.onPageInit('accounts__list-edit', _listEdit2.default.init);
window.tommy.app.f7.onPageInit('accounts__list-management', _listManagement2.default.init);
window.tommy.app.f7.onPageAfterAnimation('accounts__list-management', _listManagement2.default.render);
window.tommy.app.f7.onPageInit('accounts__transaction-add', _transactionAdd2.default.init);
window.tommy.app.f7.onPageInit('accounts__transaction_details', _transactionDetails2.default.init);
window.tommy.app.f7.onPageBeforeRemove('accounts__transaction_details', _transactionDetails2.default.uninit);

//
// == Template7 Helpers

window.tommy.app.t7.registerHelper('accounts__checklistNumCompleted', function (checklist) {
  var ret = '';
  if (checklist && checklist.items) {
    var completed = checklist.items.filter(function (value) {
      return value.complete;
    });
    ret += completed.length;
    ret += '/';
    ret += checklist.items.length;
  }
  return ret;
});

window.tommy.app.t7.registerHelper('accounts__displayStatus', function (status) {
  return _api2.default.translateStatus(status);
});

window.tommy.app.t7.registerHelper('accounts__displayStatuses', function (statuses) {
  if (statuses) {
    return statuses.map(function (x) {
      return _api2.default.translateStatus(x);
    }).join(', ');
  } else {
    return '';
  }
});

window.tommy.app.t7.registerHelper('accounts__statusSelectOptions', function (statuses) {
  var ret = '';
  for (var i = 0; i < _api2.default.STATUSES.length; i++) {
    var status = _api2.default.STATUSES[i];
    var selected = statuses && statuses.indexOf(status) !== -1;
    ret += '<option value="' + status + '" ' + (selected ? 'selected' : '') + '>' + _api2.default.translateStatus(status) + '</option>';
  }
  return ret;
});

window.tommy.app.t7.registerHelper('accounts__ifCanEditList', function (list, options) {
  var account = window.tommy.config.getCurrentAccount();
  // BUG: Due to some unknown bug `this` is undefined in this function,
  // so substituting with the `list` variable for return variables
  // console.log('accounts__canEditList', this, list, options)

  // Default lists (the list automatically created for each team member) can
  // only be edited by admins
  if (list.permission_to.indexOf('update') !== -1) return options.fn(list, options.data);else return options.inverse(list, options.data);
});

window.tommy.app.t7.registerHelper('accounts__displayDateRange', function (range) {
  return (0, _formatDateRange2.default)(range);
});

window.tommy.app.t7.registerHelper('accounts__formatTransactionAmount', function (item) {
  return (item.status === 'paid' || item.status === 'failed' ? '-' : '+') + ' ' + (0, _currencyMap2.default)(item.currency) + item.amount;
});
window.tommy.app.t7.registerHelper('accounts__currencySymbol', function (code) {
  return (0, _currencyMap2.default)(code);
});
window.tommy.app.t7.registerHelper('accounts__formatTransactionStatus', function (status) {
  return status[0].toUpperCase() + status.substr(1);
});
window.tommy.app.t7.registerHelper('accounts__formatTransactionDate', function (date) {
  if (!date) return '';
  var d = new Date(date);
  var year = d.getFullYear();

  var month = d.getMonth() + 1;
  if (month < 10) month = '0' + month;

  var day = d.getDate();
  if (day < 10) day = '0' + day;

  var hours = d.getHours();
  if (hours < 10) hours = '0' + hours;

  var minutes = d.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;

  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
});

},{"./api":1,"./controllers/board-settings":2,"./controllers/index":3,"./controllers/list-add":4,"./controllers/list-edit":5,"./controllers/list-management":6,"./controllers/transaction-add":7,"./controllers/transaction-details":8,"./currency-map":9,"./format-date-range":10}]},{},[11]);
