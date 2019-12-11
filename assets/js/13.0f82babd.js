(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{234:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("KernelCare is compatible with 64-bit versions of CentOS/RHEL 6.x and 7.x, CloudLinux 6.x and 7.x, Virtuozzo/PCS/OpenVZ 2.6.32, Debian 8 and 9, Proxmox VE 4, Virt-SIG/Xen4CentOS 6 and 7, Ubuntu 14.04, 15.04 and 16.04 kernels. The list of compatible kernels can be found on the following link: "),s("a",{attrs:{href:"https://patches.kernelcare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://patches.kernelcare.com/"),s("OutboundLink")],1),e._v(" .")]),e._v(" "),s("p",[e._v("To install KernelCare run:")]),e._v(" "),e._m(1),s("p",[e._v("or:")]),e._v(" "),e._m(2),s("p",[e._v("If you are using IP-based license, nothing else required to be done.")]),e._v(" "),s("p",[e._v("If you are using key-based license, run:")]),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),s("p",[e._v("To check if patches applied run:")]),e._v(" "),e._m(7),s("p",[e._v("The software will automatically check for new patches every 4 hours.")]),e._v(" "),s("p",[e._v("If you would like to run update manually:")]),e._v(" "),e._m(8),s("p",[e._v("To check current kernel compatibility with KernelCare, use the following "),s("a",{attrs:{href:"https://raw.githubusercontent.com/iseletsk/kernelchecker/master/py/kc-compat.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("script"),s("OutboundLink")],1),e._v(" by running:")]),e._v(" "),e._m(9),s("p",[e._v("or:")]),e._v(" "),e._m(10),s("p",[e._v("More information can be found on the link: "),s("a",{attrs:{href:"https://www.kernelcare.com/faq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.kernelcare.com/faq/"),s("OutboundLink")],1)]),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("To switch from Ksplice to KernelCare,  use the following script, which uninstalls Ksplice and installs KernelCare itself instead.")]),e._v(" "),s("p",[e._v("It will automatically detect and abort if the system is not 64-bit (as KernelCare doesn't support that).")]),e._v(" "),s("p",[e._v("It will also detects when Ksplice module cannot be uninstalled, and retries multiple times.")]),e._v(" "),s("p",[e._v("Download the script here: "),s("a",{attrs:{href:"http://patches.kernelcare.com/ksplice2kcare",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://patches.kernelcare.com/ksplice2kcare"),s("OutboundLink")],1),e._v(" .")]),e._v(" "),s("p",[e._v("Run the command:")]),e._v(" "),e._m(12),s("p",[e._v("The key can be created/retrieved in KernelCare Keys section of CLN.")]),e._v(" "),s("p",[e._v("If you want to use IP based licenses, run:")]),e._v(" "),e._m(13),s("p",[e._v("You have to add IP license for that server, and it is just two letters: IP, not the actual IP.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"installation-of-kernelcare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-of-kernelcare","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation of KernelCare")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("curl -s -L https://kernelcare.com/installer | bash\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("wget -qq -O - https://kernelcare.com/installer | bash\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ /usr/bin/kcarectl --register KEY\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("KEY")]),this._v(" is the registration key code string provided when you sign up for purchase or trial of the product.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you are experiencing "),t("strong",[t("em",[this._v("Key limit reached")])]),this._v(" error after the end of the trial period you should first unregister the server by running:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kcarectl --unregister\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ /usr/bin/kcarectl --info\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ /usr/bin/kcarectl --update\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("curl -s -L https://kernelcare.com/checker | python\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("wget -qq -O - https://kernelcare.com/checker | python\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"switching-from-ksplice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switching-from-ksplice","aria-hidden":"true"}},[this._v("#")]),this._v(" Switching from Ksplice")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ bash ksplice2kcare $KERNELCARE_KEY$\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ bash ksplice2kcare IP\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default the script will attempt 3 times to uninstall ksplice, waiting 60 seconds in between. You can run it using "),t("code",[this._v("nohup")]),this._v(" if you don't want to wait.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can change that by editing the script and changing "),t("code",[this._v("RETRY")]),this._v(" and "),t("code",[this._v("SLEEP")]),this._v(" values.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The script will exit with exit code "),t("code",[this._v("0")]),this._v(" and message "),t("em",[this._v("Done")]),this._v(" on success. Otherwise, it will produce exit code "),t("code",[this._v("-1")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Complete log file can be found at "),t("code",[this._v("/var/log/ksplice2kcare.log")]),this._v(".")])}],!1,null,null,null);t.default=a.exports}}]);