function dro(){
    days = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    d = document.getElementById("div1");
    t = new Date();
    t.setDate(25);
    text = "დღეს არის: "+days[t.getDay()];
    d.innerHTML = text;

}

dro();