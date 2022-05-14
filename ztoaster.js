/**
 * zToaster v1.0
 * oxterisk@protonmail.com
 */

class zToaster {

    constructor( content = "", options = {} ) {

		this.minDuration = 1000;
		this.defaultDuration = 3000;

        this.type = options.hasOwnProperty('type') ? options.type : "success";
		this.title = options.hasOwnProperty('title') ? options.title : "";
		this.content = content;
		this.newerOnTop = options.hasOwnProperty('newerOnTop') && !options.newerOnTop ? false : true;
		this.width = options.hasOwnProperty('width') ? options.width : '';
		this.duration = options.hasOwnProperty('duration') ? options.duration : this.defaultDuration;
		this.position = options.hasOwnProperty('position') ? options.position : "top-right";
		this.showIcon = options.hasOwnProperty('showIcon') && !options.showIcon ? false : true;
		this.icon = options.hasOwnProperty('icon') ? options.icon : '';
		this.showClose = options.hasOwnProperty('showClose') && !options.showClose ? false : true;

		this.textColor = options.hasOwnProperty('textColor') ? options.textColor : '';
		this.backgroundColor = options.hasOwnProperty('backgroundColor') ? options.backgroundColor : '';

		this.checkDuration();

		this.toaster = "";
		this.createToaster();
		this.createToast();

    }

	createToaster() {

		const idToaster = "ztoaster-" + this.position;

		if (!document.getElementById(idToaster)) {

			this.toaster = document.createElement('div');
			this.toaster.setAttribute('id', idToaster);
			document.body.appendChild(this.toaster);

		} else {

			this.toaster = document.getElementById(idToaster);

		}

		this.toaster.classList.add("ztoaster");
		this.toaster.classList.add(idToaster);

	}

	createToast() {

		const scope = this;
		const idToast = Math.random().toString(12).substr(2);

		const toast = document.createElement("div");
		toast.setAttribute("id", `ztoast-${idToast}`);
		toast.className = "ztoast";
		toast.classList.add("ztoast-" + this.type);
		if (this.textColor != '') { toast.style.color = this.textColor; }
		if (this.backgroundColor != '') { toast.style.backgroundColor = this.backgroundColor; }
		if (this.width != '') { toast.style.width = this.width; }

		const divTitle = this.title != "" ? `<div class="ztoast-title">${this.title}</div>` : "";

		let divIcon = "";
		if ( this.showIcon )
			divIcon = `<div class="ztoast-icon">${this.getIcon()}</div>`;

		toast.innerHTML = `${divIcon}<div style="flex-grow:2">${divTitle}<div class="ztoast-content">${this.content}</div></div>`;

		let divClose = "";
		if ( this.showClose ) {

			divClose = document.createElement("div");
			divClose.className = "ztoast-close";
			divClose.innerHTML = "&#10006;";
			divClose.addEventListener( "click", function() { toast.remove(); } );
			toast.appendChild(divClose);

		}

		if ( this.newerOnTop )
			this.toaster.insertBefore(toast, this.toaster.firstChild);
		else
			this.toaster.appendChild(toast);


		this.fadeInToast( toast );

		if ( this.duration != 0 ) {
			let time = setTimeout(function () {
				scope.fadeOutToast(toast);
			}, this.duration);

			toast.addEventListener( "mouseover", function() { clearTimeout(time); } );
			toast.addEventListener( "mouseout", function() {
				time = setTimeout(function () {
					scope.fadeOutToast(toast);
				}, scope.duration);
			} );
		}

	}

	fadeInToast(elem) {

		elem.style.display = "flex";
		elem.style.animation = "fade-in .5s";

	}

	fadeOutToast(elem) {

		const scope = this;

		elem.style.animation = "fade-out .5s";
		setTimeout(function () {
			scope.destroyToast(elem);
		}, 400);

	}

	getIcon() {

		if ( this.icon == '' ) {

			switch( this.type ) {

				case 'success' :
					return "&#10004;";
				case 'error' :
					return "&#10006;";
				case 'info' :
					return "&#8505;";
				case 'warning' :
					return "&#9888;";

			}

		} else {

			return this.icon;

		}

	}

	destroyToast(elem) {

		const parent = elem.parentNode;
		elem.remove();
		if ( parent && parent.innerHTML == "" ) { parent.remove(); }

	}

	checkDuration() {

		if (isNaN(this.duration) || this.duration < 0 )
			this.duration = 0;
		else if ( this.duration > 0 && this.duration < this.minDuration )
			this.duration = this.defaultDuration;

	}

}

const ztoast = ( content = "", options = {} ) => new zToaster( content, options );
