function printDiv() {
    const activityOption1Description="Aktivitātes opcija Nr1";
    const activityOption2Description="Aktivitātes opcija Nr2";
    const activityOption3Description="Aktivitātes opcija Nr3";
    var opt = {
        margin:       1,
        filename:     'bilete.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'A4', orientation: 'portrait' }
      };
    if (document.getElementById("activity1").value=="activityOption1") {
        var printContents = activityOption1Description;
    }
    
    var originalContents = document.body.innerHTML;

 
    var element = document.getElementById("ticket");
    html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
        window.open(pdf.output('bloburl'), '_blank');
      });
    //window.print();

    document.body.innerHTML = originalContents;
}