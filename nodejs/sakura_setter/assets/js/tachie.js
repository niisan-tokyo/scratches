function Tachie() {
  this.img = new Image(600, 848);
  this.img.src = '/assets/img/tachie2.png';
};

Tachie.prototype.imgSet = (man) => {
  let ratio = man[2] / 150;
  let offset = {
    x: man[0] - 700 * ratio,
    y: man[1] - 75 * ratio,
  };

  let img = new Image(600 * ratio, 848 * ratio);
  img.src = '/assets/img/tachie2.png';

  return {img: img, offset: offset};
}

Tachie.prototype.getList = positions => {
  let arr = [];
  let pre = positions.shift();
  positions.forEach(pos => {
    let w = pos[0] - pre[0];
    let h = 0;
    let hs;
    if (pre[1] == 0) {
      hs = pos[1];
    } else if (pos[1] == 0) {
      hs = pre[1];
    } else {
      h = pos[1] - pre[1];
      hs = pre[1];
    }
    let s = (pos[2] + pre[2]) / 2;

    let count = Math.max(0, Math.floor(((w - 2 * s) / s)));
    console.log(hs);
    for (i = 0; i < count; i++) {
      arr.push([pre[0] - s + i * w / count, hs + i * h / count, s]);
    }

    pre = pos;
  });

  return arr;
}
