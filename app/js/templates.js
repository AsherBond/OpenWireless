(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dashboard'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " \n            <div class=\"ping\">";
  if (helper = helpers.pingSpeed) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pingSpeed); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<small> ";
  if (helper = helpers.pingSpeedMetric) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pingSpeedMetric); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ping</small></div>\n          ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"devices\"><span class=\"device-count\">";
  if (helper = helpers.devices) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.devices); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><small> devices</small></div>\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <div class=\"bandwidth\">";
  if (helper = helpers.maxBandwidthPercent) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.maxBandwidthPercent); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%<small> max <br> bandwidth </small></div>\n          ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <div class=\"bandwidth\"><span id=\"monthlyBandwidth\">";
  if (helper = helpers.monthlyBandwidthUsage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.monthlyBandwidthUsage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <small>used of</small> ";
  if (helper = helpers.maxMonthlyBandwidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.maxMonthlyBandwidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<small> ";
  if (helper = helpers.maxMonthlyBandwidthMetric) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.maxMonthlyBandwidthMetric); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " max <br> per month </small></div>\n          ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"status\"><span class=\"";
  if (helper = helpers.connectivity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.connectivity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.connectivity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.connectivity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"status toggle\" id=\"";
  if (helper = helpers.stateId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stateId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " on-button\">On</span> | <span class=\"";
  if (helper = helpers.state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " off-button\">Off</span></div>\n        ";
  return buffer;
  }

  buffer += "      <div class=\"network on\">\n        <header>\n          <img src=\"";
  if (helper = helpers.imageSource) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imageSource); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"router-on\" class=\"icon\" />\n          <div class=\"speed\">\n            <div class=\"upload\"><span class=\"upload-speed\">";
  if (helper = helpers.uploadSpeed) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uploadSpeed); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><span> ";
  if (helper = helpers.uploadSpeedMetric) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uploadSpeedMetric); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n            <div class=\"download\"><span class=\"download-speed\">";
  if (helper = helpers.downloadSpeed) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.downloadSpeed); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><span> ";
  if (helper = helpers.downloadSpeedMetric) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.downloadSpeedMetric); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n          </div>\n        </header>\n        <div class=\"title\">\n          <h2>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pingSpeed), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.devices), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.maxBandwidthPercent), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.maxMonthlyBandwidth), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.connectivity), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.state), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      </div>\n";
  return buffer;
  });
templates['setSSID'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Restarting</h1>\n<p>SSID updated. Your router is now restarting.<p>\n<p>Please connect to your new network <b>";
  if (helper = helpers.ssid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ssid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> when it becomes available.</p>\n<a href='dashboard.html'>View Router Dashboard</a>\n";
  return buffer;
  });
templates['settings-dropdown'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n          <option>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n        ";
  return buffer;
  }

  buffer += "        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['settings'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "        <h2>Administration</h2>\n        <div class=\"section\">\n          <p>\n            <a href=\"./changePassword.html\">Change admin password</a>\n          </p>\n          <p id=\"SSH\">\n            <a>Add or edit SSH keys</a>\n          </p>\n          <div id=\"enterSshKey\">\n            <textarea id='input-SSH'/></textarea><br>\n            <button id='submit-SSH'>Submit</button>\n          </div>\n          <p>Software Version: ";
  if (helper = helpers.softwareVersion) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.softwareVersion); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Date of version update: ";
  if (helper = helpers.softwareVersionUpdateDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.softwareVersionUpdateDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Date last checked for update: ";
  if (helper = helpers.lastCheckedDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastCheckedDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p><a href=\"#\">Check for update</a></p>\n          <p>WAN IP: ";
  if (helper = helpers.wanIp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.wanIp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>LAN IP: ";
  if (helper = helpers.lanIp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lanIp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n\n        <h2>ISP Speeds</h2>\n        <div class=\"section\">\n          <p>Set these to help optimize your router.</p>\n          <p>ISP Download Speed: <span id=\"ispDownloadSpeed\" class=\"editable\">";
  if (helper = helpers.ispDownloadSpeed) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ispDownloadSpeed); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> Mb/s</p>\n          <p>ISP Upload Speed: <span id=\"ispUploadSpeed\" class=\"editable\">";
  if (helper = helpers.ispUploadSpeed) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ispUploadSpeed); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> Mb/s</p>\n        </div>\n\n        <h2>Private Wifi</h2>\n        <div class=\"section\">\n          <label for=routerSsid>SSID</label>\n          <span>";
  if (helper = helpers.routerSsid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.routerSsid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n          <p><a href=\"./setSSID.html\">Set network SSID and passphrase</a></p>\n          <br>\n          <p>\n            <label for=\"routerBand\">Frequency</label>\n            <span class=\"selector\"><select id=\"routerBand\">RouterBand</select></span>\n          </p>\n          <p>\n            <label for=\"routerChannel\">Channel</label>\n            <select id=\"routerChannel\">RouterChannel</select>\n          </p>\n          <p>\n            <label for=\"routerChannelBandwidth\">Channel bandwidth</label>\n            <select id=\"routerChannelBandwidth\">RouterChannelBandwidth</select>\n          </p>\n          <p>\n            <label for=\"routerVpnConfiguration\">VPN/TOR Configuration</label>\n            <select id=\"routerVpnConfiguration\">RouterVpnConfiguration</select>\n          </p>\n        </div>\n\n        <h2>Open Wireless</h2>\n        <div class=\"section\">\n          <p>\n            <label for=openwirelessBandwidth>Max bandwidth fraction</label>\n            <span class=\"editable\" id=\"openwirelessBandwidth\">";
  if (helper = helpers.openwirelessBandwidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.openwirelessBandwidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>%\n          </p>\n          <p>\n            <label for=\"openwirelessData\">Max total data per month</label>\n            <span class=\"editable\" id=\"openwirelessData\">";
  if (helper = helpers.openwirelessData) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.openwirelessData); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> MB\n          </p>\n          <p><a href=\"#\">Reset total data used this month</a></p>\n          <p>Change data auto-reset date [Datepicker]</p>\n          <p>\n            <label for=\"openwirelessBand\">Choose band</label>\n            <select id=\"openwirelessBand\">OpenwirelessBand</select>\n          </p>\n          <p>\n            <label for=\"openwirelessChannel\">Channel</label>\n            <select id=\"openwirelessChannel\">OpenwirelessChannel</select>\n          </p>\n          <p>\n            <label for=\"openwirelessChannelBandwidth\">Channel bandwidth</label>\n            <select id=\"openwirelessChannelBandwidth\">OpenwirelessChannelBandwidth</select>\n          </p>\n          <p>\n            <label for=\"openwirelessEncryption\">WiFi security</label>\n            <select id=\"openwirelessEncryption\">OpenwirelessEncryption</select>\n          </p>\n          <p>\n            <label for=\"openwirelessVpnConfiguration\">VPN/TOR Configuration</label>\n            <select id=\"openwirelessVpnConfiguration\">OpenwirelessVpnConfiguration</select>\n          </p>\n        </div>\n";
  return buffer;
  });
})();