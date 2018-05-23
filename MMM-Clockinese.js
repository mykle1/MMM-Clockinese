/* Magic Mirror
 * Module: MMM-Clockinese
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-Clockinese",{
		
	defaults: {
			height:"210px",
			width:"210px"
	},
	
	getStyles: function() {
        return ["MMM-Clockinese.css"];
    },

    
	getDom: function() {
		
		
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
        
        iframe.src="http://free.timeanddate.com/clock/i692cr7d/n179/szw210/szh210/hoc000/hbw0/hfc000/cf100/hnc000/fan2/fac0f0/fnu3/fdi84/mqcfff/mqs3/mql10/mqw1/mqd62/mhcfff/mhs3/mhl9/mhw1/mhd62/mmv0/hhc0f0/hhs3/hhl50/hhb0/hhw8/hhr5/hmc0f0/hms3/hml70/hmb0/hmw8/hmr5/hss3/hsl85/hsb0/hsw3/hsr2";
		
		return iframe;
	},
	
	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_CLOCKINESE') {
            this.hide(1000);
        }  else if (notification === 'SHOW_CLOCKINESE') {
            this.show(1000);
        }
            
    },

});
