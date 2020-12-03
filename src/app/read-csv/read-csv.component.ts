import { Component, ViewChild } from '@angular/core';
import { Sesion } from '../models/sesion';

@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrls: ['./read-csv.component.scss']
})
export class ReadCSVComponent{
  title = 'Leer archivos CSV';
  public archivos: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.archivos = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<any>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: Sesion = new Sesion('',[[],[]],0,'','');
        csvRecord.nombreAlumno = curruntRecord[0].trim();
        csvRecord.asistencia = curruntRecord[1].trim();
        csvRecord.unidadC = curruntRecord[2].trim();
        csvRecord.grupo = curruntRecord[3].trim();
        csvRecord.curso = curruntRecord[4].trim();
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }


  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.archivos = [];
  }

}
