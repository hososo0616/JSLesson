document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim();
  let constr = '';

  for(let c of str) {
    constr += `<span class='char'>${c}</span>`;
  }
  el.innerHTML = constr;
});

class TextAnimation {
  constructor(el) {
      this.el = document.querySelector(el);
      this.chars = el.innerHTML.trim().split("");
      this.el.innerHTML = this._splittext();
  }

  _splittext() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }

  log() {
    console.log(this.el);
  }
}