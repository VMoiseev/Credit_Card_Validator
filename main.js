(()=>{"use strict";new class{constructor(t){this.parentEl=t,this.activeCard=null}static get markup(){return'\n    <div class="card-validator" data-widget="card-validator-widget">\n      <ul class="cards">\n        <li>\n          <span class="card visa" data-id="card" title="Visa">Visa</span>\n        </li>\n        <li>\n          <span class="card master" data-id="card" title="Mastercard">Mastercard</span>\n        </li>\n        <li>\n          <span class="card diners" data-id="card" title="Diners Club">Diners Club</span>\n        </li>\n        <li>\n          <span class="card jcb" data-id="card" title="JCB International">JCB International</span>\n        </li>\n        <li>\n          <span class="card mir" data-id="card" title="Мир">Мир</span>\n        </li>\n      </ul>\n      <form class="validator-form" data-id="form">\n        <input class="form-control" data-id="input" name="card_number" type="text" placeholder="Card number" required>\n        <a class="form-button" href="#" data-id="button">Click to Validate</a>\n      </form>\n      <p class="result" data-id="result"></p>\n    </div>\n    '}static get buttonSelector(){return"[data-id=button]"}static get formSelector(){return"[data-id=form]"}static get inputSelector(){return"[data-id=input]"}static get cardSelector(){return"[data-id=card]"}static get resultSelector(){return"[data-id=result]"}bindToDOM(){this.parentEl.innerHTML=this.constructor.markup,this.button=this.parentEl.querySelector(this.constructor.buttonSelector),this.form=this.parentEl.querySelector(this.constructor.formSelector),this.input=this.parentEl.querySelector(this.constructor.inputSelector),this.cards=this.parentEl.querySelectorAll(this.constructor.cardSelector),this.result=this.parentEl.querySelector(this.constructor.resultSelector),this.button.addEventListener("click",(t=>this.onSubmit(t))),this.form.addEventListener("submit",(t=>this.onSubmit(t)))}onSubmit(t){t.preventDefault(),this.activeCard&&(this.activeCard.classList.remove("card-highlight"),this.activeCard=null);const e=this.input.value.trim(),r=function(t){const e={status:!1,text:"No number value"};return t?isNaN(+t)?(e.text="Invalid characters in the card number",e):t.length<13?(e.text="The number is too short",e):(e.status=function(t){let e,r=0;for(let a=0;a<t.length;a++)e=+t[a],a%2||(e*=2,e>9&&(e-=9)),r+=e;return!(r%10)}(t),e.status?e.text="The number is valid":e.text="The number is invalid",e):e}(e);if(this.result.innerText=r.text,!r.status)return void this.result.classList.remove("valid");this.input.value="",this.result.classList.add("valid");const a=function(t){if("4"===t[0])return 0;if("2"===t[0])return 1;switch(+t.slice(0,2)){case 51:case 52:case 53:case 54:case 55:return 2;case 30:case 36:case 38:return 3;case 31:case 35:return 4;default:return-1}}(e);a<0?this.result.innerText+="(unknown payment system)":(this.activeCard=this.cards[a],this.activeCard.classList.add("card-highlight"))}}(document.querySelector(".container")).bindToDOM()})();