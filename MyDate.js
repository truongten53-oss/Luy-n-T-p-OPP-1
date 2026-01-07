function MyDate(day,month,year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return  this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    } /* Xây dựng phương thức trả về ngày thàng năm */
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
       this.year = year;
    }
};/* Xây dựng phương thức thiết đặt lại các thuộc tinh day month year */
let date = new MyDate(4, 1, 24);
date.setDay(10);
date.setMonth(3);
date.setYear(2004);
/* Sử dụng lớp vừa tạo , tạo đối tượng date */
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
/* Truy cập phương thức của lớp date */
alert(day + "/" + month + "/" + year );