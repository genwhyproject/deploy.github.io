(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b6b20b8"],{1279:function(t,s,i){},"4ebf":function(t,s,i){"use strict";i.r(s);var l,e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("card",[i("div",{attrs:{slot:"header"},slot:"header"},[i("h5",{staticClass:"title"},[t._v("ADD LISTING")])]),i("form",[i("div",{staticClass:"row"},[i("label",{staticClass:"col-md-2 col-form-label offset-md-1 text-right"},[t._v("OWNER NAME")]),i("div",{staticClass:"col-md-3"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.ownerName,callback:function(s){t.$set(t.listing,"ownerName",s)},expression:"listing.ownerName"}})],1)]),i("div",{staticClass:"row"},[i("label",{staticClass:"col-md-2 col-form-label offset-md-1 text-right"},[t._v("IC")]),i("div",{staticClass:"col-md-3"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.ic,callback:function(s){t.$set(t.listing,"ic",s)},expression:"listing.ic"}})],1),i("label",{staticClass:"col-md-2 col-form-label text-right"},[t._v("CONTACT")]),i("div",{staticClass:"col-md-2"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.contact,callback:function(s){t.$set(t.listing,"contact",s)},expression:"listing.contact"}})],1)]),i("div",{staticClass:"row"},[i("label",{staticClass:"col-md-2 col-form-label offset-md-1 text-right"},[t._v("EMAIL")]),i("div",{staticClass:"col-md-3"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.email,callback:function(s){t.$set(t.listing,"email",s)},expression:"listing.email"}})],1)]),i("hr"),i("div",{attrs:{slot:"header"},slot:"header"},[i("h5",{staticClass:"title"},[t._v("ADD LISTING DETAIL")])]),i("div",{staticClass:"row"},[i("label",{staticClass:"col-md-2 col-form-label offset-md-1 text-right"},[t._v("BLOCK NO")]),i("div",{staticClass:"col-md-3"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.blockno,callback:function(s){t.$set(t.listing,"blockno",s)},expression:"listing.blockno"}})],1),i("label",{staticClass:"col-md-2 col-form-label text-right"},[t._v("SQFT")]),i("div",{staticClass:"col-md-2"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.sqft,callback:function(s){t.$set(t.listing,"sqft",s)},expression:"listing.sqft"}})],1)]),i("div",{staticClass:"row"},[i("label",{staticClass:"col-md-2 col-form-label offset-md-1 text-right"},[t._v("RENTAL FEE")]),i("div",{staticClass:"col-md-3"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.rentalFees,callback:function(s){t.$set(t.listing,"rentalFees",s)},expression:"listing.rentalFees"}})],1)]),i("div",{staticClass:"row"},[i("label",{staticClass:"col-md-2 col-form-label offset-md-1 text-right"},[t._v("MANAGEMENT FEE")]),i("div",{staticClass:"col-md-3"},[i("fg-input",{attrs:{type:"text"},model:{value:t.listing.managementFees,callback:function(s){t.$set(t.listing,"managementFees",s)},expression:"listing.managementFees"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 offset-md-4"},[i("n-button",{staticClass:"button",attrs:{type:"info"},nativeOn:{click:function(s){t.post(),t.handleAdd()}}},[t._v("ADD")])],1)])])])],1)])},a=[],n=i("ade3"),o=(i("7f7f"),i("2af9")),c=i("3d20"),d=i.n(c),r={components:(l={},Object(n["a"])(l,o["s"].name,o["s"]),Object(n["a"])(l,o["x"].name,o["x"]),l),data:function(){return{listing:{ownerName:"",ic:"",contact:"",email:"",blockno:"",sqft:"",rentalFees:"",managementFees:"",availability:!1,status:"OCCUPIED"},switches:{defaultOn:!0}}},methods:{post:function(){this.$http.post("https://admindashboard-b2ab9.firebaseio.com/listing.json",this.listing)},handleAdd:function(){d()({title:"You added ".concat(this.listing.ownerName),buttonsStyling:!1,type:"success",confirmButtonClass:"btn btn-success btn-fill",onClose:function(){window.location.href="#/listing/listing"}})}}},m=r,f=(i("7688"),i("2877")),g=Object(f["a"])(m,e,a,!1,null,"79a45868",null);g.options.__file="AddListing.vue";s["default"]=g.exports},7688:function(t,s,i){"use strict";var l=i("1279"),e=i.n(l);e.a}}]);
//# sourceMappingURL=chunk-2b6b20b8.ded89419.js.map