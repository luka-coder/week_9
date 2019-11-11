function div(){
    days = [
        "კვირა",
        "ორშაბათი",
        "სამშაბათი",
        "ოთხშაბათი",
        "ხუთშაბათი",
        "პარასკევი",
        "შაბათი"
    ];
    div = document.getElementById("div").value;
    t = new Date();
    t.setDate(div);
    console.log(t);
    d1 = document.getElementById("d1")

}