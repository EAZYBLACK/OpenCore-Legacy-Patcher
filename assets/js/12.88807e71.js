(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{320:function(e,t,o){e.exports=o.p+"assets/img/mountefi.f1bedccd.png"},385:function(e,t,o){e.exports=o.p+"assets/img/ocdebugimage.18eb97ef.png"},386:function(e,t,o){e.exports=o.p+"assets/img/logs-efi.c416d33f.png"},453:function(e,t,o){"use strict";o.r(t);var r=o(25),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"how-to-debug-with-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-debug-with-opencore"}},[e._v("#")]),e._v(" How to debug with OpenCore")]),e._v(" "),r("p",[e._v("For those who've hit an odd bug and are unsure if it's user error or within the patcher, we recommend asking on the "),r("a",{attrs:{href:"https://discord.gg/rqdPgH8xSN",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore Patcher Paradise Discord Server"),r("OutboundLink")],1),e._v(" for help.")]),e._v(" "),r("h2",{attrs:{id:"debugging-yourself"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debugging-yourself"}},[e._v("#")]),e._v(" Debugging yourself")]),e._v(" "),r("p",[e._v("The easiest way to debug yourself is via Patcher Settings. Here there are many different settings, however, the 3 main options that will help are:")]),e._v(" "),r("ul",[r("li",[e._v('"Enable Verbose Mode"')]),e._v(" "),r("li",[e._v('"Enable OpenCore DEBUG"')]),e._v(" "),r("li",[e._v('"Enable Kext DEBUG"')])]),e._v(" "),r("p",[r("img",{attrs:{src:o(385),alt:""}})]),e._v(" "),r("p",[e._v("When you've enabled these 3 options, rebuild OpenCore and install to your drive. This will provide much greater debug information as well as write logs to the EFI Partition.")]),e._v(" "),r("h2",{attrs:{id:"obtaining-opencore-logs-from-disk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-opencore-logs-from-disk"}},[e._v("#")]),e._v(" Obtaining OpenCore logs from disk")]),e._v(" "),r("p",[e._v('With "Enable OpenCore DEBUG" set, on every boot there will be a .txt file generated on the EFI Partition. To grab these logs, '),r("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[e._v("download and run MountEFI"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("p",[r("img",{attrs:{src:o(320),alt:""}})]),e._v(" "),r("p",[e._v("Once you've mounted the EFI Partition of the drive you have macOS on, you should see some nice logs:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(386),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"obtaining-kernel-logs-from-macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-kernel-logs-from-macos"}},[e._v("#")]),e._v(" Obtaining Kernel logs from macOS")]),e._v(" "),r("p",[e._v('With "Enable Kext DEBUG" set, every boot will now have much more detailed logs stored in the OS. To get these logs, simply run the below command:')]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("dmesg")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ~/Desktop/DMESG.txt\n")])])]),r("p",[e._v("From there, you'll have a log on your desktop.")]),e._v(" "),r("h2",{attrs:{id:"filing-an-issue-with-us"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filing-an-issue-with-us"}},[e._v("#")]),e._v(" Filing an issue with us")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Currently issues have been disabled due to "),r("RouterLink",{attrs:{to:"/ISSUES-HOLD.html"}},[e._v("current events")]),e._v(". You can continue to receive support in the "),r("a",{attrs:{href:"https://discord.gg/rqdPgH8xSN",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore Patcher Paradise Discord Server"),r("OutboundLink")],1),e._v(", where there are active members of the community available.")],1)]),e._v(" "),r("p",[e._v("Now that you have proper logs, you can now "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("file issues with us"),r("OutboundLink")],1),e._v(". This is a reminder to include the following info:")]),e._v(" "),r("ul",[r("li",[e._v("Model that you're patching for (ie. MacBookPro10,1)")]),e._v(" "),r("li",[e._v("Target OS (ie. macOS 11.2.3)")]),e._v(" "),r("li",[e._v("Host OS (ie. macOS 10.15.7)")]),e._v(" "),r("li",[e._v("Upload of your OpenCore Build Folder")]),e._v(" "),r("li",[e._v("Upload of your OpenCore log (if applicable)")]),e._v(" "),r("li",[e._v("Upload of your Kernel log (if applicable)")])]),e._v(" "),r("p",[e._v("Additionally, please search to see if the issue has been reported before. This avoids having duplicate issues.")])])}),[],!1,null,null,null);t.default=s.exports}}]);