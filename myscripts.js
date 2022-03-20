function printDiv() {
    var printContents = document.getElementById("activity1").value;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}