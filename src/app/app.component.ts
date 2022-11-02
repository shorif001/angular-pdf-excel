import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
//  dashboard theke uploaded pdf download korar jonno start
// import { saveAs } from 'file-saver';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pdf-excel';

  //npm i xlsx --save
  //excel part start
  fileName = 'ExcelSheet.xlsx';
  userList = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca"
    }
  ]
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  //excel part end

  //PDF part start


  //PDF part end


  //  dashboard theke uploaded pdf download korar jonno start
  // npm install @types/file-saver --save-dev
  //npm install file-saver --save
  constructor(private httpforPdf: HttpClient) { }
  downloadPdf() {
    this.httpforPdf.get('https://www.africau.edu/images/default/sample.pdf',
      { responseType: 'arraybuffer' }).subscribe((pdf) => {
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const fileName = "Unmashed.pdf";
        saveAs(blob, fileName);
        alert("downloaded");
        // console.log("downloaded");
      }, err => {
        console.log(err);
      })
  }
  //  uploaded pdf download korar jonno end
}
