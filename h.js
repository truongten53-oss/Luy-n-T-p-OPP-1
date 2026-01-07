let Hinhtron = function (bankinh) {
    this.bankinh = bankinh;
    this.Bankinh = function () {
        return bankinh;
    }
    this.dientich = function () {
        return Math.PI * bankinh * bankinh;
    }
};
let hinhtron = new Hinhtron(4) ;
let bankinh = hinhtron.Bankinh();
let dientich = hinhtron.dientich();
alert("Bán Kính = " + bankinh + ", Diện Tích = " + dientich);

